import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__wrapper">
          <h4 className="footer__title">Interested in my skills? Let’s get in touch!</h4>
          <div className="footer__social">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="https://github.com/HELLRAID-cmd/EmilGainulin"
                  target="_blank"
                >
                  <svg
                    className="footer__social-icon"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <use href="/public/svg/sprite.svg#icon-github"></use>
                  </svg>
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="mailto:emilgainulinjob@gmail.com"
                  target="_blank"
                >
                  <svg
                    className="footer__social-icon"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <use href="/public/svg/sprite.svg#icon-mail"></use>
                  </svg>
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="https://t.me/HELLRAID1" target="_blank">
                  <svg
                    className="footer__social-icon"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <use href="/public/svg/sprite.svg#icon-telegram"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
