const RegisterComponent = ({ dispatch, modalActualState, navigate }) => {
  const closeModal = () => {
    dispatch(
      modalActualState({
        isVisible: false,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      modalActualState({
        isVisible: false,
      })
    );
    navigate("/");
  };

  return (
    <>
      <form className="register-container" onSubmit={(e) => handleSubmit(e)}>
        <button
          type="button"
          className="close-button"
          onClick={() => closeModal()}
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
          <button className="button-form" type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterComponent;
