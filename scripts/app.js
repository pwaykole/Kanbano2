var app = angular.module('angularKanban',['ui.bootstrap','ui.router','tc.chartjs','ngTable','ui.bootstrap.datetimepicker','nvd3']);

//routing code
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        // DASHBOARD STATES AND NESTED VIEWS ========================================
        .state('dashboard', {
            url: '/dashboard',
            views: {

                // the main template
                '': { templateUrl: 'views/dashboard.html',controller: 'ChartCtrl' },

                // the child view ticket entry
                'ticketscount@dashboard': {
                    templateUrl: 'views/Tickets_counts.html'
                },

                // the child view graphs
                'charts1@dashboard': {
                    templateUrl: 'views/charts1.html',
                    controller: 'ChartCtrl'
                },

                // the child view bar graphs
                'charts2@dashboard': {
                    templateUrl: 'views/charts2.html',
                    controller: 'ChartCtrl'
                }
            }

        })
        .state('enterTickets', {
            url: '/enterTickets',
            resolve: {
            onlyTickets: ['allTickets',
                function(allTickets) {

                return allTickets.getOnlyTickets();
            }]
            },
            templateUrl: 'views/enterTickets.html',
            controller: 'ticketsController'
        })
        .state('editTickets', {
            url: '/editTickets',
            resolve: {
            editTickets: ['allTickets',
                function(allTickets) {

                return allTickets.getAllTickets();
            }]
            },
            params:{fromupdate: null},
            templateUrl: 'views/editTickets.html',
            controller: 'editTicketsController'
        })
        .state('editTickets1', {
            url: '/editTickets/:priorityID',
            resolve: {
            editTickets: ['allTickets',
                function(allTickets) {

                return allTickets.getAllTickets();
            }]
            },
            templateUrl: 'views/editTickets.html',
            controller: 'editTicketsController'
        })
        .state('editTickets2', {
            url: '/editTickets/:priorityID',
            resolve: {
            editTickets: ['allTickets',
                function(allTickets) {

                return allTickets.getAllTickets();
            }]
            },
            templateUrl: 'views/editTickets.html',
            controller: 'editTicketsController'
        })
        .state('editTickets3', {
            url: '/editTickets/:priorityID',
            resolve: {
            editTickets: ['allTickets',
                function(allTickets) {

                return allTickets.getAllTickets();
            }]
            },
            templateUrl: 'views/editTickets.html',
            controller: 'editTicketsController'
        })
        .state('editTickets4', {
            url: '/editTickets/:priorityID',
            resolve: {
            editTickets: ['allTickets',
                function(allTickets) {

                return allTickets.getAllTickets();
            }]
            },
            templateUrl: 'views/editTickets.html',
            controller: 'editTicketsController'
        })
         .state('editTicketsForm', {
            templateUrl: 'views/editTicketsForm.html',
            controller: 'editTicketsFormController',
            params: {ticketeditdata: null}
        })
         .state('export', {
                url: '/export',
                resolve: {
                editTickets: ['allTickets',
                    function(allTickets) {

                    return allTickets.getAllTickets();
                }]
            },
                templateUrl: 'views/export.html',
                controller: 'exportController'
        })
          .state('import', {
            url: '/import',
            templateUrl: 'views/import2.php',
            controller: 'importController'
        });

});


//Code for menu to work
app.controller('menuCtrl', function ($scope){
  var x = document.getElementById("gn-menu");
  new gnMenu(x);

//code for animatiing icons
    $scope.icon = function(enterleave){
var iconElement = document.getElementById("icon1");
if(enterleave == true){
 var options = {
        from: 'fa-bars',
        to: 'fa-arrow-right',
        animation: 'rubberBand'
    };
 iconate(iconElement, options);
}else{
 var options = {
        from: 'fa-arrow-right',
        to: 'fa-bars',
        animation: 'rubberBand'
    };
 iconate(iconElement, options);
    }
}

});

app.controller('mainController',function(){
 	$(window).load(function() {
		// Animate loader off screen
        setTimeout(function(){
            $(".loading-page").fadeOut("slow");
        }, 1100);
		
	});
});
