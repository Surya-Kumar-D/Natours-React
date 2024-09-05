/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
