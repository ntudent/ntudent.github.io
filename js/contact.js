$(() => {
    $('.contact').on('click', () => {
        $('iframe').attr("src", "./contact/contact.html")
    })

    $('.licensing').on('click', () => {
        $('iframe').attr("src", "./contact/license.html")
    })

    $('.reserveandinvite').on('click', () => {
        $('iframe').attr("src", "./contact/reserveandinvite.html")
    })

    $('.revandadv').on('click', () => {
        $('iframe').attr("src", "./contact/revandadv.html")
    })

    $('.sponsorandcooperate').on('click', () => {
        $('iframe').attr("src", "./contact/sponsorandcooperate.html")
    })

})
