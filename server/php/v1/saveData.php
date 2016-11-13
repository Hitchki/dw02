<?php

try {
    $collectionObj = $database->selectCollection( $collection );
    //$collectionObj->save($data);
    //$collectionObj->update( array("project" => "test1"), array("project" => "test1", 'b' => 'c', 'name' => 'project1'), array('upsert' => true)); 
    $collectionObj->update( $query, $data, array('upsert' => true));
    $status['errormessage'] =  'es ist alles ok!';
} catch(MongoConnectionException $e) {
    $status['errormessage'] = 'Failed to insert data ' .$e->getMessage();
    $status['actionStatus'] = 'error';
} 
	

