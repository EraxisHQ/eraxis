import { useState } from "react";
import { authService } from "../../features/auth";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const { error } =
      await authService.resetPassword(email);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Password reset email has been sent."
    );

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forgot Password</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        required
      />

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Sending..."
          : "Send Reset Link"}
      </button>

      {message && (
        <p>{message}</p>
      )}

      {error && (
        <p>{error}</p>
      )}
    </form>
  );
}