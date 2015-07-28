function consumeCreate() {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:3000/consumeCreate",
        data: {
            "name": "xc",
            "goods": "超市",
            "money": 32,
            "createtime": Date.parse(new Date())
        },
        success: function (data) {
            console.log(data);
        },
        error: function (err, a, x) {
            console.log(err);
            console.log(a);
            console.log(x);
        }
    });
};