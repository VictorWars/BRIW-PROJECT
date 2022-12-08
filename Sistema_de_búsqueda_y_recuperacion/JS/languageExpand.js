document.getElementById("btn").addEventListener("click", function () {
  let query = document.getElementById("searchIn").value;
  var htmlTemplate = document.getElementById("languageExpand");
  htmlTemplate.innerHTML = "";
  if (query.length > 0) {
    let url = "php/controllers/LanguageExpandController.php?e=" + query;

    get(url).then(
      function (response) {
        let docs = JSON.parse(response);
        const results = document.createElement("div");
        results.setAttribute("class", "expandiv");

        let template = document.createElement("p");
        template.setAttribute("class", "expandTitle");
        template.textContent = "Te puede interesar:\n";

        htmlTemplate.appendChild(results);
        results.appendChild(template);

        docs.forEach((element, index) => {
          var button = document.createElement("input");
          button.type = "button";
          button.value = element.word;
          button.setAttribute("class", "expand");
          button.onclick = function () {
            document.getElementById("searchIn").value = element.word;
            document.getElementById("btn").click();
            var htmlTemplate = document.getElementById("autocomplete");
            htmlTemplate.innerHTML = "";
          };

          htmlTemplate.appendChild(results);
          results.appendChild(button);
        });
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
        //alert("Se produjo un error, favor de intentar luego.");
      }
    );
  }
});
