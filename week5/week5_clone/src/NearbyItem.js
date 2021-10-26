import styled from "styled-components";

const NearbyItem = (props) => {
  return (
    <NearbyItemDiv>
      <NearbyItemImg src={props.value.img} alt="" />
      <div>
        <NearbyItemText>{props.value.name}</NearbyItemText>
        <NearbyItemText>{props.value.description}</NearbyItemText>
      </div>
    </NearbyItemDiv>
  )
}

export default NearbyItem;

const NearbyItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const NearbyItemImg = styled.img`
  height: 64px;
  border-radius: 12px;
  margin-right: 16px;
`;

const NearbyItemText = styled.div`
  padding-bottom: 2px;
  font-size: 16px;
  line-height: 20px;
`;

