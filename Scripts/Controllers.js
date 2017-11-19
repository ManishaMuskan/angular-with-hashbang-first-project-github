app.controller("page1Controller", function ($scope) {
    $scope.title = "Page 1 title";
    })
    .controller("page2Controller", function ($scope) {
        $scope.title = "Page 2 title ";
    })
    .controller("myController", function ($scope, $routeParams) {
        $scope.message = "Hello World";
        var learner = [{
            id:1,
            name: "Dibyanshu",
            gender: "Male"
        }, {
            id: 2,
            name: "Manisha",
            gender: "Female"
        }, {
            id: 3,
            name: "Anuradha",
            gender: "Female"
        }, {
            id: 4,
            name: "Sunny",
            gender: "Male"
        }, {
            id: 5,
            name: "Shanu",
            gender: "Male"
        }, {
            id: 6,
            name: "Gautam",
            gender: "Male"
        }, {
            id: 7,
            name: "Shefali",
            gender: "Female"
        }, {
            id: 8,
            name: "Deepti",
            gender: "Female"
        }];
        $scope.showDetails = false;
        $scope.learner = learner;
        $scope.l_id = $routeParams.id - 1;
        $scope.details = { id: 1, name: "Mani", gender: "Female" };
        $scope.mani = function (item) {
            $scope.showDetails = true;
            $scope.student = item;
        };

        //$scope.details = { id: learner[l_id].id, name: learner[l_id].name, gender: learner[l_id].gender }
    })
    .controller("DetailsController", function ($scope) {
        $scope.details = {id : 1, name:"Mani", gender:"Female"};
    })
    .controller("ApiDataController", function ($scope, $http) {
        $http.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(function (response) {
                $scope.responseData = response.data;
            });
    });