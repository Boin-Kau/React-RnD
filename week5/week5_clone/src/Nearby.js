import styled from "styled-components";
import H2InHome from "./H2InHome";
import dummy from "./db/NearbyData.json";
import NearbyItem from "./NearbyItem";

const Nearby = () => {
  return (
    <NearbyDiv>
      <H2InHome title="가까운 여행지 둘러보기"/>
      <NearbyGrid>
        {dummy.data.map(data => (
          <NearbyItem key={data.id} value={data}/>
        ))}
      </NearbyGrid>
    </NearbyDiv>
  )
}

export default Nearby;

const NearbyDiv = styled.div`
  margin: 24px 0;
  padding: 0 80px;
`;

const NearbyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;