import profile from '../assets/profile.jpeg'
import { personal_details } from '../data/index'
export default function Hero(){
    return(
        <section id="hero" className="hero-grid">
            <div className="hero-image-wrapper">
                <img src={profile} alt={personal_details .name} />
            </div>
            <div className="hero-text">
                <h1>{personal_details.name}</h1>
                <h2>{personal_details.role}</h2>
                <p>{personal_details.summary}</p>
                <a href="#projects" className="cta-button">View My Work</a>
            </div>
        </section>
    )
}