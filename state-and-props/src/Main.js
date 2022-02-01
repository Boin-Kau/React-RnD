import { useState } from "react/cjs/react.development";
import './style.css';


const Main = () => {
  // STATE
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  // EVENT
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  }
  const onChangeDiscount = (e) => {
    setDiscount(e.target.value);
  }
  
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
          <input type="number" placeholder="최종금액" value={price - discount}  />
          <span>￦(원)</span>
        </div>
        
      </div>
    </div>
  );
}

export default Main;



