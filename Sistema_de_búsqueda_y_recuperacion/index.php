<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" type="text/css" href="CSS/styles.css" />

    <title>Search Engine with Solr</title>
</head>

<body>
    <div class="box">
        <div class="container-1">
            <h1>Búsqueda y recuperación de información en la web</h1>
            <h2>Proyecto "Sistema de búsqueda y recuperación"</h2>
            <h3>Buscador</h3>
        </div>
    </div>

    <?php
    echo "<div class='component'>";
    include("Components/Searcher.html");
    echo "</div>";

    echo "<div class='component'>";
    include("Components/Autocomplete.html");
    echo "</div>";

    echo "<div class='component'>";
    include("Components/Results.html");
    echo "</div>";

    echo "<div class='component'>";
    include("Components/Corrections.html");
    echo "</div>";

    echo "<div class='component'>";
    include("Components/LanguageExpand.html");
    echo "</div>";
    ?>

    <div class="field-1">
        <button class="enlace" role="button" onclick="window.location='crawler.php'">
            Subir links
        </button>
    </div>

    <script src="js/search.js"></script>
    <script src="js/autocomplete.js"></script>
    <script src="js/corrections.js"></script>
    <script src="js/languageExpand.js"></script>

</body>

</html>