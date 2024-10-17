import "./subscription-offer.css";

export default function SubscriptionOffer() {
  return (
    <section id="sub-offer" className="df">
      <form action="" className="inner-container">
        <label>
          <div className="title">
            <div>Get $ 10 Off Your First Purchase!</div>
            <div>Subscribe to Post Updates About Launches, Reboots & More!</div>
          </div>

          <input type="email" placeholder="Enter your e-mail..." />
        </label>

        <button type="submit" className="main-button-style empty">
          subscribe now
        </button>
      </form>
    </section>
  );
}
