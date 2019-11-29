import React from "react";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga'
import { applyMiddleware, compose, createStore } from "redux";
import { Provider, connect } from "react-redux";
import createSagaMiddleware from "redux-saga";
import cookies from 'next-cookies'
import axios from 'axios'
import AppLayout from "../componets/AppLayOut";

import rootSaga from "../saga";
import reducer from "../reducer";

import mobileCheck from '../methods/mobileCheck'

import "../css/wrraper.scss";
import url from '../url'
import { GET_MYDATA_REQUEST, GET_MYDATA_SUCCESS, GET_MYDATA_FAILURE } from "../action";

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
  if(option.req || !option.isServer){
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  
  return store;
};
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {




    let pageProps = {}
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx)
    }
    //getInitialProps 가 서버사이드렌더링 효과를 줄수 있게 도와주는거에요
    pageProps.query = ctx.query;
    const userToken = cookies(ctx)['user-token']
    const me = ctx.store.getState().user;
    if (!me.userId) {
      try{
        const result = await axios.get(`${url}/me`,{
          headers : {
              Authorization: `bearer ${userToken}`
          }
        })
        
        ctx.store.dispatch({
          type : GET_MYDATA_SUCCESS,
          userToken : userToken,
          userEmail : result.data.user.email,
          userId : result.data.user.userId,
          userName : result.data.user.name,
          userProfileImage : result.data.user.profileImage
        })

      }catch(e){
        ctx.store.dispatch({
          type : GET_MYDATA_FAILURE
        })
      }
    }

    const userAgent = ctx.req ?  ctx.req.headers['user-agent'] : navigator.userAgent

    if(mobileCheck(userAgent)){
      pageProps.isMobile = true;
    }
    else{
      pageProps.isMobile = false;
    }
    
    
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      
        <Provider store={store}>
          <Head>
            <meta
              content="width=device-width,minimum-scale=1.0"
              name="viewport"
            />
            <meta charSet="utf-8" />
            {/* google web font Montserrat */}
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
            {/* google web font Noto Sans */}
            <link
              href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
              rel="stylesheet"
            ></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src = "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
          </Head>

          <AppLayout>
            <Component id="wrraper" {...pageProps} />
          </AppLayout>
        </Provider>
      
    );
  }
}
export default withRedux(configureStore)(withReduxSaga(MyApp)) ;
