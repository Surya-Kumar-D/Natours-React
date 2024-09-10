/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src="logo-green-2x.png" alt="Full Logo" className="footer__logo" />
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by &nbsp;
              <a href="#" className="footer__link">
                Surya Kumar D
              </a>
              &nbsp; for my react practice project. Copyright &copy; by Surya
              Kumar D. I am using the design from jonas schmedmen udemcy course
              of advanced css.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
