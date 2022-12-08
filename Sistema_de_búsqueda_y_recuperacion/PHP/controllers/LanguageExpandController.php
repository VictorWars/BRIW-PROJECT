<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$arrContextOptions=array(
    "ssl"=>array(
        "verify_peer"=>false,
        "verify_peer_name"=>false,
    ),
);  
    $searchData = $_GET["e"];
    $endPointDataMuse = "https://api.datamuse.com/sug";
    $paramsDataMuse = [
        "s" => $searchData,
        "max" => 10,
        "v" => "es",
    ];
    $urlDataMuse = $endPointDataMuse . "?" . http_build_query( $paramsDataMuse);

    $resultDataMuse = file_get_contents($urlDataMuse, false, stream_context_create($arrContextOptions)); 
    echo ($resultDataMuse); 
?>