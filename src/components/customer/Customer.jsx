import "./customer.css"
import custom from "../../assets/images/custom.png"
const Customer = () => {
  return (
    <section id='customer'>
        <div className="container">
        <div className="custom_head">
            <h3>We Care About Our Customer Experience Too</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className="custom_body">
            <img src={custom} alt="" />
            <img src={custom} alt="" />
            <img src={custom} alt="" />
        </div>
        </div>
    </section>
  )
}

export default Customer