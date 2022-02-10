import { useEffect } from 'react';
import './style.css';

const {Link} = require('react-router-dom');

const Page1 = () => {

  useEffect(() => {
    console.log('Page1으로 들어옴');

    return () => {
      console.log('Page1에서 나감');
    }

  },[]);


  return (
    <div className="rootWrap">
      <h1>Page1입니다</h1>
      <Link to='/'>
        <button>Main페이지로 이동</button>
      </Link>

    </div>
  );
}

export default Page1;