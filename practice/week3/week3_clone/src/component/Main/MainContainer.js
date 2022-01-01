import MainTopContent from "./TopContent/MainTopContent"
import movieData from "../../db/movies.json"
import ContentComponent from "./MovieContent/ContentComponent";

export default function MainContainer() {
  console.log(movieData);
  return <>
    <MainTopContent></MainTopContent>
    {movieData.data.map((data) => {
      return(
        <ContentComponent key={data.id} content_title={data.content_title} contents={data.contents}></ContentComponent>
      );
    })}
  </>
};