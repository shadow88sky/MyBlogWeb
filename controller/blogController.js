function blogController($scope, $routeParams) {
    if ($routeParams.label=="?" || !$routeParams.label) {
        init();
    }else{
        $.ajax({
            type: "get",
            url: "http://121.42.140.208:3000/blogListByLabel?label=" + $routeParams.label,
            success: function (data) {
                $scope.blogs = [];
                data.forEach(function (item) {
                    $scope.blogs.push(item.blogid);
                })
                $scope.$apply();

            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    //初始化
    function init() {
        $.ajax({
            type: "get",
            url: "http://121.42.140.208:3000/blogList",
            success: function (data) {
                $scope.blogs = data;
                $scope.$apply();
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
}