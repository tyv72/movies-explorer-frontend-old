import './Portfolio.css';

function Portfolio () {
  return (
    <>
      <h3 className="portfolio-header">Портфолио</h3>
      <ul className="portfolio">
        <li className="portfolio-item">
          <p className="portfolio-item__site-desc">Статичный сайт</p>
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className="portfolio-item__site-link">&#129125;</a>
        </li>
        <li className="portfolio-item">
          <p className="portfolio-item__site-desc">Адаптивный сайт</p>
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className="portfolio-item__site-link">&#129125;</a>
        </li>
        <li className="portfolio-item">
          <p className="portfolio-item__site-desc">Одностраничное приложение</p>
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className="portfolio-item__site-link">&#129125;</a>
        </li>        
      </ul>
    </>    
  );
}

export default Portfolio;