import React from "react";
import "./App.css";
import DataForm from "./components/DataForm/DataForm";
import UserList from "./components/UserList/UserList";
import Loading from "./components/Loading/Loading";

function App() {
  /*
    Van a haber dos componentes que interactuen con la misma lista de usuarios, el DataForm va a
    agregar nuevos usuarios a la lista, y UserList va a mostrar los usuarios, entonces vamos a 
    crear el estado de users en un nivel alto y vamos a pasar tanto la variable users como el setUsers
    como props. Lo interesante de esto es que el DataForm recibirá el setUsers y desde dentro de ese
    componente cambiará el estado en toda la aplicación agregando al nuevo usuario.
  */
  const [users, setUsers] = React.useState([]);

  /*
    Es muy usual que cuando se se inicie una página primero se descargue data de algúna api o sito,
    se puede hacer que la página no se muestre hasta que esa data esté lista creando una variable
    loading que indica si sigue descargando o ya acabó
  */
  const [loading, setLoading] = React.useState(true);

  /*
    Los useEffects son funciones que se ejecutan en cambios específicos, es recomendable
    que tengan un array vacío al final (si solo se quiere ejecutar la función cuando se inicie 
    la pagina), o un array con las variables que si cambian TODO el componente se debe volver a 
    renderizar. Si no se pone el arreglo (vacío o con variables) el componente se puede renderizar en 
    loop infinito
  */
  React.useEffect(() => {
    // Se simula que se tarda 3 segundos en cargar los datos
    setTimeout(() => {
      console.log("Datos cargados");
      setLoading(false); // Se cambia el estado de loading
    }, 3000);
  }, []); // Arreglo vacío => Solo se ejecuta una vez

  return (
    <div className="App">
      {/*
        Los operadoroes ternarios son muy útiles a la hora de hacer decisiones de renderización
        en el html, (condición) ? (que se renderiza si es true) : (que se renderiza si es false)
        
        Aquí estamos diciendo que si la variable loading es true muestre un cargando, si no muestre
        el container
      */}
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {/* Formulario */}
          <DataForm users={users} setUsers={setUsers} />

          {/* Lista de usuarios */}
          <UserList users={users} />
        </div>
      )}
    </div>
  );
}

export default App;
