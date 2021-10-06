import styles from './MainTopContent.module.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function MainTopContent() {
  return <>
    <img  
      className={styles.main_img}
      src="https://occ-0-1361-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQUdI3-AGBRBmdqOgvC9743TfSgCKAAtD1POkRDkBG6m9uk6KP_NbbepYv4S9l8sbvG8PiDdD84VMDIdgXZEScGnA2jX.webp?r=a81"
      alt="의천도룡기 이미지">
    </img>
    <div className={styles.top_contents_wrapper}>
      <div className={styles.top_img_metadata}>
        <img
          className={styles.top_img_metadata_title}
          src="https://occ-0-1361-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTICL5Y8O9OW2wPI4FltIiycJ3qtQKHrzbRrU76JsdrvjaOwe2ubduPKBPZ_xPwICQQqaW6DAyNc0HSrGlsQx76D24oX19BQRb81.webp?r=9df"
          alt="의천도룡기 2019 이미지">
        </img>
        <div className={styles.top_img_metadata_contents}>
          도룡도와 의천검을 얻는 자가 천하를 호령할지니. 강호에 퍼진 소문으로 인해 전쟁이 시작됐다. 천하무적의 병기를 차지할 자는 누가 될 것인가. 권력과 사랑을 두고, 무림에 피바람이 분다.
        </div>
        <div className={styles.top_img_metadata_btns}>
          <Link className={styles.play_link}>
            <button>
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> 
              <div className={styles.btn_space}></div>
              <span>재생</span>
            </button>
          </Link>
          <button className={styles.detail_btn}>
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            <div className={styles.btn_space}></div>
            <span>상세 정보</span>
          </button>
        </div>
      </div>
    </div>

  </>
};