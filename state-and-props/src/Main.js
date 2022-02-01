import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import './style.css';


const Main = () => {
  // STATE
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [result, setResult] = useState('');

  // FUNCTION
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  }
  const onChangeDiscount = (e) => {
    setDiscount(e.target.value);
  }
  const onChangeResult = (e) => {
    setResult(price - discount);
  }
  
  // LOG
  // STATE가 변화할 때마다, JS 내 모든 코드들이 재실행됨.
  console.log('Everytime state is changed, RERENDER!!');

  // UseEffect
  useEffect(() => {
    console.log('I run only once');
  }, []);
  useEffect(() => {
    if(price !== '') {
      console.log('Price is changed');
    }
  }, [price]);
  useEffect(() => {
    if((price && discount) !== '') {
      console.log('Price OR Discount is changed');
    }
  }, [price, discount]);


  return (
    <div className="page">
      <div className="pageTitle">STATE 활용 예시</div>

      <div className="pageContainer">

        <div className="titleWrap">
          <span>결제 금액</span>
        </div>
        <div className="itemWrap">
          <input type="number" placeholder="결제 금액을 입력하세요" value={price} onChange={onChangePrice} />
          <span>￦(원)</span>
        </div>

        <div className="titleWrap">
          <span>할인 금액</span>
        </div>
        <div className="itemWrap">
          <input type="number" placeholder="할인 금액을 입력하세요" value={discount} onChange={onChangeDiscount} />
          <span>￦(원)</span>
        </div>

        <div className="titleWrap">
          <span>최종 금액</span>
        </div>
        <div className="itemWrap">
          <input type="number" placeholder="최종금액" value={result} onChange={onChangeResult}  />
          <span>￦(원)</span>
        </div>
        
      </div>
    </div>
  );
}

export default Main;



