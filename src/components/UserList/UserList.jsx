import React from "react";
import "./UserList.css";

export default function UserList({ users }) {
  return (
    <ul className="user_list">
      {/* 
        Users es un arreglo de objetos user, entonces al mapear obtenemos cada usuario
        y podemos usar sus datos
      */}
      {users.map((user) => (
        <li className="list_item" key={user.name}>
          <p className="name">{user.name}</p>
          <p className="email">{user.email}</p>
          <p className="tel">{user.tel}</p>
        </li>
      ))}
    </ul>
  );
}
