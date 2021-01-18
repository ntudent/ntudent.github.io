$(() => {
    alert('你怎麼還敢來啊')
    $('#Leave').on('click', () => {
        window.open('./form.html')
        window.close()
    })

    $('#Enter').on('click', () => {
        window.open('https://google.com/')
    })
})