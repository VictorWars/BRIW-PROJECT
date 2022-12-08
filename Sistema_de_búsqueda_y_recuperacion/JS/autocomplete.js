function autoComplete() {
    let query = document.getElementById("searchIn").value;
    var availableTags = [];
    if (query.length > 0) {
        let url = "php/controllers/AutocompleteController.php?data=" + query;
        get(url).then(
            function (response) {
                let docs = JSON.parse(response).response.docs;
                for (var doc in docs) {
                    availableTags[doc] = docs[doc].attr_title[0];
                }
                $("#searchIn").autocomplete({
                    source: availableTags,
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
            }
        );
    }
}
