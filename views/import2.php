
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>O2 Kanban SLA Tracker</title>





    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/jquery.datetimepicker.css">
    

    <!-- Morris Charts CSS -->
    <link href="css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>

<body>

    <div id="wrapper">



        <div id="page-wrapper">

            <div class="container-fluid">
<?php
            if(isset($_GET['msg']))
              {
                ?><div class="alert alert-success"><?php echo base64_decode($_GET['msg']); ?></div><?php 
              }
        ?>
            <!-- Page Heading -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">
                        Import <small>Details</small>
                    </h1>
                </div>
            </div>
                
            <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <form role="form" action="php/import.php" class="padding15"  method="post" enctype="multipart/form-data" id="xlsImport">
                     <div><a href="download.php">Sample.xlsx</a></div>
                    <div class="form-group">
                       
                        <input type="file" class="form-control" name="file" id="file" >
                        <div class="note">Note: Please Upload Excle file with .xlsx extention</div>
                    </div>
                    <input type="submit" class="btn btn-primary" name="submit" id="submit">
                    <input type="reset" class="btn btn-info" name="reset" id="reset">


<?php

if($uploadedStatus==1){?>

<div> <b>File on server<b/></div>

<div> <b>Do you want to upload the data <a href='uploadxls.php'>Click Here</a> </b></div>

<?php
}

?>

                </form>
                 
            </div>
        </div>

                

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="js/jquery.datetimepicker.js"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="js/plugin.js"></script>
    <script type="text/javascript" src="js/slaScript.js"></script>
    <script src="js/additional-methods.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38304687-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  jQuery(document).ready(function() {
                jQuery("#xlsImport").validate({
                   errorClass:"errorlabels",
                    rules: {
                        
                        file: {
                            extension: "xlsx"
                        }
                    },
                    messages: {
                            file: "Please check the file extension it should be .xlsx"
                    }
                });
            });

</script>


</body>

</html>
