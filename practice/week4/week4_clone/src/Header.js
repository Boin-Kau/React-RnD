import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div id="header_logo">
        <Link className="link" to='/'>
          <div id="header_logo_div">
            <FontAwesomeIcon id="header_logo_img" icon={faAirbnb}></FontAwesomeIcon>
            <span id="header_logo_text">airbnb</span>
          </div>
        </Link>
      </div>
      <div id="header_menu">
        <ul>
          <li>숙소</li>
          <li>체험</li>
          <li>온라인 체험</li>
        </ul>
      </div>
      <div id="header_end">
        <button id="header_end_host">호스트 되기</button>
        <button id="header_end_web"><FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></button>
        <div id="header_end_user">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          <FontAwesomeIcon id="header_end_user_circle" icon={faUserCircle}></FontAwesomeIcon>
        </div>
      </div>
    </header>
  )
}

export default Header;