export const libroTable = (data) => {
    const myData = document.querySelector("#myData")
    data.forEach((obj) => {
        myData.insertAdjacentHTML("beforeend", `
            <tr>
                <th>${obj.id}</th>
                <td>${obj.titulo}</td>
                <td>${obj.autorId.nombre} ${obj.autorId.apellido}</td>
                <td>${obj.numPaginacion}</td>
                <td>${obj.isbn}</td>
                <td>${obj.fechaLanzamiento}</td>
                <td>${obj.categoriaId.nombre}</td>
                <td>${obj.editorialId.nombre}</td>
                <td>${obj.estadoId.nombre}</td>
            </tr>
        `)
    }) 
}
