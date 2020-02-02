
window.onload = function () {
    let click = document.querySelector('.click>ul');
    let imgGroup = document.querySelector('#imgGroup');
    let lis = document.querySelectorAll('.lb-item');
    let screen = document.querySelector('.screen')
    //  创造一个全局变量,来存数值下标
    let nums = 0;
    // 点击图片移动大图
    for (let i = 0; i < click.children.length; i++) {
        click.children[i].onclick = lilist;
        // 在页码里面添加动态新数值
        click.children[i].setAttribute('data-pl', i);

    }
    let i = 0;
    // 创建小li点击函数---起优化作用
    let bushu = 0;
    function lilist() {
        //   获取li的下标
        nums = this.getAttribute('data-pl');
        i = nums;
        // 计算每一步的距离
        bushu = -nums * screen.offsetWidth;
        // 调用动漫函数
        moveSlow(imgGroup, bushu);
    }

    let timeID = setInterval(function () {
        i++;
        if (i == 4) {
            imgGroup.style.left = 0 + 'px';
            i = 1;
        }
        moveSlow(imgGroup, -screen.offsetWidth * i);
    }, 3000);




    // 缓动运动函数
    function moveSlow(eleObj, targetPos) {
        // 思路：每次 的 步长 不一样： 目标位置 - 当前位置 / 10

        // 0.1先 尝试 将 dom对象上的 timerId取出，如果 不为空，则 停止改id对应的计时器
        if (eleObj.timerId != undefined) {
            clearInterval(eleObj.timerId);
        }

        // 0.3再启动一个新的 计时器，并将 计时器id　存入dom对象的timerId属性
        eleObj.timerId = setInterval(function () {
            //1.获取 当前元素 的位置 ，offsetLeft 获取的 位置数值 不包含小数
            let curPos = eleObj.offsetLeft; // 783
            //2.设置并 移动 缓动步长 : (目标位置 - 当前位置) / 10
            //  注意：
            //      如果 是向右移动，则使用 Math.ceil()  向上取整 ，最后几步 步长为 1px
            //      如果 是向左移动，则使用 Math.floor() 向下取整 ，最后几步 步长为 -1px

            let step = (targetPos - curPos) / 15;
            // 根据方向 使用不同方法 取整           1                   -1
            step = curPos < targetPos ? Math.ceil(step) : Math.floor(step);
            eleObj.style.left = curPos + step + 'px'; //

            //3.边界检查：检查 是否 到达 目标位置
            if (eleObj.offsetLeft == targetPos) {
                //3.1 停止计时器
                clearInterval(eleObj.timerId);
            }
        }, 20);
    }

    screen.onmouseover = function () {
        // 停止计时器
        clearInterval(timeID);
    }
    
    screen.onmouseout = function () {
        timeID = setInterval(function () {
            i++;
            if (i == 4) {
                imgGroup.style.left = 0 + 'px';
                i = 1;
            }
            moveSlow(imgGroup, -screen.offsetWidth * i);
        }, 3000);
    };
};
