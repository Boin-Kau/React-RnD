import { useParams } from "react-router-dom";

const Result = () => {
  const inputText = useParams().inputText;

  return (
    <div id="result_container">
      <div id="result_list">
        <h1>{inputText}에서 선택한 지역의 숙소</h1>
      </div>
      <div id="result_map"></div>
      

    </div>
  )
}

export default Result;