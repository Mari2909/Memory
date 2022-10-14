import notfound from "./assets/error-404.svg";

export default function NotFound() {
    return (
        <div className="not-found">
            <p className="not-found__message">Page not found</p>
            <img src={notfound} alt="404" className="not-found__error" />
        </div>
    )
}