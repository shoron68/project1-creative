import "./news.css"
import news from "../../assets/images/nes.png"

const News = () => {
  return (
    <section id="news"> 
        <div className="container">
        <div className="news_head">
            <h3>Our Letest News</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className="news_body">
            <img src={news} alt="" />
            <img src={news} alt="" />
            <img src={news} alt="" />
        </div>
        </div>
    </section>
  )
}

export default News