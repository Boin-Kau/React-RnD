import styled from "styled-components";
import H2InHome from "./H2InHome";
import dummy from "./db/AnywhereData.json";
import AnywhereItem from "./AnywhereItem";

const Anywhere = () => {
  return (
    <AnywhereDiv>
      <H2InHome title="어디에서나, 여행은 살아보는 거야!"/>
      <AnywhereGrid>
        {dummy.data.map(data => (
          <AnywhereItem key={data.id} value={data}/>
        ))}
      </AnywhereGrid>
    </AnywhereDiv>
  )
}

export default Anywhere;

const AnywhereDiv = styled.div`
  margin: 40px 0;
  padding: 0 80px;
`;

const AnywhereGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;