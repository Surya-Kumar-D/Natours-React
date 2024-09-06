/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src="logo-white.png" alt="Logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
}

export default Header;

/* <section className="grid-test">
    <div className="row">
      <div className="col-1-of-2">col 1 of 2</div>
      <div className="col-1-of-2">col 2 of 2</div>
    </div>
    <div className="row">
      <div className="col-1-of-3">col 1 of 3</div>
      <div className="col-1-of-3">col 1 of 3</div>
      <div className="col-1-of-3">col 1 of 3</div>
    </div>
    <div className="row">
      <div className="col-1-of-3">col 1 of 3</div>
      <div className="col-2-of-3">col 2 of 3</div>
    </div>
    <div className="row">
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
    </div>
    <div className="row">
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-2-of-4">col 2 of 4</div>
    </div>
    <div className="row">
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-3-of-4">col 3 of 4</div>
    </div>
  </section> */
