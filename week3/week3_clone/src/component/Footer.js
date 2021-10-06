import styles from "./Footer.module.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
  return <div className={styles.footer}>
    <div className={styles.sns}>
      <Link className={styles.link} to="https://www.facebook.com/NetflixKR" target="_blank">
        <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon> 
      </Link>
      <Link className={styles.link} to="https://www.instagram.com/netflixkr/" target="_blank">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> 
      </Link>
      <Link className={styles.link} to="https://twitter.com/netflixkr" target="_blank">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> 
      </Link>
      <Link className={styles.link} to="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured" target="_blank">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> 
      </Link>
    </div>
    <ul className={styles.settings}>
      <li><a href="#">자막 및 음성</a></li>
      <li><a href="#">음성 지원</a></li>
      <li><a href="#">고객 센터</a></li>
      <li><a href="#">기프트카드</a></li>
      <li><a href="#">미디어 센터</a></li>
      <li><a href="#">투자 정보(IR)</a></li>
      <li><a href="#">입사 정보</a></li>
      <li><a href="#">이용 약관</a></li>
      <li><a href="#">개인정보</a></li>
      <li><a href="#">법적 고지</a></li>
      <li><a href="#">쿠키 설정</a></li>
      <li><a href="#">회사 정보</a></li>
      <li><a href="#">문의하기</a></li>
    </ul>
    <div className={styles.service_code}>
      <button>서비스 코드</button>
    </div>
    <div className={styles.company_info}>
      <div className={styles.copy_text_block}>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</div>
      <div className={styles.copy_text_block}>대표: 레지널드 숀 톰프슨</div>
      <div className={styles.copy_text_block}>이메일 주소: korea@netflix.com</div>
      <div className={styles.copy_text_block}>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
      <div className={styles.copy_text_block}>사업자등록번호: 165-87-00119</div>
      <div className={styles.copy_text_block}>클라우드 호스팅: Amazon Web Services Inc.</div>
      <div className={styles.copy_text_block}>공정거래위원회 웹사이트</div>
    </div>
  </div>
}; 