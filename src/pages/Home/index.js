import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Olá, estamos Logados</h2>
        <Link to="/" className="btn btn-sm">
          Fazer logoff
        </Link>
      </div>
    );
  }
}

export default Home;
