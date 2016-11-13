<?php

//echo(json_encode('$json_string'));

require_once 'getCollectionAndQueryString.php';

// Ist notwendig, um den von Angular.js gesendeten json-String einlesen zu können.
$request_body = file_get_contents('php://input');

//true ist notwendig, damit ein Array decodiert wird und nicht ein Objekt.
$json_string = json_decode($request_body, true);
$status['json_string'] = $json_string;

$data = $json_string['data'];

//var_dump($data);

if ( !isset( $data ) ) {
    $status['errormessage'] = 'no data to insert';
    $status['actionStatus'] = 'no data to insert';
} else {

    require_once 'database.php';

    //$data = $status['actionStatus'];
    if ($status['actionStatus'] == 'ok') {
        include_once 'saveData.php';
    }
}

//echo(json_encode($status));
//var_dump($collection);
$return = array(
    'status' => $status,
    'result' => $result,
    'params' => array ( 'collection' => $collection, 'data' => $data,  'query' => $query)
);

echo(json_encode($return));

