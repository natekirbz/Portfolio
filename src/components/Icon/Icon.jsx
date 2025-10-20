import './Icon.css';

function Icon({ img, url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src={img} alt="Social media icon" className="icon-img" />
        </a>
    );
}

export default Icon;
