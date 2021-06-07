import './pageNotFound.css'

function PageNotFound () {
  return (
    <section className="pageNotFoundSection">
      <p className="pageNotFoundNumber">404</p>
      <p className="pageNotFoundText">Страница не найдена</p>
      <a href="#" className="pageNotFoundButton">Назад</a>
    </section>
  );
}

export default PageNotFound;
