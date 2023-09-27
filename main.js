// // GET
// const obtener = async () => {
//   let res = await (await fetch("http://127.0.0.1:5010/libros")).json();
//   console.log(res);
// };

// obtener()

// // POST
// const enviar = async () => {
//   const config = {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       titulo: "cincuenta sombras de grey",
//       fecha: "2016",
//       autor: "pachon",
//     }),
//   };
//   let res = await (await fetch("http://127.0.0.1:5010/libros", config)).json();
//   console.log(res);
// };

// enviar();

// // PUT
// const actualizar = async (id) => {
//   const config = {
//     method: "PUT",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       titulo: "ready",
//       fecha: "2019",
//       autor: "juanito",
//     }),
//   };
//   let res = await (await fetch(`http://127.0.0.1:5010/libros/${id}`, config)).json();
//   console.log(res);
// };

// actualizar(1);

// // DELETE
// const eliminar = async (id) => {
//   let res = await (await fetch(`http://127.0.0.1:5010/libros/${id}`, {method: "DELETE"})).json();
//   console.log(res);
// };

// eliminar(1);