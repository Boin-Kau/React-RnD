import styled from "styled-components";
import { device } from "./Footer";

const FooterItem = (props) => {
  return (
    <FooterItemDiv>
      <div>{props.value.title}</div>
      <FooterItemGrid>
        {props.value.contents.map(data => (
          <div>{data}</div>
        ))}
      </FooterItemGrid>
    </FooterItemDiv>
  )
}

export default FooterItem;

const FooterItemDiv = styled.div`
  flex: 1;

  @media ${device.tablet} {
    border-bottom: 1px gray solid;
  }
`;

const FooterItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
