import { social_media } from "../../data"

export default function SocialLinks({ className = ''}){
    return(
        <ul className={`social-media ${className}`}>
            {social_media.map((links) => (
                <li key={links.name}>
                    <a 
                        href={links.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            {links.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}