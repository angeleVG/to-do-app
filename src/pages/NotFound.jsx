import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link className="go-back" to="/home" aria-label="Go back to the home page">Go back to Home</Link>
    </div>
  );
}

export default NotFound;