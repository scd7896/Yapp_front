import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fromEvent, asyncScheduler, of } from "rxjs";
import {
  throttle,
  throttleTime,
  debounceTime,
  map,
  first,
  catchError,
  takeLast,
  last,
  filter
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import CardView from "../componets/Park/ProjectCardView";
import Head from "next/head";

import FindSelectbox from "../componets/FindSelectbox";
import { SET_SELECTED_PAGES, CLEAR_SELECTED_KYEWORD } from "../action";
import Keyword from "../componets/Kim/enrollment/atomic/Keyword";
import keywords from "../methods/keywords";
import axios from "axios";
import url from "../url";

import "../css/kim/recruit.scss";
import {
  ADD_PROJECT_KEYWORD,
  SET_PROJECT_KEYWORD,
  SET_OFFSET_DATA
} from "../action/enrollment";
import { defaultThrottleConfig } from "rxjs/internal/operators/throttle";
const recruit = ({ firstData, isMobile }) => {
  const dispatch = useDispatch();
  const { projectKeyword, offset } = useSelector(state => state.enrollment);
  const [locationId, setLocationId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [cardListDatas, setCardListDatas] = useState(firstData.projects);
  const [searchText, setSearchText] = useState("");
  const onChange = data => {
    setSearchText(data);
  };
  const onSubmit = data => {
    setHasMore(true);
    setCardListDatas(data);
  };
  const clickSetId = data => {
    setLocationId(data);
  };
  const cardListSet = async () => {
    const termText = searchText.length === 0 ? "" : `&term=${searchText}`;
    const locationText = locationId === null ? "" : `&location=${locationId}`;
    const result = await axios.post(
      `${url}/projects/search?offset=${offset}${termText}${locationText}`,
      {
        keyword: projectKeyword
      }
    );

    if (result.data.length < 15) {
      setHasMore(false);
    }
    dispatch({
      type: SET_OFFSET_DATA,
      data: offset
    });

    setCardListDatas(cardListDatas.concat(result.data));
  };
  const reloadData = async () => {
    const termText = searchText.length === 0 ? "" : `&term=${searchText}`;
    const locationText = locationId === null ? "" : `&location=${locationId}`;

    const result = await axios.post(
      `${url}/projects/search?offset=${offset}${termText}${locationText}`,
      {
        keyword: projectKeyword
      }
    );
    cardListSet(result.data);
    if (result.data.length < 15) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    const scrollEvent = fromEvent(window, "scroll");
    scrollEvent
      .pipe(
        filter(
          el =>
            window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 30
        ),
        filter(el => hasMore),
        debounceTime(3000)
      )
      .subscribe(() => {
        cardListSet();
      });
  }, [hasMore, cardListDatas, offset]);

  console.log("=============================");
  console.log(isMobile);
  return (
    <div id="reqcruit_root">
      <Head>
        <title>Toys 토이프로젝트 모집 플랫폼</title>
      </Head>
      <div id="recruit_container">
        <div className="container">
          <div id="search_container">
            <p id="project_serch_text">프로젝트 검색</p>
            <FindSelectbox
              clickSetId={clickSetId}
              searchString={searchText}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          </div>
          <div id="keyword_container">
            <p id="keyword_text">추천 키워드</p>
            <div id="keyword_card_container">
              {keywords
                .filter((el, i) => {
                  if (isMobile) {
                    return i < 5;
                  } else {
                    return true;
                  }
                })
                .map((el, i) => {
                  const isSelected =
                    projectKeyword.findIndex(el => el === i) !== -1;
                  return (
                    <Keyword data={el} index={i} isSelected={isSelected} />
                  );
                })}
            </div>
          </div>
          <div id="recruit_card_container">
            {cardListDatas
              ? cardListDatas.map((e, i) => {
                  return <CardView key={e.projectId} project={e} />;
                })
              : ""}
          </div>
        </div>
        {/* <div style={hasMore ?{}:{display:"none"}} className = "recruit_more_button" onClick = {reloadData}>
                    <p>더보기</p>
                </div> */}
      </div>
    </div>
  );
};
recruit.getInitialProps = async context => {
  context.store.dispatch({
    type: SET_SELECTED_PAGES,
    data: "recruit"
  });

  if (context.query.keyword !== undefined) {
    const firstData = await axios
      .post(`${url}/projects/search`, {
        keywords: [parseInt(context.query.keyword)]
      })
      .catch(err => console.log("err남"));
    context.store.dispatch({
      type: SET_PROJECT_KEYWORD,
      data: parseInt(context.query.keyword)
    });
    return {
      firstData: { projects: firstData.data },
      isMobile: context.isMobile
    };
  }
  if (context.query.text !== undefined) {
    const firstData = await axios
      .post(encodeURI(`${url}/projects/search?term=${context.query.text}`))
      .catch(err => console.log("err남"));
    return {
      firstData: { projects: firstData.data },
      isMobile: context.isMobile
    };
  }
  const firstData = await axios
    .get(`${url}/projects`)
    .catch(err => console.log("err남"));
  return { firstData: firstData.data, isMobile: context.isMobile };
};
export default recruit;
