import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./sidenav.scss";

function SideNav() {
    return (
        <>
            <ul className="site-nav">
                <li className="section-name">Generators</li>
                <li><a href="/gen/event">Event Generator</a></li>
                <li className="section-name">Misc Tools</li>
                <li><a href="/">Other Tool</a></li>
                <li><a href="/">Other Tool</a></li>
                <li><a href="/">Other Tool</a></li>
                <li><a href="/">Other Tool</a></li>
                <li><a href="/">Other Tool</a></li>
            </ul>
        </>
    );
}

export default SideNav;