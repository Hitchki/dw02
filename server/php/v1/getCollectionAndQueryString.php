<?php

$status =  array( 'actionStatus' => 'ok', 'detailedActionStatus' => 'ok' );
$result = null;    

$collection = (isset($_GET['collection']) ? $_GET['collection'] : 'not_set');
$query = (isset($_GET['query']) ? $_GET['query'] : 'not_set');

 
//true ist notwendig, damit ein Array decodiert wird und nicht ein Objekt.
$query = json_decode($query, true);    


/*


if (isset($json_string['data'])) {
    $data = $request_body['data'];
}
*/

