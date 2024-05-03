import logoimg from "../../assets/images/logo.png"
import "./nav.css"
const Nav = () => {
  return (
    <div className="container">
        <div className="nav_main">
            <div className="nav_left">
                <img src={logoimg} alt="logo" />
            </div>
            <div className="nav_right">
                <div className="nav_menu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Service</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav