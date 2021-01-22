import React from "react";
import { Link, Redirect } from "react-router-dom";
import { logout, isAuthenticated } from "../../services/auth";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

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
