const name = document.getElementById('name').value;
    let id = '';
    let row = `<tr><td id="id">${id}</td><td>${name}<div class="links"><a href="#" id="edit">edit</a> | <a href="#" id="delete">delete</a></div></td></tr>`;
    let result = document.getElementById("filas").innerHTML += row;
    return result;





function render() {
  agenda.forEach(contactos => {
      let row = `<tr><td id="id">${contactos.id}</td><td id="id">${contactos.name}</td><td>${contactos.email}<div class="links"><a href="#" id="edit">edit</a> | <a href="#" id="delete" onclick="del(${contactos.id})">delete</a></div></td></tr>`;
      document.getElementById("filas").innerHTML += row;
  });
}

function del(id) {
  const index = agenda.findIndex((data) => data.id == id);
  agenda.splice(index, 1);
  render();
}

render();