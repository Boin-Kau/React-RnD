import styled from "styled-components";

const H2InHome = ({title}) => {
  return (
    <StyledH2>{title}</StyledH2>
  )
}

export default H2InHome;

const StyledH2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 16px;
`;