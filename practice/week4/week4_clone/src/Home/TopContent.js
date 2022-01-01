import { useState } from "react";
import SearchBarChild from "./SearchBarChild";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";


const TopContent = () => {
  const [url, setUrl] = useState('https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560');
  const [inputText, setText] = useState('');
  const history = useHistory();

  const onChangeSearchBar = (e) => {
    setText(e.target.value);
  }
  const onClickSearchButton = () => {
    history.push(`/result/${inputText}`);
    // history.push에 여러 다른 인자들을 추가할 수 있다! => 검색해보기
  }

  return (
    <>
      <div id="topContent_background">
        <img src={url} alt=""></img>
      </div>
      <div id="topContent_wrapper">
        <div id="topContent_searchBar">
          <div id="searchBar_left">
            <div id="search_location_div">
              <div className="searchBar_subtitle">위치</div>
              <input className="searchBar_input" id="search_location_input" type="text" placeholder='어디로 여행가세요?' value={inputText} onChange={onChangeSearchBar}></input>
            </div>
            <div id="search_location_modal"></div>
          </div>
          <div id="searchBar_center">
            <SearchBarChild title="체크인" hint="날짜 입력"/>
            <SearchBarChild title="체크아웃" hint="날짜 입력"/>
          </div>
          <div id="searchBar_right">
            <SearchBarChild title="인원" hint="게스트 추가"/>
            <div id="searchBar_button_div">
              <button onClick={onClickSearchButton}>
                <FontAwesomeIcon id="searchBar_button_ic" icon={faSearch}></FontAwesomeIcon>
              </button>
            </div>
          </div>

        </div>
        <div id="topContent_center">
          <div id="topContent_center_text">어디든 상관없이 떠나고 싶을 때 에어비앤비가 도와드립니다!</div>
          <div id="topContent_center_button">유연한 검색</div>
        </div>
      </div>

    </>
  )
}

export default TopContent;