<?php

try {

    $collectionObj = $database->selectCollection( $collection );
    //$query = ''; 
    //
    //$query = array("project" => "test1");
    $cursor  = $collectionObj->find( $query );
    
    $data = $cursor->getNext();

    // $data = var_dump($collection);
    $status['detailedActionStatus'] = 'Cursor wurde gelesen';
} catch(MongoConnectionException $e) {
    $status['errormessage'] = "Failed to retrieve data ".$e->getMessage();
    $status['detailedActionStatus'] = 'Failed to retrieve data';
}
 

