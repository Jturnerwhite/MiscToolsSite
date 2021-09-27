import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.scss";

function Header() {
    return (
        <div className="header">
            <a className="home-button" href="/"><FontAwesomeIcon icon="dice"/></a>
            <label className="header-text">Misc Tool Site</label>
        </div>
    );
}

export default Header;