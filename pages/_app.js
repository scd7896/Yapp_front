import React from "react";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import AppLayout from "../componets/AppLayOut";

import rootSaga from "../saga";
import reducer from "../reducer";

import "../css/wrraper.scss";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    //getInitialProps 가 서버사이드렌더링 효과를 줄수 있게 도와주는거에요
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          
          <meta content="width=device-width,minimum-scale=1.0" name="viewport"/>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="//cdn.quilljs.com/1.2.6/quill.snow.css"
          />
          {/* google web font Montserrat */}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          ></link>
          {/* google web font Noto Sans */}
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          ></link>

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        </Head>

        <AppLayout>
          <Component id="wrraper" {...pageProps} />
        </AppLayout>
      </Provider>
    );
  }
}
const configureStore = (initialState, option) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !option.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};
export default withRedux(configureStore)(MyApp);
