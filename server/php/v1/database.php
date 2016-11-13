<?php
$mongoConnectionString = 'mongodb://dwmin:$Ratna2014@ds039860.mongolab.com:39860/denkwelten';

$db = "denkwelten";

try {
    //$connection = new Mongo($mongoConnectionString);
  $connection = new MongoClient($mongoConnectionString);
    $database   = $connection->selectDB($db);
    $status['detailedActionStatus'] = 'connection to mongoDB is ok';
} catch(MongoConnectionException $e) {
    $status['errormessage'] = "Failed to connect to database ".$e->getMessage();
    $status['detailedActionStatus'] = 'connectionError to mongoDB';
}
