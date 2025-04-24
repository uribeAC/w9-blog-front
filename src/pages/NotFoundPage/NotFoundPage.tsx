import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img
        className="not-found__image not-found__image--animated"
        src="/gif-huevo.webp"
        alt="Yema de huevo confundida con signos de interrogación que van apareciendo animadamente"
        width={240}
        height={240}
      />
      <img
        className="not-found__image not-found__image--reduced-motion"
        src="/huevo-fija.webp"
        alt="Yema de huevo confundida con signos de interrogación"
        width={240}
        height={240}
      />
      <h2 className="not-found__title">Page not found</h2>
      <span className="not-found__status">404 </span>
    </div>
  );
};

export default NotFoundPage;
