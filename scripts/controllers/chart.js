app.controller('ChartCtrl',['$scope','allTickets','$timeout', function($scope,allTickets,$timeout) {

    var p1pass,p1fail,p2pass,p2fail,p3pass,p3fail,p4pass,p4fail,totalp1,totalp2,totalp3,totalp4;
    (function() {
        p1fail = p2fail = p3fail = p4fail = p1pass = p2pass= p3pass = p4pass = 0;
        allTickets.getTicketsByPriorityCount().then(function(response){
        $scope.piedata = response.data.charts;
             $scope.piedata1 = [];
             $scope.piedata2 = [];
             $scope.piedata3 = [];
             $scope.piedata4 = [];

            $.each($scope.piedata , function(i, item) {
                
           
            item.value = parseInt(item.value);
            
            if(item.priority == 'P1' && item.label == 'FAIL')
            {
                p1fail =item.value;
            }
            if(item.priority == 'P1' && item.label == 'PASS')
            {
                p1pass = item.value;
            }
            if(item.priority == 'P2' && item.label == 'FAIL')
            {
                p2fail = item.value;
            }
            if(item.priority == 'P2' && item.label == 'PASS')
            {
                p2pass = item.value;
            }
            if(item.priority == 'P3' && item.label == 'FAIL')
            {
                p3fail = item.value;
            }
            if(item.priority == 'P3' && item.label == 'PASS')
            {
                p3pass = item.value;
            }
            if(item.priority == 'P4' && item.label == 'FAIL')
            {
                p4fail = item.value;
            }
            if(item.priority == 'P4' && item.label == 'PASS')
            {
                p4pass = item.value;
            }
            
        });
            $scope.totalp1 = 0, $scope.totalp2 = 0, $scope.totalp3 = 0, $scope.totalp4 = 0;
               totalp1 = p1fail + p1pass;
               totalp2 = p2fail + p2pass;
               totalp3 = p3fail + p3pass;
               totalp4 = p4fail + p4pass;
           
             $.each($scope.piedata , function(i, chitem) {
                 
            chitem.value = parseInt(chitem.value);
            if(chitem.priority == 'P1' && chitem.label == 'FAIL')
            {
               p1fail = p1fail/totalp1 * 100;
               var p1failfix = p1fail.toFixed(2);
               chitem.value = parseFloat(p1failfix);
               chitem.label = 'FAIL%';
            }
            if(chitem.priority == 'P1' && chitem.label == 'PASS')
            {
               p1pass = p1pass/totalp1 * 100;
               var p1passf = p1pass.toFixed(2);
               chitem.value = parseFloat(p1passf);
               chitem.label = 'PASS%';
            }
            if(chitem.priority == 'P2' && chitem.label == 'FAIL')
            {
                p2fail = p2fail/totalp2 * 100;
                var p2failf = p2fail.toFixed(2); 
                chitem.value = parseFloat(p2failf);
                chitem.label = 'FAIL%';
            }
            if(chitem.priority == 'P2' && chitem.label == 'PASS')
            {
               p2pass = p2pass/totalp2 * 100;
               var p2passf = p2pass.toFixed(2); 
               chitem.value = parseFloat(p2passf);
               chitem.label = 'PASS%';
            }
            if(chitem.priority == 'P3' && chitem.label == 'FAIL')
            {
                p3fail = p3fail/totalp3 * 100;
                var p3failf = p3fail.toFixed(2);
                chitem.value = parseFloat(p3failf);
                chitem.label = 'FAIL%';
            }
            if(chitem.priority == 'P3' && chitem.label == 'PASS')
            {
                p3pass = p3pass/totalp3 * 100;
                var p3passf = p3pass.toFixed(2);
                chitem.value = parseFloat(p3passf);
                chitem.label = 'PASS%';
            }
            if(chitem.priority == 'P4' && chitem.label == 'FAIL')
            {
               p4fail = p4fail/totalp4 * 100;
               var p4failf = p4fail.toFixed(2);
               chitem.value = parseFloat(p4failf);
               chitem.label = 'FAIL%';
            }
            if(chitem.priority == 'P4' && chitem.label == 'PASS')
            {
               p4pass = p4pass/totalp4 * 100;
               var p4passf = p4pass.toFixed(2);
               chitem.value = parseFloat(p4passf);
               chitem.label = 'PASS%';
            }
         
            switch(chitem.priority){
                case "P1": $scope.piedata1.push(chitem);break;
                case "P2": $scope.piedata2.push(chitem);break;
                case "P3": $scope.piedata3.push(chitem);break;
                case "P4": $scope.piedata4.push(chitem); break;
            }
            
        });
        $scope.bar = response.data.bar;
        $.each($scope.bar , function(i, item) {
            item.value = parseInt(item.value);

        });

        $scope.bar = [{key:"Cumulative Return",values: $scope.bar}];
        
        $scope.piedata5 = response.data.devreview;
            var devfail, devpass, totaldev;
             $.each($scope.piedata5 , function(i, item) {
            item.value = parseInt(item.value);
            if(item.devReview == 'no' && item.label == 'FAIL')
            {
                devfail = item.value;
            }
            if(item.devReview == 'yes' && item.label == 'PASS')
            {
                devpass = item.value;
            }
         });

                 
            totaldev = devfail + devpass;
                 
            $.each($scope.piedata5 , function(i, item) {
            if(item.devReview == 'no' && item.label == 'FAIL')
            {
                devfail = devfail/totaldev * 100;
                var devfailf = devfail.toFixed(2);
                item.value = parseFloat(devfailf);
                item.label = 'FAIL%';
            }
            if(item.devReview == 'yes' && item.label == 'PASS')
            {
                devpass = devpass/totaldev * 100;
                var devpassf = devpass.toFixed(2);
                item.value = parseFloat(devpassf);
                item.label = 'PASS%';
            }
            
            });
                 
        $scope.piedata6 = response.data.publishline;
            var publfail,publpass, totalpubl;
             $.each($scope.piedata6 , function(i, item) {
            item.value = parseInt(item.value);
            if(item.publishline == 'no' && item.label == 'FAIL')
            {
                publfail = item.value;
            }
            if(item.publishline == 'yes' && item.label == 'PASS')
            {
                publpass = item.value;
            }
        });
            
        totalpubl = publfail + publpass;
            
        $.each($scope.piedata6 , function(i, item) {
            item.value = parseInt(item.value);
            if(item.publishline == 'no' && item.label == 'FAIL')
            {
                publfail = publfail/totalpubl * 100;
                var publfailf = publfail.toFixed(2);
                item.value = parseFloat(publfailf);
                item.label = 'FAIL%';
            }
            if(item.publishline == 'yes' && item.label == 'PASS')
            {
                publpass = publpass/totalpubl * 100;
                var publpassf = publpass.toFixed(2);
                item.value = parseFloat(publpassf);
                item.label = 'PASS%';
            }
        });


    })
    
    $timeout(function(){
        $scope.onTimeout = function(){
                if($scope.totalp1 == totalp1)
                {
                    $scope.stop();
                }
                else
                {
                    $scope.totalp1++;
                    mytimeout1 = $timeout($scope.onTimeout,500);
                }
                 if($scope.totalp2 == totalp2)
                {
                    $scope.stop();
                }
                else
                {
                    $scope.totalp2++;
                    mytimeout2 = $timeout($scope.onTimeout,300);
                } 
                if($scope.totalp3 == totalp3)
                {
                    $scope.stop();
                }
                else
                {
                    $scope.totalp3++;
                    mytimeout3 = $timeout($scope.onTimeout,100);
                } 
                if($scope.totalp4 == totalp4)
                {
                    $scope.stop();
                }
                else
                {
                    $scope.totalp4++;
                    mytimeout4 = $timeout($scope.onTimeout,10);
                }
            }
            var mytimeout1 = $timeout($scope.onTimeout,10);
            var mytimeout2 = $timeout($scope.onTimeout,10);
            var mytimeout3 = $timeout($scope.onTimeout,10);
            var mytimeout4 = $timeout($scope.onTimeout,10);
    
            $scope.stop = function(){
                $timeout.cancel(mytimeout1);
            }
    },1000);
})();

    // Chart.js Options
    $scope.pieoptions =  {

      // Sets the chart to be responsive
      responsive: true,

      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,

      //String - The colour of each segment stroke
      segmentStrokeColor : '#fff',

      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 0, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 100,

      //String - Animation easing effect
      animationEasing : 'easeOutBounce',

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : true,

      //String - A legend template
      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

    };

     // Bar chart data options

    $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                margin : {
                    top: 20,
                    right: 75,
                    bottom: 50,
                    left: 100
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                tooltips : false,
                valueFormat: function(d){
                    return d3.format(',f')(d);
                },
                transitionDuration: 3000,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

}]);
