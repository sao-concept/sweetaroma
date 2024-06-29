import { Link } from "react-router-dom";
import "./WelcomeMessageComponent.scss";

function WelcomeMessageComponent({ userData }) {
  return (
    <div className="welcome-message">
      {userData && <p>Welcome back, {userData.email.split("@")[0]}!</p>}
      <div>
        <Link to="/purchase-history">
          <button>Check your purchase history</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeMessageComponent;
