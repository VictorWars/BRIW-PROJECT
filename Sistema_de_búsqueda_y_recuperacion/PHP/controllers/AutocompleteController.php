<?php
  if(isset($_GET['data'])){
    $data = ($_GET['data']);
    $response = file_get_contents('http://localhost:8983/solr/proyecto_final/selectCheck?df=attr_title&q='.$data."**&wt=json&wt=json");
    echo $response;
  }else {
    echo "404";
  }
?>
