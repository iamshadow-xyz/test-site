import Shadowspace from "../assets/Shadowspace.svg";

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <img
            className="header-logo"
            src={Shadowspace}
            alt="ShadowspaceLogo"
          />
          <h1 className="header-name">Shadowspace</h1>
        </div>
        <div className="About"></div>
      </nav>
    </header>
  );
}

export default Header;
