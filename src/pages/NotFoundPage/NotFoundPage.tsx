import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img
        className="not-found__image not-found__image--animated"
        src="/huevito-not-found-gif.webp"
        alt="Yema de huevo confundida con signos de interrogación que van apareciendo animadamente"
        width={400}
        height={210}
      />
      <img
        className="not-found__image not-found__image--reduced-motion"
        src="/huevito-not-found-img.webp"
        alt="Yema de huevo confundida con signos de interrogación"
        width={400}
        height={210}
      />
      <h2 className="not-found__title">Page not found</h2>
      <span className="not-found__status">404 </span>
    </div>
  );
};

export default NotFoundPage;
