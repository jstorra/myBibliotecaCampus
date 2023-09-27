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

// const actualizar = async () => {
//   const config = {
//     method: "PUT",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       titulo: "ready",
//       fecha: "2019",
//       autor: "juanito",
//     }),
//   };
//   let res = await (await fetch("http://127.0.0.1:5010/libros/1", config)).json();
//   console.log(res);
// };

// actualizar();

// const eliminar = async () => {
//   let res = await (await fetch("http://127.0.0.1:5010/libros/1", {method: "DELETE"})).json();
//   console.log(res);
// };

// eliminar();