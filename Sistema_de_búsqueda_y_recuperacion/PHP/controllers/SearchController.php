<?php
  include("../services/SearchService.php");
  if(isset($_GET['request'])) {
      $request = ($_GET['request']);
      $response = new SearchService();
      echo $response->search($request);
    }else {
      echo "No data";
    }
?>