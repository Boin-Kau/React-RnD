import styles from "./Header.module.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return <header className={styles.header}>
    <div className={styles.header_logo}>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="넷플릭스"></img>
      </Link>
    </div>
    <div className={styles.header_category}>
      <ul>
        <li className="category_not_menu">
          <Link className={styles.link} to="#">홈</Link>
        </li>
        <li className="category_not_menu">
          <Link className={styles.link} to="#">TV 프로그램</Link>
        </li>
        <li className="category_not_menu">
          <Link className={styles.link} to="#">영화</Link>
        </li>
        <li className="category_not_menu">
          <Link className={styles.link} to="#">NEW! 요즘 대세 콘텐츠</Link>
        </li>
        <li className="category_not_menu">
          <Link className={styles.link} to="#">내가 찜한 콘텐츠</Link>
        </li>
      </ul>
    </div>
    <div className={styles.header_btn}>
      <button className={styles.search_btn}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> 
      </button>
      <Link className={styles.kid_link} style={{ textDecoration: 'none' }} to="#">키즈</Link>
      <button className={styles.notification_btn}>
        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon> 
      </button>
      <div className={styles.profile}>
        <img src="https://occ-0-1361-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfZYIMMtNgvZylHF-au9UYInRnBfZF9t1z28LqRGWTLlUacpxP2hU8dmEfFfaJ1IXkbxEy0rTq0T_BYSxueG6EM.png?r=850" alt="프로필이미지" ></img>
        <button>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon> 
        </button>
      </div>
    </div>
    
  </header>
};