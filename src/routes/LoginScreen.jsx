import { ModalComponent } from "../components/global/modal/ModalComponent";
import { useState } from "react";
import RegisterComponent from "../components/login/RegisterComponent";
import { useNavigate } from "react-router-dom";
import Layout from "../components/global/Layout";
import "../styles/routesStyles/Login.css";
import { modalActualState } from "../features/modalState/modalSlice";
import { useDispatch } from "react-redux";

import React from "react";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const showModal = () => {
    dispatch(
      modalActualState({
        isVisible: true,
      })
    );
  };

  return (
    <Layout title="Login" description="Page login|register" login>
      <form className="login-container" onSubmit={(e) => handleSubmit(e)}>
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
              <span className="register-span" onClick={() => showModal()}>
                Registrate
              </span>
            </span>
          </div>
        </div>
      </form>
      <ModalComponent
        children={
          <RegisterComponent
            dispatch={dispatch}
            modalActualState={modalActualState}
            navigate={navigate}
          />
        }
      />
    </Layout>
  );
};

export default LoginScreen;
