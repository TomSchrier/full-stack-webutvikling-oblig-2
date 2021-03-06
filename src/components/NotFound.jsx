//components/NotFound.jsx
import { Link } from "react-router-dom";
  
  const NotFound = () => {
    return (
        <div className="NotFound">
            <p>404: Page not found.</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;