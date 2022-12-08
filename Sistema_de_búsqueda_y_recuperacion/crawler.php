<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" type="text/css" href="CSS/styles.css" />
    <title>Crawler</title>
</head>

<body>

    <div class="paginacontainer" id="paginacontainer">
        <div class="box">
            <div class="container-1">
                <h1>Búsqueda y recuperación de información en la web</h1>
                <h2>Proyecto "Sistema de búsqueda y recuperación"</h2>
                <h3>Subida de Links</h3>
            </div>
        </div>
        <main>
            <?php
            echo "<div class='component'>";
            include("Components/TextAreaUrl.html");
            echo "</div>";
            ?>
        </main>
        <div class="field-1">
            <button class="enlace" role="button" onclick="window.location='index.php'">
                Buscador
            </button>
        </div>
    </div>
    <div class="loader-container" id="cargando" style="display: none;">
        <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        </div>
        <img class="gato" src="/gif/nyan-cat-loading.gif">
        <img class="gato1" src="/gif/nyan-cat-loading.gif">
        <img class="gato2" src="/gif/nyan-cat-loading.gif">
        <img class="gato3" src="/gif/nyan-cat-loading.gif">
        <img class="gato4" src="/gif/nyan-cat-loading.gif">
        <img class="gato5" src="/gif/nyan-cat-loading.gif">
    </div>
    <script src="js/scrapping.js"></script>
</body>

</html>