import { useState } from "react";
import { useHistory } from "react-router";

const Main = () => {
  const [inputText, setText] = useState('');
  const history = useHistory();

  const onChangeSearchBar = (e) => {
    setText(e.target.value);
  }

  const onClickSearchButton = () => {
    history.push(`/result/${inputText}`);
  }
  return (
    <>
      <div>
        메인 페이지입니다. 
      </div>
      <div></div>
      <input onChange={onChangeSearchBar} value={inputText}></input>
      <button onClick={onClickSearchButton}>검색</button>
    </>
  )
}

export default Main;