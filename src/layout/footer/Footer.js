import "./footer.css";

export default function Footer() {
  return (
    <footer className="df">
      <div className="inner-container">
        <div className="company-info">
          <a href="/">
            <img className="logo" src="logo.svg" alt="logo" />
            <p className="company-description">
              Nibh sed pulvinar proin gravida hendrerit lectus. Adipiscing at in
              tellus integer feugiat scelerisque varius morbi enim. Dignissim
              diam quis enim lobortis scelerisque.
            </p>
            <div className="social-media">
              <a href="/">
                <img src="icons/instagram.svg" alt="instagram" />
              </a>
              <a href="/">
                <img src="icons/twitter.svg" alt="twitter" />
              </a>
              <a href="/">
                <img src="icons/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </a>
        </div>

        <div className="links">
          <div className="footer-heading">useful links</div>
          <div className="links-container">
            <ul>
              <li>
                <a href="/">Search</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Information</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Shipping Details</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Deliveries</a>
              </li>
              <li>
                <a href="/">Payment Methods</a>
              </li>
              <li>
                <a href="/">404</a>
              </li>
            </ul>
          </div>
        </div>

        <form className="newsletter-sub">
          <label>
            <div className="footer-heading">Newsletter</div>
            <div className="input-container">
              <input type="email" placeholder="Enter your e-mail…" />
              <button type="submit">subscribe</button>
            </div>
          </label>

          <ul className="contacts">
            <li className="phone">
              <img src="icons/phone.svg" alt="phone" />
              Hotline: <a href="/">+01 234 567 890</a>
            </li>
            <li className="schedule">
              <img src="icons/clocks.svg" alt="schedule" />
              <div className="rows">
                <span className="row">Monday - Friday: 9:00 am - 6:00 pm</span>
                <span className="row">Saturday: 9:00 am - 4:00 pm</span>
              </div>
            </li>
            <li className="email">
              <img src="icons/letter.svg" alt="email" />
              Send us an <a href="/">email</a>
            </li>
          </ul>
        </form>
      </div>
    </footer>
  );
}
