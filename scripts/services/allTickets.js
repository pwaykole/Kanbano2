angular.module('angularKanban')
    .service('allTickets', ['$http', function($http) {

    this.getAllTickets = function() {
        return $http.get('php/dbtojson.php');
    };

    this.getTicketsByPriorityCount = function(a){
         return $http.get('php/counts.php');
    }

    this.getOnlyTickets = function(){
         return $http.get('php/tickets.php');
    }

}]);
