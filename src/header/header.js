import book from "./book-lovers.svg"

const Header = () => {
    return (
            <div className="header">
                <div className="header-container">
                    <h1>We build product managers.</h1>
                    <h4>Trekt is an online educational hub for aspiring product managers. Join us as we pave the future of how product managers learn and grow.</h4>
                    <div className="subscribe-form-container">
                        <input type="email" className="input-field" placeholder="Your Email Address" />
                        <button>Subscribe</button>
                    </div>
                    <img src={book} className="header-image" />
                </div>
            </div>
    );
}

export default Header;