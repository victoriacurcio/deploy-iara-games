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
    <div className="app-container">
      <div className="login-card">
        <h2>Fazer Login</h2>
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
  );
}

export default App;
