import { useNavigate } from "react-router-dom";

const RegisterComponent = ({ setIsVisible }) => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <form className="register-container" onSubmit={(e) => handleSubmit(e)}>
        <button
          type="button"
          className="close-button"
          onClick={() => setIsVisible(false)}
        >
          X
        </button>
        <div className="register-card">
          <h1>Register</h1>
          <input
            className="input-form"
            type="text"
            placeholder="Nombre usuario"
            name="username"
          />
          <input
            className="input-form"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="input-form"
            type="password"
            placeholder="Contraseña"
            name="password"
          />
          <input
            className="input-form"
            type="password"
            placeholder="Repita contraseña"
            name="password"
          />
          <button
            className="button-form"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterComponent;
