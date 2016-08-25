app.directive("customSort", function() {
return {
    restrict: 'A',
    transclude: true,
    scope: {
      order: '=',
      sort: '='
    },
    template :
      ' <a ng-click="sort_by(order)" style="color: #222222;text-decoration:none;font-weight:600;cursor:pointer;">'+
      '    <span ng-transclude></span>'+
      '    <i ng-class="selectedCls(order)"></i>'+
      '</a>',
    link: function(scope) {

    // change sorting order
    scope.sort_by = function(newSortingOrder) {
        var sort = scope.sort;

        if (sort.sortingOrder == newSortingOrder){
            sort.reverse = !sort.reverse;
        }

        sort.sortingOrder = newSortingOrder;
    };


    scope.selectedCls = function(column) {
        if(column == scope.sort.sortingOrder){
            return ('fa fa-sort-' + ((scope.sort.reverse) ? 'desc' : 'asc'));
        }
        else{
            return'fa fa-sort'
        }
    };
  }// end link
}
});
