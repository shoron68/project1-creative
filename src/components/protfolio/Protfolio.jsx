import "./protfolio.css"
import prtimg from "../../assets/images/prt.png"

const Protfolio = () => {
  return (
    <section id="protfolio">
        <div className="container">
            <div className="prt_header">
                <h3>Our Work Portfolio</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="prt_menu">
                <a href="#">All</a>
                <a href="#">Graphic Design</a>
                <a href="#">Mobile App</a>
                <a href="#">Web Devolopment</a>
                <a href="#">Web Design</a>
            </div>
            <div className="prt_img1">
                <img src={prtimg} alt="" />
                <img src={prtimg} alt="" />
                <img src={prtimg} alt="" />
                <img src={prtimg} alt="" />
            </div>
            <div className="prt_img1">
                <img src={prtimg} alt="" />
                <img src={prtimg} alt="" />
                <img src={prtimg} alt="" />
                <img src={prtimg} alt="" />
            </div>
        </div>

    </section>
  )
}

export default Protfolio