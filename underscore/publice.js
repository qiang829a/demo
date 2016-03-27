Common = {};
Common.context = {};
Common.controllers = {};

var dataURL="http://cydj.idu.cn/weixin/Api/";

Common.config={
    token:window.sessionStorage.token
};
var CU = Common.CU = {
    isSucceed: function (data) {
        if (data.errorCode==22000000) {
            Common.text(data.resultMsg);
            delete window.sessionStorage.token
            location.href="login.html";
            return false;
        }else if(data.errorCode!=0){
            $("#loadingBox").hide();
            Common.text(data.resultMsg);
            return false;
        }
        return true;
    },
    dateFormat: function (date, format) {
        format = format || 'yyyy-MM-dd hh:mm:ss';
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    getSig: function (param) {
        var paramStr = [], paramStrSorted = [];
        for (var n in param) {
            paramStr.push(n);
        }
        paramStr = paramStr.sort();
        $(paramStr).each(function (index) {
            paramStrSorted.push(this + param[this]);
        });
        var text = MD5KEY + paramStrSorted.join('') + MD5KEY;
        return $.md5(text).slice(0, 30);
    }
};
Common.stringify = function (data) {
    var value = "";
    for (prop in data) {
        value += prop + "=" + data[prop] + "&";
    }
    return value.substr(0, value.length - 1);
};
Common.getRequest = function (model) {
    var URL=dataURL+model.method;
    var method=model.method;

    var models = model.params ? model.params : model;
    var req = $.extend(true, {}, Common.config);
    req.timestamp = CU.dateFormat(new Date());
    req = $.extend(true, req, models);
    return $.ajax({
        url: URL,
        type: 'GET',
        data: Common.stringify(req),
        crossDomain: true,
        dataType: 'json',
        timeout: 5000,
        statusCode: {500: function() {
            alert('500 服务器错误');
        }},
        statusCode: {404: function() {
            alert('404 服务器无法找到被请求的页面');
        }},
        error: function (x, h, r) {

        },
        success: function (data) {
        }
    });
};

Common.postRequest = function (model) {
    var URL=dataURL+model.method;
    var method=model.method;

    var models = model.params ? model.params : model;
    $.ajax({
                "type" : 'POST',
                "cache" : false,
                "url" : URL,
                "dataType" : "jsonp",
                "contentType": "application/json",
                "xhrFields" : {
                    "withCredentials" : true
                },
                "crossDomain" : true,
                "success" : function(str){
                    console.log(str)
                },
                "error" : function() {
                    alert("服务器连接错误");
                }
            });
};