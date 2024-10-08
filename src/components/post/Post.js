import "./post.css";

export default function Post({ date, title, description }) {
  return (
    <a href="/" className="post">
      <div className="date pre-header-caption">{date}</div>
      <h3>{title}</h3>
      <div className="post-description">{description}</div>
    </a>
  );
}
