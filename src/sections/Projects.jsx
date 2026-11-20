import SectionWrapper from "../components/common/SectionWrapper"
import { projects_detail } from '../data/index'

export default function Projects(){
    return(
        <SectionWrapper id="projects" title="Projects">
            <div className="projects-grid">
                {projects_detail.map((project) => (
                <article key={project.id} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tech-tags">
                    {project.techStack.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                    </ul>
                    <div className="project-links">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
                        <a href={project.repoUrl} target="_blank" rel="noreferrer">Source Code</a>
                    </div>
                </article>
                ))}
            </div>
        </SectionWrapper>
    )
}