app.controller('exportController', ['$scope','$filter','$http','allTickets','editTickets','$state',function ($scope, $filter, $http, allTickets, editTickets, $state) {

    var dateFilter = _.sortBy(editTickets.data, 'readyForPublish').reverse();
    //typehead for tickets
   $scope.statesWithFlags =  editTickets.data;
   //typehead for devname
   var devname = _.pluck(editTickets.data, 'devname');
   $scope.develoname = _.uniq(devname);

    $scope.filterDate = [];

    (function(){

      $scope.filterDate = _.each(dateFilter, function(data){
            var dateParts = data.readyForPublish.split('-');
            var dtp2 = dateParts[2].split(" ");
            data.readyForPublish = new Date(dateParts[0],dateParts[1] - 1,dtp2[0]);
        });

    })();

    $scope.exportData = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
    };

    // initilize
    $scope.sort = {
                sortingOrder : 'id',
                reverse : false
            };

    $scope.gap = 5;

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

   function loadItems(val){
    if(val != null)
    {
        $scope.items = val;
        // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
    };


    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };

    $scope.range = function (size,start, end) {
        var ret = [];
        //console.log(size,start, end);

        if (size < end) {
            end = size;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
         //console.log(ret);
        return ret;
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.search();

    }
    else
    {
        $scope.items = dateFilter;
    }
   }loadItems();    // Display all values regardless any search parameter

   var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            //$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
    };


    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };

    $scope.range = function (size,start, end) {
        var ret = [];
        //console.log(size,start, end);

        if (size < end) {
            end = size;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
         //console.log(ret);
        return ret;
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.search();

    // Code for Check all
    $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.items, function (item) {
            item.selected = $scope.selectedAll;
        });

    };

$scope.calendar = {
    opened: {},
    dateFormat: 'MM/dd/yyyy',
    dateOptions: {},
    open: function($event, which) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.calendar.opened[which] = true;
    }
};

    $scope.errorsearchRef = false;

 $scope.searchbyall = function(){

     if($scope.srchtckt != null && $scope.srchdevnme != null && $scope.startDate != null && $scope.endDate != null)
     {
        $scope.errorsearchRef = true;
     }
     else if($scope.srchtckt != null){
         var srchtcktData = _.filter(dateFilter, function(sd){
            if(sd.ticketRef === $scope.srchtckt || sd.ticketRef === $scope.srchtckt.ticketRef){
               return sd.ticketRef;
                }
            });

         loadItems(srchtcktData);
     }
     else if($scope.srchdevnme != null){
        var srchdevData = _.filter(dateFilter, function(sdn){
            if(sdn.devname === $scope.srchdevnme.devname || sdn.devname === $scope.srchdevnme){
               return sdn.devname;
                }
            });

         loadItems(srchdevData);
     }
     else if($scope.startDate != null && $scope.endDate != null)
     {
         var requiredData = _.filter($scope.filterDate, function(data){
            if(data.readyForPublish >= +$scope.startDate && data.readyForPublish <= +$scope.endDate){
               return data;
                }
            });
         var sortdata = _.sortBy(requiredData, 'readyForPublish');
         loadItems(sortdata);

     }else if($scope.srchtckt != null || $scope.srchdevnme != null || $scope.startDate != null || $scope.endDate != null)
     {

         $state.reload();

     }
};
    $scope.srchblnk = function(){

        if($scope.srchtckt == "" || $scope.srchdevnme == "" || $scope.startDate == "" || $scope.endDate == "")
        {
          $state.reload();
        }
    }

    $scope.resetsearch = function(){

        $scope.srchtckt = "";
        $scope.srchdevnme = "";
        $scope.startDate = "";
        $scope.endDate = "";
        $state.reload();
    };

}]);
