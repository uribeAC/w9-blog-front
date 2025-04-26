import React, { useState } from "react";
import "./PostForm.css";
import { PostData } from "../../types";

const PostForm: React.FC = () => {
  const initialPostData: PostData = {
    author: "",
    content: "",
    imageUrl: "",
    title: "",
  };

  const [postData, setPostData] = useState<PostData>(initialPostData);

  const changePostData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;

    setPostData((postData) => ({
      ...postData,
      [event.target.id]: newValue,
    }));
  };

  const isFormValid =
    postData.title !== "" &&
    postData.author !== "" &&
    postData.content !== "" &&
    postData.imageUrl !== "";

  return (
    <form className="post-form">
      <div className="post-form__groups">
        <h3 className="form-text">Campos obligatorios:</h3>
        <div className="post-form__group">
          <label htmlFor="title" className="post-form__text">
            Título:
          </label>
          <input
            type="text"
            id="title"
            className="post-form__control"
            value={postData.title}
            onChange={changePostData}
            required
          />
        </div>
        <div className="post-form__group">
          <label htmlFor="author" className="post-form__text">
            Autor/a:
          </label>
          <input
            type="text"
            id="author"
            className="post-form__control"
            value={postData.author}
            onChange={changePostData}
            required
          />
        </div>
        <div className="post-form__group">
          <label htmlFor="imageUrl" className="post-form__text">
            Imagen Url:
          </label>
          <input
            type="url"
            id="imageUrl"
            className="post-form__control"
            value={postData.imageUrl}
            onChange={changePostData}
            required
          />
        </div>
        <div className="post-form__group">
          <label htmlFor="content" className="post-form__text">
            Contenido:
          </label>
          <textarea
            rows={6}
            id="content"
            className="post-form__control"
            value={postData.content}
            onChange={changePostData}
            required
          />
        </div>
      </div>
      <div className="post-form__groups">
        <h3 className="form-text">Campos opcionales:</h3>
        <div className="post-form__group">
          <label htmlFor="imageAlt" className="post-form__text">
            Descripción de imagen:
          </label>
          <input
            type="text"
            id="imageAlt"
            className="post-form__control"
            value={postData.imageAlt}
            onChange={changePostData}
          />
        </div>
        <div className="post-form__group">
          <label htmlFor="tags" className="post-form__text">
            Etiquetas:
          </label>
          <input
            type="text"
            id="tags"
            className="post-form__control"
            value={postData.tags}
            onChange={changePostData}
          />
        </div>
        <div className="post-form__group">
          <label htmlFor="publishDate" className="post-form__text">
            Fecha de publicación:
          </label>
          <input
            type="date"
            id="publishDate"
            className="post-form__control"
            value={postData.publishDate}
            onChange={changePostData}
          />
        </div>
      </div>
      <button
        className="post-form__button"
        type="submit"
        disabled={!isFormValid}
      >
        Crear post
      </button>
    </form>
  );
};

export default PostForm;
