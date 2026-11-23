import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Passoword: ", password);
    localStorage.setItem(
      "utente",
      JSON.stringify({
        email,
        password,
      }),
    );
    setEmail("");
    setPassword("");
    navigate("/destinazioni");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-[#8AD6D1] p-8 shadow-lg">
        <h3 className="mb-2 text-center text-3xl font-bold text-gray-700">
          Accedi
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Campo Email */}
          <div className="mb-5 flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-medium text-gray-700 self-start"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-lg border bg-white border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Campo Password */}
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 font-medium text-gray-700 self-start"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Inserisci la password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-lg border bg-white border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Pulsante Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#FF8C52] hover:bg-[#e07c4a] active:bg-[#359FA0] py-3 font-semibold text-white transition active:scale-[0.98]"
          >
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
}
