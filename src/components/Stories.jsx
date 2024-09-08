function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4"></source>
          <source src="/video.webm" type="video/webm"></source>
          Your broswer is not supported
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="/nat-8.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              nulla aperiam quasi sapiente. Suscipit error, a in fugit odio
              officiis dolor, nihil molestias doloremque corrupti quaerat
              voluptatibus repudiandae sint corporis.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="/nat-9.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Wow! My life is completely different now
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              nulla aperiam quasi sapiente. Suscipit error, a in fugit odio
              officiis dolor, nihil molestias doloremque corrupti quaerat
              voluptatibus repudiandae sint corporis.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className=" btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Stories;
