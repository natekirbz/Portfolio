import './Icon.css'

function Icon ({ img, url }) {
    return (
        <main>
            <a href={url} target="_blank">
                <img src={img} style={{ width: 50, height: 50}} />
            </a>
        </main>
    )
}

export default Icon