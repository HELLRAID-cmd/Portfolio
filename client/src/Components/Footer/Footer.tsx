import { Typography } from "antd";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
            <Typography.Title level={4} className="footer__title">
              Interested in my skills? Let’s get in touch!
            </Typography.Title>
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
                  href="mailto:emilgaynulinjob@gmail.com"
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
                <a className="footer__social-link" href="#" target="_blank">
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
