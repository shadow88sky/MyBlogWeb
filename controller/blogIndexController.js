function blogIndexController($scope) {
    //初始化
    function init() {
        $.ajax({
            type: "get",
            url: "http://121.42.140.208:3000/labelList",
            success: function (data) {
                $scope.labels = data;
                $scope.$apply();
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    init();

    //锚点平滑跳转
    $(".nav li a").bind('click', function () {
        if ($(this).hasClass('active') || !$(this).attr('ref')) {
            return;
        } else {
            $(".nav li a").removeClass('active');
        }
        $(this).addClass('active');
        $("html,body").animate({scrollTop: $($(this).attr('ref')).offset().top}, 500)
    })
}