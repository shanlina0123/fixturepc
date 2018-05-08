//60秒倒计时
var wait = 60;

function time() {
    if (wait == 0) {
        $me.removeAttr("disabled");
        $me.text("获取短信验证码");
        $me.css({
            "background": "#19aa4b",
            "border-color": "#19aa4b"
        });
        wait = 60;
    } else {
        $me.attr("disabled", true);
        $me.text("重新发送(" + wait + ")");
        $me.css({
            "background": "#ccc",
            "border-color": "#ccc"
        });
        wait--;
        setTimeout(function() {
                time()
            },
            1000)
    }
};
layui.use(['jquery', 'element', 'form'], function() {
    var $ = layui.jquery,
        element = layui.element,
        form = layui.form;
    $("#header").load('/page/pulic/head.html');
    $("#left").load('/page/pulic/left.html');
    form.render();
});