<?php
    //open connection to mysql db
    $connection = mysqli_connect("localhost","root","","slatracker") or die("Error " . mysqli_error($connection));

    //fetch table rows from mysql db
    $sql = "SELECT 
                t.priority,
                CASE 
                    WHEN t.pubLineWithMitigation = 'yes'
                    THEN 'PASS'
                    ELSE 'FAIL'
                END as label,
                count(t.pubLineWithMitigation) as value,
                CASE 
                    WHEN t.pubLineWithMitigation = 'yes'
                    THEN '#46BFBD'
                    ELSE '#F7464A'
                END as color,
                CASE 
                    WHEN t.pubLineWithMitigation = 'yes'
                    THEN '#5AD3D1'
                    ELSE '#FF5A5E'
                END as highlight 
            FROM tickets t 
            WHERE t.pubLineWithMitigation IN ('yes','no')
            GROUP BY t.priority, t.pubLineWithMitigation";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    $results=array();
    $results['charts']= $emparray;

    //fetch table rows from mysql db
    $sql = "SELECT 
                t.devReview,
                count(t.devReview) as value,
                 CASE 
                    WHEN t.devReview = 'Yes'
                    THEN 'PASS'
                    ELSE 'FAIL'
                END as label,
                CASE 
                    WHEN t.devReview = 'Yes'
                    THEN '#46BFBD'
                    ELSE '#F7464A'
                END as color,
                CASE 
                    WHEN t.devReview = 'Yes'
                    THEN '#5AD3D1'
                    ELSE '#FF5A5E'
                END as highlight 
            FROM tickets t 
            GROUP BY t.devReview";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

     $results['devreview']= $emparray;

    //fetch table rows from mysql db
    $sql = "SELECT 
                t.publishline,
                count(t.publishline) as value,
                 CASE 
                    WHEN t.publishline = 'Yes'
                    THEN 'PASS'
                    ELSE 'FAIL'
                END as label,
                CASE 
                    WHEN t.publishline = 'Yes'
                    THEN '#46BFBD'
                    ELSE '#F7464A'
                END as color,
                CASE 
                    WHEN t.publishline = 'Yes'
                    THEN '#5AD3D1'
                    ELSE '#FF5A5E'
                END as highlight 
            FROM tickets t 
            GROUP BY t.publishline";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

     $results['publishline']= $emparray;

     //fetch table rows from mysql db
    $sql = "SELECT 
                t.priority as label,
                count(t.priority) as value
            FROM tickets t 
            GROUP BY t.priority";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

     $results['bar']= $emparray;

     echo json_encode($results);
    ?>
