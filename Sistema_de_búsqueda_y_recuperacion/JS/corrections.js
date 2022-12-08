document.getElementById("btn").addEventListener("click", corrections);

function corrections() {
  let query = document.getElementById("searchIn").value;
  var htmlTemplate = document.getElementById("correctionSearch");
  htmlTemplate.innerHTML = "";
  let url = "php/controllers/CorrectionsController.php?data=" + query;
  get(url).then(
    function (response) {
      console.log(response);
      if (JSON.parse(response).spellcheck.suggestions.length > 0) {
        console.log(response);
        let suggestion =
          JSON.parse(response).spellcheck.suggestions[1].suggestion[0].word;
        let template = document.createElement("p");
        template.setAttribute("class", "correction");
        template.setAttribute("id", suggestion);
        template.textContent = "¿No quisiste decir '" + suggestion + "'?";
        template.addEventListener("click", correction);
        htmlTemplate.appendChild(template);
      }
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
      //alert("Error al tratar de corregir su consulta, siga intentando...")
    }
  );
}

function correction(modified) {
  document.getElementById("searchIn").value = modified.target.id;
  document.getElementById("btn").click();
}
