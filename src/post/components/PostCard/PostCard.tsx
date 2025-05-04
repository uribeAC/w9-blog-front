import React from "react";
import { Link } from "react-router";
import { Post } from "../../types";
import Button from "../../../components/Button/Button";
import usePostsContext from "../../context/hooks/usePostsContext";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
  index: number;
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
    smallImageUrl,
  },
  index,
}) => {
  const { deletePost, activateModal } = usePostsContext();

  const loadingType = index <= 2 ? "eager" : "lazy";

  return (
    <article className="post">
      <img
        srcSet={`${smallImageUrl} 300w, ${imageUrl} 420w`}
        sizes="(max-width: 500px) 420px, (min-width: 501px) 300px"
        src={imageUrl}
        alt={imageAlt}
        className="post__image"
        width={300}
        height={300}
        loading={loadingType}
      />
      <div className="post__buttons">
        <Button
          action={() => {
            deletePost(id);
            activateModal("El post ha sido eliminado");
          }}
          classModifierName="delete"
          aria-label="eliminar post"
        >
          X
        </Button>
        <Link to={`/post/${id}`} className="post__info-link">
          + info
        </Link>
      </div>
      <div className="post__info">
        <h3 className="post__headline">
          <span className="post__title">{title}</span>
          <span className="post__author">{author}</span>
        </h3>
        <p className="post__content">{previewContent}...</p>
        <footer className="post__info-footer">
          <ul className="post__tags">
            {previewTags.map((tag) => (
              <li key={tag} className="post__tag">
                #{tag}
              </li>
            ))}
          </ul>
          <span className="post__date">
            {publishDate.toLocaleDateString("es-ES")}
          </span>
        </footer>
      </div>
    </article>
  );
};

export default PostCard;
