import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div id="header_logo">
        <Link to='/'>
          
        </Link>
      </div>
      <div id="header_menu">메뉴메뉴</div>
      <div id="header_end">끝끝</div>
    </header>
  )
}

export default Header;