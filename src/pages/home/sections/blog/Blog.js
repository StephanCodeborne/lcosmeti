import Post from "../../../../components/post/Post";
import "./blog.css";

const posts = [
  {
    title: "Best Multi-Step Skin Care Treatment",
    date: "June 08, 2021",
    description:
      "Dui nunc mattis enim ut tellus elementum sagittis vitae. Ac orciphasellus egestas tellus rutrum.",
  },
  {
    title: "Best Multi-Step Skin Care Treatment",
    date: "June 08, 2021",
    description:
      "Dui nunc mattis enim ut tellus elementum sagittis vitae. Ac orciphasellus egestas tellus rutrum.",
  },
  {
    title: "Best Multi-Step Skin Care Treatment",
    date: "June 08, 2021",
    description:
      "Dui nunc mattis enim ut tellus elementum sagittis vitae. Ac orciphasellus egestas tellus rutrum.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="df">
      <div className="inner-container">
        <div className="heading">
          <span className="pre-header-caption">blog</span>
          <h2>Fresh Posts About Leaving</h2>
        </div>

        <div className="posts">
          {posts.map(({ title, date, description }, idx) => (
            <Post
              key={idx}
              title={title}
              date={date}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
