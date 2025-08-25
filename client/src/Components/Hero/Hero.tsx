import { ArrowDownOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import "./Hero.scss";

export const Hero = () => {
  return (
    <>
      <section className="hero-sect">
        <div className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <Typography.Paragraph className="hero__text">
                <Typography.Paragraph className="hero__text-wrapper">
                  <Typography.Paragraph className="hero__text-wrapper-name">
                    Hello! My name is <br /> Emil Gaynulin
                  </Typography.Paragraph>
                  <Typography.Text className="hero__text-wrapper-desc">
                    This is what I can do.
                  </Typography.Text>
                </Typography.Paragraph>
                <Button className="hero__text-button">Check!</Button>
              </Typography.Paragraph>
              <Button className="hero__wrapper-button" aria-label="Scroll down">
                <ArrowDownOutlined
                  className="hero__wrapper-button-arrow"
                  height={40}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
