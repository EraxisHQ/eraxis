import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../features/auth";

export function ResetPasswordForm() {
  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    setLoading(true);

    const { error } =
      await authService.updatePassword(
        password
      );

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Password updated successfully."
    );

    setLoading(false);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reset Password</h1>

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        required
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(
            e.target.value
          )
        }
        required
      />

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Updating..."
          : "Update Password"}
      </button>

      {message && <p>{message}</p>}

      {error && <p>{error}</p>}
    </form>
  );
}