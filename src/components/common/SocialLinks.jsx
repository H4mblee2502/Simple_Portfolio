import { social_media } from "../../data";

function SocialIcon({ name }) {
  switch (name.toLowerCase()) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H8v3.2h2.7V22h2.8z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.5H3.56V19.5h3.38V8.5zM5.25 3.5a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94zM20.44 13.02c0-2.74-1.46-4.01-3.41-4.01-1.57 0-2.28.86-2.67 1.47V8.5h-3.38c.04.96 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.89.27-.66.88-1.35 1.91-1.35 1.35 0 1.89 1.02 1.89 2.52V19.5h3.38v-6.48z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialLinks({ className = "" }) {
  const classes = ["social_media", className].filter(Boolean).join(" ");

  return (
    <ul className={classes}>
      {social_media.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
          >
            <SocialIcon name={link.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}