(function () {

    angular.module("LunchCheck", [])

    .controller ("LunchCheckController", function($scope) {

        $scope.reset = reset;
        $scope.checkItems = checkItems;
        
        function checkItems(items) {

            $scope.result='';
            if (!items  || 0 === items.length) {
                $scope.result = "Please enter data first"; 
                $scope.num = 0;
            }
            else {
                const words = items.split(',');                
                console.log(  words.length);
                
                var words_filtered = words.filter(function (el) {
                
                    return el &&  0 !== el.trim().length;
                });

                console.log(  "new :" + words_filtered.length);
                if (words_filtered.length >=1 && words_filtered.length <= 3) {
                    $scope.result = "Enjoy!"; 
                    console.log( words_filtered.length, $scope.result);
                }
                if (words_filtered.length  > 3) {
                    $scope.result =  "Too much"; 
                    console.log( words_filtered.length, $scope.result);
                }
            }
            
        };


        function reset() {
            //$scope.result = "";
            $scope.input= "";
            $scope.num = 0;
        }
    });


}) ();

