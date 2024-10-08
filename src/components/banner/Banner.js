import "./banner.css";

export default function Banner({ className, children }) {
  return <div className={`banner ${className}`}>{children}</div>;
}
