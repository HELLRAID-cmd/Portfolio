import { Typography } from "antd";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Typography.Title level={4}>My contacts:</Typography.Title>
          <div className="footer__social">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a className="footer__social-link" href="https://github.com/HELLRAID-cmd/EmilGainulin" target="_blank">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}