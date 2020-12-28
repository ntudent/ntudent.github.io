$(() => {
      
    var age = $('#inputAge').val
    var number = $('#inputNumber').val  
    
    if (number === age) {    
        $('button#Enter').on('click', () => {
            window.open('./main.html')
       })
    } 
    if (number < age) {
        $('button#Enter').on('click', () => {
            var b = '再大一點'
            $('#output').val(b)
       })  
    }
    if (number > age) {
        $('button#Enter').on('click', () => {
            var b = '再小一點'
            $('#output').val(b)
       }) 
    }
    
    // 依照年齡，玩猜數字
})