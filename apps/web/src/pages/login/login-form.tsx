/**
 * =====================================
 * Eraxis Login Form
 * =====================================
 */

import { useState } from "react";

import { authService }
  from "../../features/auth";

export function LoginForm() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const { error } =
      await authService.signIn(
        email,
        password
      );

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Eraxis Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Signing In..."
          : "Login"}
      </button>

      {error && (
        <p>{error}</p>
      )}
    </form>
  );
}