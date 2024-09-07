/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary ">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You are going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cupiditate ratione autem nulla consequuntur veritatis illo
            voluptatum esse! Quisquam unde adipisci, amet quia accusamus dolores
            suscipit quis reprehenderit voluptate quas.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cupiditate ratione autem nulla consequuntur veritatis illo
            voluptatum esse!
          </p>
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="nat-1-large.jpg"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="nat-2-large.jpg"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="nat-3-large.jpg"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
