import logoGit from "../../assets/logo-github.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="title">streamer spotlight</div>
      <div className="github">
        <a
          href="https://github.com/Ambro-Dev/streamers_app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoGit} alt="Github" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
