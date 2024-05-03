import banrImg from "../../assets/images/banner.png"
import "./banner.css"
const Banner = () => {
  return (
    <section id="banner_body">
        <div className="container">
        <div className="banner_main">
            <div className="banner_left">
                <h1>We Are Digital Product Design Agency</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <a href="#">Get Started</a>
            </div>
            <div className="banner_right">
                <img src={banrImg} alt="" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Banner