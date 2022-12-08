<?php
include ('../GeneratorQuerySolr.php');

class SearchService
{
    public function search($request){
        $query = new GeneratorQuerySolr();
        $resultados = file_get_contents($query->generateQuery($request).'&wt=json');
        return json_encode($resultados);
    }
}
