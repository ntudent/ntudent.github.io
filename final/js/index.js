$(() => {
    $('#Leave').on('click', () => {
        window.open('./form.html')
        window.close('./index.html')
    })

    $('#Enter').on('click', () => {
        window.open('https://google.com/')
    })
})
