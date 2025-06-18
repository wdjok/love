document.addEventListener('DOMContentLoaded', function() {
    // 获取 html 元素的 background-image 属性
    var html = document.documentElement;
    var style = window.getComputedStyle(html);
    var bg = style.backgroundImage;
    var match = bg.match(/url\(["']?(.*?)["']?\)/);
    if (match && match[1]) {
        var img = new window.Image();
        img.onload = function() {
            var wrapper = document.getElementById('wrapper');
            if (wrapper) {
                wrapper.style.visibility = 'visible';
            }
        };
        img.src = match[1];
    } else {
        // 没有背景图，直接显示
        var wrapper = document.getElementById('wrapper');
        if (wrapper) {
            wrapper.style.visibility = 'visible';
        }
    }
});