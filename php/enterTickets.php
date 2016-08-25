<?php

$json = file_get_contents('php://input');
$obj = json_decode($json,true);




    //open connection to mysql db
    $connection = mysqli_connect("localhost","root","","slatracker") or die("Error " . mysqli_error($connection));

$pubLineWithMitigation = true;
if(false == $obj['publishLine'] ) 
$pubLineWithMitigation =  $obj['pubLineWithMitigation']; 


if(  $obj['id'] != null ){
    
        $sql = "UPDATE tickets  SET ticketRef = '".  $obj['ticketRef'] ."',
                                            devname = '".  $obj['devname'] ."',
                                            netTimeSpent = '".  $obj['netTimeSpent'] ."',
                                            metResolution = '".  $obj['metResolution'] ."',
                                            devBackLog = '".  $obj['devBackLog'] ."',
                                            readyForPublish = '".  $obj['readyForPublish'] ."',
                                            totalHrSpent = '".  $obj['totalHrWaste'] ."',
                                            devBlockedStart = '".  $obj['devBlockedStart'] ."',
                                            devBlockedEnd= '".  $obj['devBlockedEnd'] ."',
                                            totalHrWaste = '".  $obj['totalHrSpent'] ."',
                                            rejectedInQA=  '".  $obj['rejectedInQA'] ."',
                                            mitigated='".  $obj['mitigated'] ."',
                                            reasonForRejection='".  $obj['reasonForRejection'] ."',
                                           devReview='".  $obj['devReview'] ."',
                                           devRewWithMitigation='".  $obj['devRewWithMitigation'] ."',
                                           reasonDevRewFail='".  $obj['reasonDevRewFail'] ."',
                                           metResWithMitigation='".  $obj['metResWithMitigation']."',
                                           metResMitigationDetails='".  $obj['metResMitigationDetails'] ."',
                                           publishLine='".  $obj['publishLine'] ."',
                                           pubLineWithMitigation='".  $pubLineWithMitigation ."',
                                           reasonForMissingPublishLine='".  $obj['reasonForMissingPublishLine'] ."',
                                           refTestingSla='".  $obj['refTestingSla'] ."',
                                            service='".  $obj['service'] ."',
                                            priority='".  $obj['priority'] ."',
                                            size='".  $obj['size'] ."'
            WHERE id = ".  $obj['id'];
    
}else{
    //fetch table rows from mysql db
    $sql = "INSERT INTO tickets (ticketRef,devname,netTimeSpent,metResolution, devBackLog,readyForPublish,totalHrSpent,devBlockedStart,
    
            devBlockedEnd,totalHrWaste,rejectedInQA,mitigated,reasonForRejection,devReview,devRewWithMitigation,reasonDevRewFail,
            
            metResWithMitigation,metResMitigationDetails,publishLine,pubLineWithMitigation,reasonForMissingPublishLine,refTestingSla,
            service,priority,size
            )VALUES ('".  $obj['ticketRef'] ."','".  $obj['devname'] ."','".  $obj['netTimeSpent'] ."','".  $obj['metResolution'] ."','".  $obj['devBackLog'] ."','".  $obj['readyForPublish'] ."','".  $obj['totalHrWaste'] ."','".  $obj['devBlockedStart'] ."','".  $obj['devBlockedEnd'] ."','".  $obj['totalHrSpent'] ."','".  $obj['rejectedInQA'] ."','".  $obj['mitigated'] ."','".  $obj['reasonForRejection'] ."','".  $obj['devReview'] ."','".  $obj['devRewWithMitigation'] ."','".  $obj['reasonDevRewFail'] ."','".  $obj['metResWithMitigation'] ."','".  $obj['metResMitigationDetails'] ."','".  $obj['publishLine'] ."','".  $pubLineWithMitigation ."','".  $obj['reasonForMissingPublishLine'] ."','".  $obj['refTestingSla'] ."','".  $obj['service'] ."','".  $obj['priority'] ."','".  $obj['size'] ."' )";
    }
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


 print_r($result);

 
    ?>
