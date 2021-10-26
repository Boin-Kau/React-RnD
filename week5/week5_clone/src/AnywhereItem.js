import styled from "styled-components";

const AnywhereItem = (props) => {
  return (
    <div>
      <AnywhereItmeImg src={props.value.img} alt=""/>
      <AnywhereText>{props.value.name}</AnywhereText>
    </div>
  )
}

export default AnywhereItem;

const AnywhereItmeImg = styled.img`
  width: 300px;
  border-radius: 8px;
`;

const AnywhereText = styled.div`
  padding-top: 8px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
`;