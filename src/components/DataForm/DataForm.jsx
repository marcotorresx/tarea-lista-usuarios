import React from "react";
import "./DataForm.css";

export default function DataForm({ users, setUsers }) {
  /*
    Los inputs se modelan de la siguiente forma:
    Debes de crear un estado por cada input, debes de hacer que el valor del input sea igual a tu estado
    y hacer que cada que cambie el valor del input se cambie el valor del estado, esto puede parecer
    un loop pero lo que hace es que el input enseña el valor del estado, cuando cambia el input
    cambia el estado y se cambia el valor del input al mismo tiempo.

    Se deben agregar a los inputs las props value y onChange
  */
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");

  function addUser() {
    /*
      Regularmente los arrays que se rendereizan en una app, como la lista de usuarios, van a ser
      arrays de objetos
    */
    const newUser = { name, email, tel };

    /*
      IMPORANTE: Apesar que users, que se recibe por props, es un array, no se puede hacer un
      users.push(newUser), todos los cambios deben de hacerse por medio de un setState para que se
      actualice el componente, se debe de settear un nuevo arreglo con todos los elementos que ya se
      tienen y el nuevo usuario
    */
    setUsers([...users, newUser]);
    /*
      El operador ...(arreglo u objeto) regresa todos los elementos que contiene esa variable, ahí 
      estamos creando un nuevo array que tenga todos los usuarios que ya tiene users, y agregue un
      nuevo usuario al final
    */

    setName("");
    setEmail("");
    setTel("");
  }

  return (
    <form className="data_form">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      {/* Al dar click se ejecuta addUser */}
      <button type="button" onClick={addUser}>
        Añadir
      </button>
    </form>
  );
}
