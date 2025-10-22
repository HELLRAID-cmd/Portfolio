import "./Hero.scss";

export const Hero = () => {
  
  return (
    <>
      <section className="hero-sect" id="about">
        <div className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__text">
                <div className="hero__text-wrapper">
                  <h1 className="hero__text-title" data-text="Hello! My name is Emil Gainulin">Hello! My name is Emil Gainulin</h1>
                  <h2 className="hero__text-desc">This is what I can do.</h2>
                </div>
                <a className="hero__text-link link" href="#project">Check!</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
