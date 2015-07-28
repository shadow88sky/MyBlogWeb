function consumeController($scope) {
    //初始化
    function init() {
        var dateFrom = $("#dateFrom").val();
        var dateEnd = $("#dateEnd").val();
        $.ajax({
            type: "get",
            url: "http://121.42.140.208:3000/consumeList?dateFrom=" + dateFrom + "&dateEnd=" + dateEnd,
            success: function (data) {
                $scope.consume = data;
                $scope.sum = 0;
                if (data) {
                    for (var i = 0; i < data.length; i++) {
                        $scope.sum += data[i].money;
                    }
                }
                $scope.$apply();
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    init();
    //查询方法
    $scope.search = function () {
        init();
    }
    //新增弹出对话框
    $scope.add = function () {
        easyDialog.open({
            container: 'create',
            fixed: false,
            cache: false
        });
    }
    //消费人选择下拉框
    $scope.consumeMan = [
        {id: 1, name: '晨'},
        {id: 2, name: '蒋'}
    ];

    //表单取消
    $scope.cancel = function () {
        easyDialog.close();
        $scope.manSelect = null;
        $("#goods").val("");
        $("#money").val("");
        $("#createtime").val("");
    }

    //提交数据
    $scope.submit = function () {
        if(!$scope.manSelect || !$("#goods").val() || !$("#money").val() || !$("#createtime").val()){
            alert("请填写完整资料");
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://121.42.140.208:3000/consumeCreate",
            data: {
                "name": $scope.manSelect,
                "goods": $("#goods").val(),
                "money": $("#money").val(),
                "createtime": Date.parse($("#createtime").val())
            },
            success: function (data) {
                easyDialog.close();
                $scope.manSelect = null;
                $("#goods").val("");
                $("#money").val("");
                $("#createtime").val("");
                init();
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    //日期转时间戳
    function transdate(dateStr) {
        var newstr = dateStr.replace(/-/g,'/');
        var date =  new Date(newstr);
        var time_str = date.getTime().toString();
        return time_str.substr(0, 10);
    }

    //删除
    $scope.delete = function(id){
        $.ajax({
            type: "POST",
            url: "http://121.42.140.208:3000/consumeDelete",
            data: {
                _id:id
            },
            success: function (data) {
                init();
            },
            error: function (err) {
                alert("删除失败");
            }
        });
    }
}