import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components"
import { loginAction } from "./reducers/mainReducer";

const PageA = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const onEmailChagne = (e) => {
    setEmail(e.target.value);
  }

  const onPwChange = (e) => {
    setPw(e.target.value);
  }

  const onClickLogin = () => {
  
    dispatch(loginAction({
      email: email,
      password: pw
    }))

    history.push("/pageB")
  }


  return (
    <div id="pageA_container">
      <div id="email_div">
        <span>Email : </span>
        <input onChange={onEmailChagne} type="text" />
      </div>
      <div id="pw_div">
        <span>PW : </span>
        <input onChange={onPwChange} type="text" />
      </div>
      <Button onClick={onClickLogin}>로그인하기</Button>
    </div>
  )
}

export default PageA;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;