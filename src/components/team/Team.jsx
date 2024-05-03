import team from"../../assets/images/mem.png"
import "./team.css"

const Team = () => {
  return (
    <section id='team'>
        <div className="container">
            <div className="team_head">
                <h2>Our Expert Team Member</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="team_body">
                <img src={team} alt="" />
                <img src={team} alt="" />
                <img src={team} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Team