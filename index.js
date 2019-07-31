$(function() {
    $.snowfall.start({
        content: '<i class="fa fa-snowflake-o"></i>'
    });
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        alphabetBoxSize = ((Math.random() * 100) + 50).toFixed(),
        counter = -1,
        score = 0,
        i = 0,
        colorCode = 0,
        alphabetLength = 1,
        bgColorList = ['#FF5733', '#A89D9B', '#9A230D', '#1083F5', '#162738', '#CCE613', '#566109', '#08C31C', '#09DAD4', '#0B2DE8', '#BA0AF3', '#F30A5B', '#F30A0A'];

    function showAlphabetElms() {
        var posx = (Math.random() * (windowWidth - alphabetBoxSize)).toFixed(),
            posy = (Math.random() * (windowHeight - alphabetBoxSize)).toFixed(),
            alphabet = makeRandomAlphabet(alphabetLength);

        counter++;
        if (colorCode == 12)
            colorCode = 0;
        $('.alphabets-area').append('<div class="alphabet-round-box alphabet-round-box-' + counter + '">' + alphabet + '</div>');
        $(document).find('.alphabet-round-box-' + counter + '').css({
            background: '' + bgColorList[colorCode] + ' no-repeat',
            top: '' + posy + 'px',
            left: '' + posx + 'px'
        });
        colorCode++;
    };

    function makeRandomAlphabet(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    $(document).on('click', '#btn-start', function() {
        $(this).hide();
        showAlphabetElms();
        var intervalId = setInterval(function() {
            showAlphabetElms()
            i++;
        }, 1000);
    });

    $(document).on('keypress', function(e) {
        var charCode = e.charCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {
            var alphabets = $(document).find('.alphabet-round-box');
            for (var i = 0; i < alphabets.length; i++) {
                if ($(alphabets[i]).text() == (e.key).toUpperCase()) {
                    $(alphabets[i]).remove().fadeOut();
                    score += 5;
                    $('.score').text(score);
                }
            }
        }
    });
    $.snowfall.start({
        size: {
            min: 10,
            max: 20
        },
        color: '#214704',
        content: '&#10030;'
    });
    $.snowfall.start({
        interval: 10,
        disappear: 'linear'
    });
});