import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import api from "../../services/api";
import { login, isAuthenticated } from "../../services/auth";

class SignIn extends Component {
  state = {
    identifier: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { identifier, password } = this.state;
    if (!identifier || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("auth/local", {
          identifier,
          password
        });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div>
        <main className="form-signin">
          <form onSubmit={this.handleSignIn}>
            <img
              className="mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiydRZwoe9UStRQKGZ1rRZ0RiGh5cEO444GU27QoHqh3y1DfP_rUVcsuaNeP2IuySD3KzQDmU1JBKZcAoJ1iP_3Jm8TXJkVtnFbA&usqp=CAU&ec=45761792"
              alt=""
              width="72"
              height="57"
            />
            {this.state.error && (
              <div className="alert alert-danger" role="alert">
                {this.state.error}
              </div>
            )}

            <h1 className="h3 mb-3 fw-normal">Login</h1>
            <label className="visually-hidden">Endereço de e-mail</label>
            <input
              type="identifier"
              id="inputEmail"
              className="form-control"
              placeholder="Endereço de e-mail"
              required
              onChange={e => this.setState({ identifier: e.target.value })}
            />
            <label className="visually-hidden">Senha</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Senha"
              required
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Cadastrar grátis
            </button>
            <br />
            <Link to="/" className="btn btn-sm">
              Cadastra-se
            </Link>
          </form>
        </main>
      </div>
    );
  }
}

export default withRouter(SignIn);
