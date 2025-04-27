import React from "react";
import { Post } from "../../types";
import "./PostCard.css";
import Button from "../../../components/Button/Button";
import usePostsContext from "../../context/hooks/usePostsContext";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({
  post: {
    author,
    imageAlt,
    imageUrl,
    title,
    publishDate,
    id,
    previewContent,
    previewTags,
  },
}) => {
  const { deletePost } = usePostsContext();

  return (
    <article className="post">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="post__image"
        width={300}
        height={300}
      />
      <Button
        action={() => deletePost(id)}
        text="X"
        classModifierName="delete"
        aria-label="eliminar post"
      />
      <div className="post__info">
        <h3 className="post__headline">
          <span className="post__title">{title}</span>
          <span className="post__author">{author}</span>
        </h3>
        <p className="post__content">{previewContent}...</p>
        <div className="post__info-bottom">
          <ul className="post__tags">
            {previewTags.map((tag) => (
              <li key={tag}>
                <span className="post__tag">#{tag}</span>
              </li>
            ))}
          </ul>
          <span className="post__date">
            {publishDate.toLocaleDateString("es-ES")}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
