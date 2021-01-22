import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import api from "../../services/api";

import { isAuthenticated } from "../../services/auth";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <div>
        <main className="form-signin">
          <form onSubmit={this.handleSignUp}>
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
            <h1 className="h3 mb-3 fw-normal">Por favor Cadastre-se</h1>
            <label className="visually-hidden">Nome de usuário</label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Nome de usuário"
              required
              onChange={e => this.setState({ username: e.target.value })}
            />
            <label class="visually-hidden">Endereço de e-mail</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Endereço de e-mail"
              required
              onChange={e => this.setState({ email: e.target.value })}
            />
            <label for="inputPassword" class="visually-hidden">
              Senha
            </label>
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

            <Link to="/" className="btn btn-sm">
              Fazer login
            </Link>
          </form>
        </main>
      </div>
    );
  }
}

export default withRouter(SignUp);
