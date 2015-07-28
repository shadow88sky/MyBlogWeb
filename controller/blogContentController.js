function blogContentController($scope,$routeParams){
    $.ajax({
        type: "get",
        url: "http://121.42.140.208:3000/blogContent?id=" + $routeParams.id,
        success: function (data) {
            $scope.blog = data;
            $("#cnblogs_post_body").html(data.content);
            $scope.$apply();
        },
        error: function (err) {
            console.log(err);
        }
    });
}