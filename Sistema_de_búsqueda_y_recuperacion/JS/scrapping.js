document.getElementById("btn").addEventListener("click", scrapping);
fetch("urls.txt")
    .then((res) => res.text())
    .then((content) => {
        document.getElementById("textArea").value = content;
    });


const $cargando = document.getElementById("cargando");

function scrapping() {
    var lines = document.getElementById("textArea").value.split("\n");
    var urls = "";
    var urlsViewer = "";
    for (var i = 0; i < lines.length; i++) {
        if (i == 0) {
            urls = lines[i];
            urlsViewer = lines[i];
        } else {
            urls = urls + "," + lines[i];
            urlsViewer = urlsViewer + "\n" + lines[i];
        }
    }
    let urlScrapping = "php/controllers/CrawlerController.php?urls=" + urls;
    Swal.fire({
        title: '¿Quieres guardar estos links?',
        text: urlsViewer,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, Guardalos!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {

            $cargando.style.display = 'flex';
            //alert(urlScrapping);
            get(urlScrapping).then(
                function (response) {

                    //alert(response);
                    //alert("Sus resultados se han indizados");
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
                    //alert("Error en conexion");
                }
            ).catch(error => console.error('Error:', error))
                .finally(() => {

                    $cargando.style.display = 'none';
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: '¡Se han guardado satisfactoriamente!',
                        showConfirmButton: false,
                        timer: 4000
                    });
                });
        }
    })
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
