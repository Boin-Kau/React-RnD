import { useNavigate } from 'react-router-dom';
import './style.css';

const Main = () => {

  const navigate = useNavigate();

  const movePage1 = () => {
    navigate('/page1');
  };

  const movePage2 = () => {
    navigate('/page2');
  };

  return (
    <div className="rootWrap">
      <h1>Main 페이지입니다.</h1>
      <button onClick={movePage1}>Page1로 이동</button>
      <button onClick={movePage2}>Page2로 이동</button>
    </div>
  );
}

export default Main;