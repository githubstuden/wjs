$(function () {
    // 标记是否是移动端，默认为true
    var isMobile = true
    $.ajax({
        type: 'get',
        // 如果直接请求json文件，那么Ajax也会去进行文件的读取并获取到结果
        // 结果是js对象
        url: './data/imgdata.json',
        success: function (result) {
            console.log(result)
            var width = $(window).width()
            if (width > 768) {
                isMobile = false
            } else {
                isMobile = true
            }
            // 获取数据，调用模板引擎
            var html = template('imgTemp', {
                "items": result,
                "isMobile": isMobile
            })
            console.log(html)
            $('.carousel-inner').html(html)
        }
    })

    var wrapper = $('.wjs_product .nav-tabs');
    var allList = wrapper.find('li')
    var totalWidth = 0
    allList.each(function (index, value) {
        totalWidth += $(value).innerWidth()
    })
    console.log(totalWidth);
    
    wrapper.width(totalWidth)
    var myScroll = new IScroll('.wrapper', {
        scrollX: 'true',
        scrollY: 'false'
    });

    $('[data-toggle="tooltip"]').tooltip()
})