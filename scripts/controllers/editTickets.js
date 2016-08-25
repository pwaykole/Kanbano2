app.controller('editTicketsController',['$scope','$state','$http','$filter','ngTableParams','allTickets','editTickets','$stateParams', function ($scope,$state, $http, $filter, ngTableParams, allTickets, editTickets, $stateParams) {

    localStorage.setItem("count", "true");
    var update = $stateParams.fromupdate;
    if(update == true && localStorage.getItem("count") == true)
    {
        localStorage.setItem("count", "false");
        $state.reload();
    }

    var data, filterByPriority = editTickets.data;
    var setPriority = $stateParams.priorityID;
    if(setPriority == 'P1')
    {
        data = _.filter(filterByPriority, function(item) {
            return item.priority == setPriority;
        });
    }
    else if(setPriority == 'P2')
    {
         data = _.filter(filterByPriority, function(item) {
            return item.priority == setPriority;
        });
    }
    else if(setPriority == 'P3')
    {
         data = _.filter(filterByPriority, function(item) {
            return item.priority == setPriority;
        });
    }
    else if(setPriority == 'P4')
    {
         data = _.filter(filterByPriority, function(item) {
            return item.priority == setPriority;
        });
    }
    else{
        data = editTickets.data;
    }

     $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10          // count per page
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ?
                        $filter('filter')(data, params.filter()) :
                        data;

                $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve($scope.users);
            }
        });


   //code to send data and populate form with the id selected
    $scope.editTickets = function(id){

                var filtered = _.filter(data, function(item) {
                    return item.id == id;
                    });
                var ticketeditdata = JSON.stringify(filtered);

                $state.go('editTicketsForm', {ticketeditdata: ticketeditdata});

    }

    $scope.showModal = false;
    $scope.toggleModal = function(user){
        $scope.user = user;
        $scope.showModal = !$scope.showModal;
    };

    $scope.filterhide = false;
    $scope.filterhide1 = true;

       if($stateParams.priorityID == 'P1')
       {
            $scope.priorityname = "PRIORITY 1 TICKETS";
            $scope.filterhide = true;
            $scope.filterhide1 = false;

       }
       else if($stateParams.priorityID == 'P2')
       {
            $scope.priorityname = "PRIORITY 2 TICKETS";
            $scope.filterhide = true;
            $scope.filterhide1 = false;
       }
       else if($stateParams.priorityID == 'P3')
       {
            $scope.priorityname = "PRIORITY 3 TICKETS";
            $scope.filterhide = true;
            $scope.filterhide1 = false;
       }
       else if($stateParams.priorityID == 'P4')
       {
            $scope.priorityname = "PRIORITY 4 TICKETS";
            $scope.filterhide = true;
            $scope.filterhide1 = false;
       }


    $scope.filterhd = false;
    $scope.filterhd1 = true;

$scope.statuspf = function(c){
    if(c == 'pass')
       {
            $scope.status = "PASS";
            $scope.filterhd = true;
            $scope.filterhd1 = false;

       }
       else if(c == 'fail')
       {
            $scope.status = "FAIL";
            $scope.filterhd = true;
            $scope.filterhd1 = false;
       }

}

}]);
