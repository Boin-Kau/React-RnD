import { useParams } from "react-router-dom";

const Result = () => {
  const inputText = useParams().inputText;

  return (
    <>
      <div>
        검색 결과입니다. {inputText}
      </div>
    </>
  )
}

export default Result;