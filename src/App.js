import React, { useState } from "react";
import { mockLogin } from "./mockApi";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await mockLogin(username, password);
      console.log(res);
      setIsLogged(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (isLogged) {
    return (
      <div className="app-container">
        <h1>Bem-vindo ao Iara Games 🎮</h1>
        <p>Login realizado com sucesso!</p>
      </div>
    );
  }

  return (
    <div className="split-screen">
      <div className="left-panel">
        <div className="login-card">
          <h2>Iara Games</h2>
          <p>Entre na sua conta</p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="@username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha (8 dígitos)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Validando..." : "Entrar"}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>

      <div className="right-panel">
        <img
          src="https://cdn.pixabay.com/photo/2023/01/25/17/16/portal-7741717_1280.jpg"
          alt="Portal Iara Games"
        />
      </div>
    </div>
  );
}

export default App;
