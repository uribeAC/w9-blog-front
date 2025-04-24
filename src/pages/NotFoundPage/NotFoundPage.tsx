import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img
        className="not-found__image"
        src="/huevo-not-fonud.svg"
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
