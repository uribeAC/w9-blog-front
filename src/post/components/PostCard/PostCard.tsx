import React from "react";
import { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { author, imageAlt, imageUrl, title, publishDate, content, tags },
}) => {
  const previewContent = content.split(" ").slice(0, 100).join(" ");

  return (
    <article className="post">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="post__image"
        width={300}
        height={300}
      />
      <div className="post__info">
        <div className="post__info-top">
          <h3 className="post__title">{title}</h3>
          <h4 className="post__author">{author}</h4>
        </div>
        <p className="post__content">{previewContent}...</p>
        <div className="post__info-bottom">
          <ul className="post__tags">
            {tags.map((tag) => (
              <li key={tag}>
                <span className="post__tag">#{tag}</span>
              </li>
            ))}
          </ul>
          <span className="post__date">{publishDate}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
