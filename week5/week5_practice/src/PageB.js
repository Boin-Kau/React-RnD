import { useSelector } from "react-redux";
import styled from "styled-components";

const PageB = () => {

  const { email, password } = useSelector(state => state.mainReducer);

  return (
    <>
      <Wrapper>
        <Title>로그인 정보</Title>
      </Wrapper>
      <div>{email}</div>
      <div>{password}</div>
    </>
    

  )
}

export default PageB;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;