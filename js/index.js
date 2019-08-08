window.addEventListener('load', loaded);

function loaded() {
    var bScroll = new BScroll('.left', {
        scrollY: true,
        click: true
    });

    var bscrall = new BScroll('.right-top', {
        scrollX: true,
        click: true
    })

    var bScrbll = new BScroll('.right-bottom', {
        scrollY: true,
        click: true
    });

    // 内容大盒子
    var leftUl = document.getElementById('leftcontent');
    var topR = document.getElementById('topR');
    var botR = document.getElementById('botR');
    // var leftLi = document.querySelectorAll('#leftcontent>li');
    // console.log(leftLi)

    var idx = 0;

    function initMenu(data, site, callBack) {
        var lis = '';
        for (var i = 0; i < data.length; i++) {
            lis += `<li class="${i === 0 ? 'cur' : ''}" data-index=${i}>${data[i].name}</li>`
        }

        site.innerHTML = lis;

        callBack && callBack();

    }

    // callBack 回调函数
    initMenu(lMenuData, leftUl, function () {
        // clic();
        leftUl.onclick = function (e) {
            if (e.target.nodeName === 'LI') {
                for (var j = 0; j < leftUl.children.length; j++) {
                    leftUl.children[j].classList = '';
                }
                e.target.classList.add('cur');
                iniView(rConData[e.target.dataset.index].menuInfo, topR, function () {
                    obcli();
                    righttop.onclick = function (e) {
                        if (e.target.nodeName === 'LI') {
                            console.log(e.target.index)
                            bScrbll.scrollToElement(tit[e.target.index], 1000);
                        }
                    }
                });
                iniCont(rConData[e.target.dataset.index].cellList, botR, function () {

                });
            
            }
        }

    });


    function clic() {
        leftUl.onclick = function (e) {
            var target = e.target;
            if (target.nodeName === 'LI') {
                for (var j = 0; j < leftUl.children.length; j++) {
                    leftUl.children[j].classList = '';
                }
                target.classList.add('cur')
                console.log(target.dataset.index);
            }
        }
    }


    function iniView(data, site, callBack) {
        var lis = '';
        for (var i = 0; i < data.length; i++) {
            lis += `<li class="${i === 0 ? 'active' : ''}">${data[i].name}</li>`
        }

        site.innerHTML = lis;

        callBack && callBack();
    }

    iniView(rConData[idx].menuInfo, topR, function () {
        obcli();
        righttop.onclick = function (e) {
            if (e.target.nodeName === 'LI') {
                console.log(e.target.index)
                bScrbll.scrollToElement(tit[e.target.index], 1000);
            }
        }
    });

    // 点击出对应内容
    function obcli() {
        topR.onclick = function (e) {
            var target = e.target;
            if (target.nodeName === 'LI') {
                for (var j = 0; j < topR.children.length; j++) {
                    topR.children[j].classList = '';
                }
                target.classList.add('active')
            }
        }
    }


    // 渲染右边下边的内容
    function iniCont(data, site, callBack) {
        var div = '';
        for (var o = 0; o < data.length; o++) {
            div += `<ul><p class="tit">${data[o].title}</p><li>`;
            for (var c = 0; c < data[o].list.length; c++) {
                var tata = data[o].list[c];
                div += `<dl>
                <dt>
                    <img src="images/1.png" alt="">
                </dt>
                <dd>
                    <p>${tata.name}</p>
                    <p style="color: rgb(151, 150, 150);">${tata.subtitle}</p>
                    <div>
                        <div>
                            <p style="color: #FF4891;">￥${tata.vip.price}</p>
                            <p style="color: rgb(151, 150, 150);">￥${tata.noVip.price}</p>
                        </div>
                        <div>
                            <div class="imgs" id="imgs">
                                <img src="images/2.png" alt="">
                            </div>
                            <div class="comp">
                                <div id="sub" class="sub">一</div>
                                <span class="num">1</span>
                                <div id="add" class="iconfont icon-jia add"></div>
                            </div>
                        </div>
                    </div>
                </dd>
            </dl>`
            }
            div += `</li></ul>`
        }
        site.innerHTML = div;

        callBack && callBack();
    }

    iniCont(rConData[idx].cellList, botR, function () {

    });


    // 加减大盒子
    var comp = document.querySelectorAll('.comp');
    // 减号
    var sub = document.querySelectorAll('.sub');
    // 加号
    var add = document.querySelectorAll('.add');
    // 加减后的数量
    var num = document.getElementsByClassName('num');
    // 购物车外包盒子
    var imgs = document.querySelectorAll('.imgs');
    // right-top 横着的li
    var lis = document.querySelectorAll('.top-content>ul>li');
    // right-bottom 里的li
    var li = document.querySelectorAll('.right-bottom>div>ul>li');
    // 标题
    var tit = document.getElementsByClassName('tit');
    console.log(tit)




// 加减
    for (var i = 0; i < comp.length; i++) {
        (function (k) {
            imgs[k].onclick = function () {
                console.log(1)
                imgs[k].style.display = "none";
                comp[k].style.display = "flex";
            }
            sub[k].onclick = function () {
                var val = num[k].innerText;
                if (val - 1 <= 0) {
                    imgs[k].style.display = "block";
                    comp[k].style.display = "none";
                } else {
                    val--;
                    num[k].innerText = val;
                }
            }
            add[k].onclick = function () {
                var val = num[k].innerText;
                val++;
                num[k].innerText = val;
            }
        })(i)
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
    }
    // righttop.onclick = function (e) {
    //     if (e.target.nodeName === 'LI') {
    //         console.log(e.target.index)
    //         bScrbll.scrollToElement(li[e.target.index], 1000);
    //     }

    // }

}
