$(() => {
    $('.background').on('click', () => {
        $('iframe').attr("src", "./exp/background.html")
    })

    $('.science').on('click', () => {
        $('iframe').attr("src", "./exp/science.html")
    })

    $('.society').on('click', () => {
        $('iframe').attr("src", "./exp/society.html")
    })

    $('.dentistry').on('click', () => {
        $('iframe').attr("src", "./exp/dentistry.html")
    })

    $('.thought').on('click', () => {
        $('iframe').attr("src", "./exp/thought.html")
    })

})
