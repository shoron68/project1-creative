import "./service.css"
import icon from"../../assets/images/Icon.png"

const Serv = () => {
  return (
<section id='service'>
<div className="container">
    <div className="service_head">
        <h2>Our Services</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
    </div>
    <div className="service_body">
    <div className="box">
            <div className="box_inner">
            <img src={icon} alt="" />
            <h4>UI/UX Design</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div><div className="box">
            <div className="box_inner">
            <img src={icon} alt="" />
            <h4>UI/UX Design</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div><div className="box">
            <div className="box_inner">
            <img src={icon} alt="" />
            <h4>UI/UX Design</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div>
    </div>
    <div className="service_body2">
        <div className="box">
            <div className="box_inner">
            <img src={icon} alt="" />
            <h4>UI/UX Design</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div>
        <div className="box">
            <div className="box_inner">
            <img src={icon} alt="" />
            <h4>UI/UX Design</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div>
        <div className="box">
            <div className="box_inner">
            <img src={icon} alt="" />
            <h4>UI/UX Design</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div>
        
    </div>
</div>
</section>
  )
}

export default Serv