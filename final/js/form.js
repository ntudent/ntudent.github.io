$(() => {
    var time = 0
    var interval = window.setInterval(() => {
        time = +$('#countDown').text() - 1
        const root = document.documentElement
        root.style.setProperty('--top', `${time * 5}px`)
        $('#countDown').text(time)
        if (time <= 0) {
            // 時間到了，顯示遊戲失敗
            // alert('混沌No.0 : 回去吧，孩子')
            // window.close()
            clearInterval(interval)
            $('#Enter').hide()
            $('#countDownOver').show()
        }
    }, 1000)

    $('#countDownOver').on('click', () => {
        console.log('1')
        window.open('../index.html')
        window.close()
    })

    var data = 0 //遊戲次數
    $('#Enter').on('click', () => {
        console.log(++data)
        if (data == 5) {
            alert("5次失敗了，，，年輕人......回去吧。。。")
            data = 0
            window.close()
            return
        }
    })

    $('#Enter').on('click', () => {
        time = 20
        document.documentElement.style.setProperty('--top', `100px`)
        $('#countDown').text(time)

        let age = $('#inputAge').val()
        let number = $('#inputNumber').val()
        if (number > 100 || number < 1) {
            $('#output').val(number)
            return
        }
        //取出輸入資料

        let f = (number <= 100 && number >= 0) ? number * 2 : 200
        //設定輸入上下界

        let standard = Math.floor( Math.random() * f)
        //亂數設定遊戲比較基準值

        let game = parseInt(age) + parseInt(number)
        //設定遊戲值

        console.log('standard = ' + standard)
        console.log('game = ' + game)

        if (game <= standard) {
            window.open('./main.html')
        } else {
            $input = $('<input>').val('再試試看啊哈')
            $('#output').append($input)
        }
        //依照年齡，玩猜數字

    })
        

})
