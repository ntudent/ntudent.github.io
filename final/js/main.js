$(() => {
    $('#line_word').on('click', () => {
        window.location.reload()
    })

    var time = 0
    $('#line_word').on('mouseover', () => {
        var interval = window.setInterval(() => {
            const root = document.documentElement
            root.style.setProperty('--width', `${time * 2.5 + 320}px`)
            time += 1
            if (time > 20) {
                time = 0
                root.style.setProperty('--width', `${320}px`)
            }
        }, 100)

        $('#line_word').on('mouseout', () => {
            clearInterval(interval)
            time = 0
        })

    })  

    $('#Ground').on('click', () => {
        window.open('https://ntudent.github.io/')
    })

    $('#searchBox').keypress(function(e) {
        var key = window.event ? e.keyCode : e.which
        var search
        if (key == 13) {
            search = $('#searchBox').val()
            if (search.length != 0) {
                window.open('https://www.google.com/search?q=' + search)
                $('#searchBox').val('')
            } else {
                window.open('https://www.google.com/search?q=蔡侁甫')
                alert('你真的想搜尋嗎')
            }
        }    
    })

    //切換iframe
    $('#guideline').on('click', () => {
        $('iframe').attr("src", "./main/guideline.html")
    })
    $('#game01').on('click', () => {
        $('iframe').attr("src", "./main/game01.html")
    })
    $('#game02').on('click', () => {
        $('iframe').attr("src", "./main/game02.html")
    })
    $('#game03').on('click', () => {
        $('iframe').attr("src", "./main/game03.html")
    })
    $('#game04').on('click', () => {
        $('iframe').attr("src", "./main/game04.html")
    })
    $('#game05').on('click', () => {
        $('iframe').attr("src", "./main/game05.html")
    })
    $('#final').on('click', () => {
        $('iframe').attr("src", "./main/final.html")
    })
    $('#Card').on('click', () => {
        $('iframe').attr("src", "./main/card.html")
    })

    $('#continue01').on('click', () => {
        $('#iframe', window.parent.document).attr("src", "./main/game01.html")
        $('#game01', window.parent.document).removeAttr('disabled')
        $('#game01', window.parent.document).text('第一關:邏輯').addClass('addButton')
    })

    $('#chaos01').on('click', () => {
        //跳到那邊去
        (() => {  
            $('a[href="#showChaos01"]')[0].click()
        })()
        $('#showChaos01').show()
        
        //倒數計時
        $('#chaos01').hide()
        $('#continue01').hide()
        var timeChaos01 = 0
        var imgChaos01 = 0
        $('#imgChaos01').on('click', () => {
            console.log(++imgChaos01)
            if (imgChaos01 >= 20) {
                clearInterval(setinterval2)
                $('#chaos01').show()
                $('#continue01').show()
                $('#countDownChaos01').text('10')
                $('#showChaos01').hide()
                imgChaos01 = 0
            }
        })
        var setinterval2 = window.setInterval(() => {
            timeChaos01 = +$('#countDownChaos01').text() - 1
            $('#countDownChaos01').text(timeChaos01)
            if (timeChaos01 <= 0) {
                alert('混沌:哈哈哈你即將被抓走')
                timeChaos01 = 0
                clearInterval(setinterval2)
                // parent.window.close()
                //window.close('../main.html')
            }
        }, 1000)
    })

    var toGame02_no = 0
    var toGame02_yes1 = 0
    var toGame02_yes2 = 0
    $('#p1').on('click', () => {
        $('#hint', window.parent.document).show()
        $('#luckynumber', window.parent.document).text('錯誤')
        toGame02_no += 1
        if (toGame02_no > 1) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game01', window.parent.document).attr('disabled', 'disabled')
        }
    })
    $('#p2').on('click', () => {
        $('#hint', window.parent.document).show()
        $('#luckynumber', window.parent.document).text('正確')
        toGame02_yes1 += 1
        if (toGame02_yes1 >= 1 && toGame02_yes2 >= 1) {
            (() => {  
                $('a[href="#toGame02"]')[0].click()
            })()
            $('#toGame02').show()
            $('#luckynumber', window.parent.document).text('幸運數字 : 25 ')
            (() => {  
                $('a[href="#toGame02"]')[0].click()
            })()
        }
    })
    $('#p3').on('click', () => {
        $('#hint', window.parent.document).show()
        $('#luckynumber', window.parent.document).text('錯誤')
        toGame02_no += 1
        if (toGame02_no > 1) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game01', window.parent.document).attr('disabled', 'disabled')
        }
    })
    $('#p4').on('click', () => {
        $('#hint', window.parent.document).show()
        $('#luckynumber', window.parent.document).text('錯誤')
        toGame02_no += 1
        if (toGame02_no > 1) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game01', window.parent.document).attr('disabled', 'disabled')
        }
    })
    $('#p5').on('click', () => {
        $('#luckynumber', window.parent.document).text('正確')
        toGame02_yes2 += 1
        if (toGame02_yes1 >= 1 && toGame02_yes2 >= 1) {
            (() => {  
                $('a[href="#toGame02"]')[0].click()
            })()
            $('#toGame02').show()
            $('#luckynumber', window.parent.document).text('幸運數字 : 25 ')
            (() => {  
                $('a[href="#toGame02"]')[0].click()
            })()
        }
    })

    $('#toGame02').on('click', () => {
        $('#iframe', window.parent.document).attr("src", "./main/game02.html")
        $('#game02', window.parent.document).removeAttr('disabled')
        $('#game02', window.parent.document).text('第二關:電流急急棒').addClass('addButton')
    })

    var chanceGame03 = 0
    $('#electric').on('mouseover', () => {
        chanceGame03 = $('#chanceGame03').text() - 1
        if (chanceGame03 <= 0) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('遜')
        }
        $('#chanceGame03').text(chanceGame03)
    })

    $('#toGame03').on('click', () => {
        $('#iframe', window.parent.document).attr("src", "./main/game03.html")
        $('#game03', window.parent.document).removeAttr('disabled')
        $('#game03', window.parent.document).text('第三關:版權').addClass('addButton')
        $('#luckynumber', window.parent.document).text('幸運數字 : 25 121')
    })

    $('#toGame04_fake').on('click', () => {
        alert('餛飩(x) 混沌(o)出現')
        window.open('https://ntudent.github.io/pray.html')
        $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
        $('#game03', window.parent.document).attr('disabled', 'disabled')
        $('#game02', window.parent.document).attr('disabled', 'disabled')
        $('#game01', window.parent.document).attr('disabled', 'disabled')
        $('#luckynumber', window.parent.document).text('哈哈人生本來就有跌跌撞撞嘛')
    })

    $('#toGame04').on('click', () => {
        $('#iframe', window.parent.document).attr("src", "./main/game04.html")
        $('#game04', window.parent.document).removeAttr('disabled')
        $('#game04', window.parent.document).text('第四關:真的幸運?').addClass('addButton')
        $('#luckynumber', window.parent.document).text('幸運數字 : 25 121 15')
    })

    var inputLucky = 0
    var stringLucky = ''
    var inputTime = 0
    $('#confirm').on('click', () => {
        inputTime ++
        inputLucky = $('#inputLucky').val()
        stringLucky += inputLucky
        if (inputTime == 1) {
            stringLucky += '.0437752,'
            $('#confirm').text('第二組數字確認')
        }
        if (inputTime == 2) {
            stringLucky += '.5175546,'
            $('#confirm').text('第三組數字確認')
        }
        if (inputTime == 3) {
            stringLucky += 'z/data=!'
            $('#confirm').text('第四組數字確認')
        }
        if (inputTime == 4) {
            stringLucky += 'm5!3m4!1s0x0:0xd94f3ac02b73848a!8m2!3d25.0437752!4d121.5175546'
            $('#confirm').text('這是哪裡呢')
            $('#dent_input').show()
        }
        if (inputTime >= 5) {
            window.open('https://www.google.com.tw/maps/@' + stringLucky)
            $('#map').text('https://www.google.com.tw/maps/@')
        }
        $('#map').text('https://www.google.com.tw/maps/@' + stringLucky)
        $('#inputLucky').val('')
        console.log(stringLucky)
    })

    $('#dent_input').keypress(function(e) {
        var key = window.event ? e.keyCode : e.which
        var dent = ' '
        if (key == 13) {
            dent = $('#dent_input').val()
            console.log(dent)
            if (dent == '台大牙醫專業學院暨牙醫部') {
                $('#dent_input').hide()
                $('#last').show()
                (() => {  
                    $('a[href="#dentist"]')[0].click()
                })()
            } else {
                alert('請直接向您眼科醫生報到吧唉')
            }
        }    
    })

    $('#last').on('click', () => {
        console.log('1')
        $('#iframe', window.parent.document).attr("src", "./main/card.html")
        $('#Card', window.parent.document).removeAttr('disabled')
        $('#Card', window.parent.document).text('抽卡').addClass('addButton')
        $('#luckynumber', window.parent.document).text('這是我最後一次干擾你了 往下滑吧')
    })

    $('#lastChallenge').on('click', () => {
        window.open('https://ntudent.github.io/final/index2.html')
        //window.parent.close()
    })


    
    $('#cheat').on('click', () => {
        $('#lastChallenge', window.parent.document).show()
    })

    var toGame05_fake = 0
    $('#toGame05_fake1').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake2').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake3').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake4').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake5').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake6').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake7').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake8').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake9').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake10').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake11').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake12').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake13').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake14').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake16').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake17').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake18').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake19').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })
    $('#toGame05_fake20').on('click', () => {
        toGame05_fake += 1
        if (toGame05_fake === 2) {
            $('#luckynumber', window.parent.document).text('你根本沒那麼多時間跟錢來改變這些事')
        }
        if (toGame05_fake === 4) {
            $('#luckynumber', window.parent.document).text('不多了...真的不多了，你啊只剩1次機會，好好抉擇啊~')
        }
        if (toGame05_fake === 5) {
            $('#iframe', window.parent.document).attr("src", "./main/guideline.html")
            $('#game04', window.parent.document).attr('disabled', 'disabled')
            $('#game03', window.parent.document).attr('disabled', 'disabled')
            $('#game02', window.parent.document).attr('disabled', 'disabled')
            $('#game01', window.parent.document).attr('disabled', 'disabled')
            $('#luckynumber', window.parent.document).text('你真的沒那麼多閒資本')
            toGame05_fake = 0
        } 
    })

    $('#toGame05').on('click', () => {
        console.log('1')
        $('#iframe', window.parent.document).attr("src", "./main/game05.html")
        $('#game05', window.parent.document).removeAttr('disabled')
        $('#game05', window.parent.document).text('第五關:階級的固化').addClass('addButton')
        $('#luckynumber', window.parent.document).text('幸運數字 : 25 121 15 4')
        $('#final', window.parent.document).show()
    })

    $('#toFinal').on('click', () => {
        $('#iframe', window.parent.document).attr("src", "./main/final.html")
        $('#final', window.parent.document).removeAttr('disabled')
        $('#final', window.parent.document).text('尾聲').addClass('addButton')
        $('#Card', window.parent.document).show()
    })

    $( "#draggableTrue" ).draggable({ axis: "x" })
    $( "#draggableIn" ).draggable({ containment: "#containment-wrapper", scroll: false }) 
    var x1 = 0, y1 = 0, t1 = 0, x2 = 0, y2 = 0, t2 = 0, d = 0 
    var v_x = 0, v_y = 0
    $('#draggableIn').on('mousedown', () => {
        x1 = $('#draggableIn').offset().left
        y1 = $('#draggableIn').offset().top
        // console.log(x1 + ' ' + y1)
        d = new Date()
        t1 = d.getTime()
    }) 
    $('#draggableIn').on('mouseup', () => {
        x2 = $('#draggableIn').offset().left
        y2 = $('#draggableIn').offset().top
        // console.log(x2 + ' ' + y2)
        d = new Date()
        t2 = d.getTime()
        v_x = (parseInt(x2)-parseInt(x1)) * 1000 / (parseInt(t2)-parseInt(t1))
        v_y = (parseInt(y2)-parseInt(y1)) * 1000 / (parseInt(t2)-parseInt(t1))
        // console.log(v_x + ' ' + v_y)
        var dragTime = 0, dt = 0.05, x_pos = 0, y_pos = 0
        var int = setInterval(() => {
            dragTime ++
            x_pos = parseInt(x2) + parseFloat(v_x) * parseFloat(dt)
            y_pos = parseInt(y2) + parseFloat(v_y) * parseFloat(dt) + 0.2 * parseFloat(dragTime)
            x2 = parseInt(x_pos)
            y2 = parseInt(y_pos)
            v_x -= 10
            v_y += 100
            $('#draggableIn').offset({top:y2, left:x2})
            // const root_x = document.documentElement
            // root_x.style.setProperty('--left', `${x_pos}px`)
            console.log(x_pos)
            if (x_pos >= 900) {
                $('#draggableIn').offset({left:900})
                clearInterval(int)
                return
            }
            if (x_pos <= 50) {
                $('#draggableIn').offset({left:50})
                clearInterval(int)
                return
            }
            if (y_pos >= 300) {
                $('#draggableIn').offset({top:300})
                clearInterval(int)
                return
            }
            if (y_pos <= 100) {
                $('#draggableIn').offset({top:110})
                clearInterval(int)
                return
            }
            //缺y方向
        }, 50)
    })  
    
    $( "#draggableCard" ).draggable({ axis: "y" })
    $('#draggableCard').on('mousedown', () => {
        $('#again').hide()
    })
    var win = 0, draggableCardTop = 0
    $('#draggableCard').on('mouseup', () => {       
        draggableCardTop = $('#draggableCard').offset().top
        if (draggableCardTop >= 200) {
            $('#draggableCard').hide()
            win = Math.floor( Math.random() * 100)
            console.log(win)
            if (win == 50 ) {
                $('#Win').show()
                $('#cheat').text('最後挑戰').offset({top:300})
            } else {
                $('#again').show()
                $('#Lose').show()
            }        
        }
    })
    $('#again').on('click', () => {
        $('#Lose').hide()
        $('#draggableCard').offset({top:-draggableCardTop})
        $('#draggableCard').show()
        $('#again').hide()
    })

})
