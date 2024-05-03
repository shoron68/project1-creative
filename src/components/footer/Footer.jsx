import "./footer.css"
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <section id="footer">
        <div className="container">
            <div className="footer_body">
                <div className="box1">
                    <img src={logo} alt="" />
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                <div className="box2">
                    <h5>Company</h5>
                    <a href="#">About Us</a>
                    <a href="#">Work</a>
                    <a href="#">Latest News</a>
                    <a href="#">Careers</a>
                </div>
                <div className="box2">
                    <h5>Product</h5>
                    <a href="#">Prototype</a>
                    <a href="#">Plans & Pricing</a>
                    <a href="#">Customers</a>
                    <a href="#">Integrations</a>
                </div>
                <div className="box2">
                    <h5>Support</h5>
                    <a href="#">Help Desk</a>
                    <a href="#">Sales</a>
                    <a href="#">Become a Partner</a>
                    <a href="#">Developers</a>
                </div>
                <div className="box2">
                    <h5>Contact</h5>
                    <a href="#">524 Broadway , NYC</a>
                    <a href="#">+1 777 - 978 - 5570</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer