/* ERROR */

import "./../css/Error.css";
import { Link } from "react-router-dom";

export default function Erreur() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-redirect">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
