import { ModalComponent } from "../components/modal/ModalComponent";
import { useState } from "react";
import RegisterComponent from "../components/RegisterComponent";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

import React from "react";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Layout title="Login" description="Page login|register" login>
      <form className="login-container">
        <div className="login-card">
          <h1>login</h1>
          <div className="input-card">
            <input
              className="input-form"
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              className="input-form"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              className="button-form"
              type="button"
              onClick={() => navigate("/")}
            >
              Iniciar sesion
            </button>
            <span>
              No tienes cuenta?{" "}
              <span
                className="register-span"
                onClick={() => setIsVisible(!isVisible)}
              >
                Registrate
              </span>
            </span>
          </div>
        </div>
      </form>
      <ModalComponent
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        children={<RegisterComponent setIsVisible={setIsVisible} />}
      />
    </Layout>
  );
};

export default LoginScreen;
