/* eslint-disable jsx-a11y/img-redundant-alt */
function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="nat-8.jpg" alt="Tour photo" className="popup__img" />
          <img src="nat-9.jpg" alt="Tour photo " className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Strat booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            viverra sapien fringilla arcu eleifend venenatis. Aenean non lectus
            venenatis, luctus tortor quis, placerat felis. Etiam in sollicitudin
            orci. Sed id elit magna. Sed luctus ac sem eu blandit. Curabitur
            varius, arcu eu venenatis posuere, justo eros vehicula nisi, ac
            tristique orci mauris eget augue. Aliquam erat volutpat. Etiam
            molestie commodo justo. Maecenas vulputate ultrices accumsan.
            Curabitur lorem augue, fringilla sit amet mi commodo, fermentum
            vulputate odio. Aliquam erat volutpat. Mauris vehicula sodales eros.
          </p>
          <a href="#" class="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
