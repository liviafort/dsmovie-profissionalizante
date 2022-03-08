import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import './styles.css';

function Navbar() {
    return(
        <header>
      <nav className="container">
        <div className="dsmovienav-content">
        <h1>DSMovie</h1>
        <a href="https://github.com/liviafort">
        <div className="dsmovie-container">
          <GithubIcon />
          <p className="dsmovie-contactlink">/liviafort</p>
        </div>
        </a>
        </div>
      </nav>
    </header>
    )

}

export default Navbar;