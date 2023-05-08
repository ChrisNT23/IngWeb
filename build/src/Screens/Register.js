import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";

function Register() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border">
          
          <Input
            label="Nombre"
            placeholder="Christian"
            type="text"
            bg={true}
          />
          <Input
            label="Correo"
            placeholder="ejemplo@gmail.com"
            type="email"
            bg={true}
          />
          <Input
            label="Contraseña"
            placeholder="*******"
            type="password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Registrarse
          </Link>
          <p className="text-center text-border">
            ¿Ya tiene una cuenta?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;