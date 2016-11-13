<?php

require_once 'getCollectionAndQueryString.php';

require_once 'database.php';

//$data = $status['actionStatus'];
if ($status['actionStatus'] == 'ok') {
    include_once 'getData.php';
}	

$result = array ( 'collection' => $collection, 'query' => $query, 'data' => $data );

$return = array(  
	'status' => $status,
	'result' => $result,
        'params' => array ( 'collection' => $collection, 'data' => $data,  'query' => $query)
);

echo(json_encode($return));

