app.controller('editTicketsFormController',['$scope','$http','$timeout', '$stateParams','$state', function ($scope, $http, $timeout, $stateParams, $state) {
    
//populate data
    var datakey = $stateParams.ticketeditdata;
    $scope.tickets = JSON.parse(datakey)[0] ;
console.log($scope.tickets);
    
    $scope.mplrh = true;
    $scope.mplrs = false;
    $scope.ngdis = true;
    $scope.mplrhd = function(x){
       
    if(x == 'true')
    {
            $scope.mplrh = false;
            $scope.mplrs = true;
            $scope.ngdis = false;
    }
    else if(x == 'false')
    {
             $scope.mplrh = true;
             $scope.mplrs = false;
             $scope.ngdis = true;
    }
}
    $scope.resnrejs = true; $scope.resnrejh = false;
    $scope.rejqa = function(z){
    
        if(z == 'false')
        {
             $scope.resnrejh = false;
             $scope.resnrejs = true
        }
        else if(z == 'true')
        {
            $scope.resnrejh = true;  
            $scope.resnrejs = false;
        }
    
    }
//function for select tag
$timeout(function() {
         [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
    new SelectFx(el);
   } );
    }, 500);
    
//function for text box   
$timeout(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
}, 500);


 $scope.serviceoptions = [{
        "name" : "PORTAL",
        "value": "PORTAL"
    },{
        "name" : "SHOP",
        "value": "SHOP"
    }];

     $scope.priorityoptions = [{
        "name" : "PRIORITY 1",
        "value": "P1"
    },{
        "name" : "PRIORITY 2",
        "value": "P2"
    },{
        "name" : "PRIORITY 3",
        "value": "P3"
    },{
        "name" : "PRIORITY 4",
        "value": "P4"
    }];

    $scope.sizeoptions = [{
        "name" : "M",
        "value": "M"
    },{
        "name" : "S",
        "value": "S"
    }];
    
//for date picker
    $scope.dates = {
        date1: new Date(),
        date2: new Date(),
        date3: new Date(),
        date4: new Date()
};

  $scope.open = {
      date1: false,
      date2: false,
      date3: false,
      date4: false
};

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
  };

  $scope.dateOptions = {
    showWeeks: false,
    startingDay: 1
  };

  $scope.timeOptions = {
    readonlyInput: true,
    showMeridian: false
  };
    
$scope.openCalendar = function(e, date) {
      e.preventDefault();
      e.stopPropagation();

      $scope.open[date] = true;
  };
    
//Reset form values
$scope.reset = function(){
$scope.tickets = "";
console.log("reset");
}

//other calculations based on time
var devbh, rfph, dbsh, dbeh, devbm, rfpm, dbsm, dbem, totalhs,readyfp,dbsht,dbet;
    
$scope.totalhrsspent = function(){
    
    if($scope.tickets.devBackLog != null)
    {
        devbh = $scope.tickets.devBackLog.getHours();
        var devbhp = parseInt(devbh) * 60;
        devbm = $scope.tickets.devBackLog.getMinutes();
        var devbmp = parseInt(devbm);
        totalhs = devbhp + devbmp;
    }
    
     if($scope.tickets.readyForPublish != null)
    {
        rfph = $scope.tickets.readyForPublish.getHours();
        var rfphp = parseInt(rfph) * 60;
        rfpm = $scope.tickets.readyForPublish.getMinutes();
        var rfpmp = parseInt(rfpm);
        readyfp = rfphp + rfpmp;
        
    }
    
    if($scope.tickets.devBackLog != null && $scope.tickets.readyForPublish != null)
    {
        $scope.tickets.totalHrSpent = readyfp - totalhs;
        console.log($scope.tickets.totalHrSpent);
    }
    
    if($scope.tickets.devBlockedStart != null)
    {
        dbsh = $scope.tickets.devBlockedStart.getHours();
        var dbshp = parseInt(dbsh) * 60;
        dbsm = $scope.tickets.devBlockedStart.getMinutes();
        var dbsmp = parseInt(dbsm);
        dbsht = dbshp + dbsmp;
    }
    
    if($scope.tickets.devBlockedEnd != null)
    {
        dbeh = $scope.tickets.devBlockedEnd.getHours();
        var dbehp = parseInt(dbeh) * 60;
        dbem = $scope.tickets.devBlockedEnd.getMinutes();
        var dbemp = parseInt(dbem);
        dbet = dbehp + dbemp;
    }
    if($scope.tickets.devBlockedStart != null && $scope.tickets.devBlockedEnd != null)
    {
        $scope.tickets.totalHrWaste = dbet - dbsht; 
    }
    
    $scope.tickets.netTimeSpent = $scope.tickets.totalHrSpent - $scope.tickets.totalHrWaste;
    
    var etamin = document.getElementById("input-3").value * 60;
    if($scope.tickets.netTimeSpent < etamin)
    {
        $scope.tickets.metResolution = "Yes";
    }else{
         $scope.tickets.metResolution = "No";
    }
}
    
//function for select tag
$timeout(function() {
         $("li[data-value='"+ angular.uppercase( $scope.tickets.service )  +"']").addClass('cs-selected');
         $('.service').find('.cs-placeholder').text(angular.uppercase( $scope.tickets.service ));   
    
        $("li[data-value='"+ angular.uppercase( $scope.tickets.size )  +"']").addClass('cs-selected');
         $('.size').find('.cs-placeholder').text(angular.uppercase( $scope.tickets.size ));   
    
    $("li[data-value='"+ angular.uppercase( $scope.tickets.priority )  +"']").addClass('cs-selected');
         $('.priority').find('.cs-placeholder').text(angular.uppercase( $scope.tickets.priority ));   
    
    }, 1000);
    
//code for updating values
    $scope.updateticket = function(){
    $scope.tickets.service = $('.service').find('.cs-selected').data("value");
    $scope.tickets.priority = $('.priority').find('.cs-selected').data("value");
    $scope.tickets.size = $('.size').find('.cs-selected').data("value");
        console.log($scope.tickets);
        $http.post('php/enterTickets.php',$scope.tickets);
        
        $state.go('editTickets',{fromupdate: true});
    }

}]);