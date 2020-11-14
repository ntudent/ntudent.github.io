$(() => {
    $('.background').on('click', () => {
        $('iframe').attr("src", "./exp/background.html")
    })

    $('.competition').on('click', () => {
        $('iframe').attr("src", "./exp/competition.html")
    })

    $('.scienceexhibition').on('click', () => {
        $('iframe').attr("src", "./exp/scienceexhibition.html")
    })

    $('.studentassociation').on('click', () => {
        $('iframe').attr("src", "./exp/studentassociation.html")
    })

    $('.thought').on('click', () => {
        $('iframe').attr("src", "./exp/thought.html")
    })

    $('.workandskill').on('click', () => {
        $('iframe').attr("src", "./exp/workandskill.html")
    })
})