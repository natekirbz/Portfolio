import Icon from '../Icon/Icon';
import './SideBar.css';

function SideBar() {
    return (
        <aside id="side">
            <Icon img="/src/assets/github.svg" url="https://github.com/natekirbz" />
            <Icon img="/src/assets/mail.svg" url="mailto:natekirbz@gmail.com"/>
            <Icon img="/src/assets/linkedin.svg" url="https://www.linkedin.com/in/kirbync/" />
        </aside>
    );
}

export default SideBar;
