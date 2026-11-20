import SectionWrapper from '../components/common/SectionWrapper'
import { work_details } from '../data/index'

export default function WorkSection(){
    return(
        <SectionWrapper id="experience" title="Work Experience">
            <div className="experience-list">
            {work_details.map((item) => (
                <article key={item.id} className="experience-card">
                <h3>{item.role} — {item.company}</h3>
                <span>{item.duration}</span>
                <p>{item.description}</p>
                </article>
            ))}
            </div>
        </SectionWrapper>
    )
}