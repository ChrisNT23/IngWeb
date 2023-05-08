import React from "react";
import { Input } from "../../Components/UsedInputs";
import SideBar from "./SideBar";

function Password() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Cambiar Contraseña</h2>
        <Input
          label="Anterior Contraseña"
          placeholder="********"
          type="password"
          bg={true}
        />
        <Input
          label="Nueva Contraseña"
          placeholder="********"
          type="password"
          bg={true}
        />
        <Input
          label="Confirmar Contraseña"
          placeholder="********"
          type="password"
          bg={true}
        />
        <div className="flex justify-end items-center my-4">
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Cambiar Contraseña
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Password;