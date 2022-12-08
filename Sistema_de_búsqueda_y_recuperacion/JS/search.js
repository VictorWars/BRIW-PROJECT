document.getElementById("btn").addEventListener("click", function () {
  let query = document.getElementById("searchIn").value;
  if (!query) {
    Swal.fire({
      title: "¿Qué buscas?",
      text: "Introduce una palabra en el buscador, por favor.",
      icon: "question",
    });
    return;
  }
  let url = "php/controllers/SearchController.php?request=" + query;

  get(url).then(
    function (response) {
      console.log(response);
      let table = showTable(response);
      let results = document.getElementById("resultContainer");

      if (results.hasChildNodes()) {
        while (results.childNodes.length >= 1) {
          results.removeChild(results.firstChild);
        }
      }
      results.appendChild(table);
    },
    function (error) {
      Swal.fire({
        title: "\n\n\n\n\n",
        width: "480",
        padding: "3em",
        color: "#716add",
        background: "url(../gif/fondoerror.gif)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("../gif/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    }
  );
});

document.getElementById("searchIn").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    document.getElementById("btn").click();
  }
});

function showTable(data) {
  data = JSON.parse(JSON.parse(data));

  documents = data["response"]["docs"];

  var table = document.createElement("table");
  var thead = table.createTHead();
  var tbody = table.createTBody();
  var tam = data["response"]["numFound"];

  if (documents.length > 0) {
    var cabecera = thead.insertRow(-1);
    var titulos = ["Título", "Descripción", "Puntaje"];
    for (var i = 0; i < 3; i++) {
      var th = document.createElement("th");
      th.innerHTML = titulos[i];
      cabecera.appendChild(th);
    }

    for (var i = 0; i < tam; i++) {
      tr = tbody.insertRow(-1);
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML =
        '<a href="' +
        documents[i]["attr_url"][0] +
        '">' +
        documents[i]["attr_title"][0] +
        "</a>";
      tabCell = tr.insertCell(-1);
      tabCell.innerHTML =
        data["highlighting"][documents[i]["id"]]["attr_text"][0];
      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = data["debug"]["explain"][documents[i]["id"]]["value"];
    }
  } else {
    table.innerHTML = "No se encontraron coincidencias";
  }
  return table;
}

function get(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(Error("Network Error"));
    };
    req.send();
  });
}
