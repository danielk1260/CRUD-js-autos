let autos = [
{ id: 0, marca: "Mercedes Benz", modelo: "AMG", color: "White", anio: "2020", precio: "$1,000,000", foto: "car.jpg" },
{ id: 1, marca: "Mclaren", modelo: "F1", color: "Grey", anio: "2020", precio: "$2,000,000", foto: "auto.jpg" },
{ id: 2, marca: "Ferrari", modelo: "Enzo", color: "Red", anio: "2020", precio: "$3,000,000", foto: "car.jpg" }
];

function render() {
    const render = document.getElementById('filas');
    let html = '';
    autos.forEach((auto) => {
        html += `<tr>
        <td>${auto.id}</td>
        <td>${auto.marca}</td>
        <td>${auto.modelo}</td>
        <td>${auto.color}</td>
        <td>${auto.anio}</td>
        <td>${auto.precio}</td>
        <td><img width="150px" src="${auto.foto}"></td>
        <td>
        <a class="ui red label" type="button" onclick="del(${auto.id})"/>Eliminar</a>
        <a class="ui blue label" type="button" id="formupdatebutton" onclick="fill(${auto.id})"/>Editar</a>
        </td>
        </tr>`;
    });
    render.innerHTML = html;
}

function fill(id) {
    const renderfill = document.getElementById('edicion');
    let formfill = '';
    formfill += `
    <div class="ui modal" id="formupdate">
    <form id="form" onsubmit="event.preventDefault(), update(${id})" action="script.php">
    <input type="hidden" id="id">
    <input type="text" value="${autos[id].marca}" id="marca" placeholder="Marca">
    <input type="text" value="${autos[id].modelo}" id="modelo" placeholder="Modelo">
    <input type="text" value="${autos[id].color}" id="color" placeholder="Color">
    <input type="text" value="${autos[id].anio}" id="anio" placeholder="Año">
    <input type="text" value="${autos[id].precio}" id="precio" placeholder="Precio">
    <input type="text" value="${autos[id].foto}" id="foto" placeholder="Foto">
    <input type="submit" value="Edit">
    </form></div>`;

    renderfill.innerHTML = formfill;
}

function update(id) {
    autos[id].id = document.getElementById('marca').value;
    autos[id].marca = document.getElementById('marca').value;
    autos[id].modelo = document.getElementById('modelo').value;
    autos[id].color = document.getElementById('color').value;
    autos[id].anio = document.getElementById('anio').value;
    autos[id].precio = document.getElementById('precio').value;
    autos[id].foto = document.getElementById('foto').value;

    console.log(autos);
    render();
}

function add() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;
    const foto = document.getElementById('foto').value;

    const id = autos[autos.length - 1].id + 1;
    const newUser = { id, marca, modelo, color, anio, precio, foto }
    autos.push(newUser);
    render();

    document.getElementById('form').reset();
    }

    function del(id) {
        const index = autos.findIndex((user) => user.id == id);
        autos.splice(index, 1);
        render();
    }

    render();
    
    $('#formnewbutton').click(function(){ $('#formnew').modal('show'); });
    $('#formupdatebutton').click(function(){ $('#formupdate').modal('show'); });
