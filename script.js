var ider = 0,
    iderr = 100000;
var pass = "110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000";
//var list = document.getElementById('liste');
var iddd = 0;
var keys, keyz;
var data, data1, data2, data3;
var clr;

function binaryto(input) {
    let inputt = input.split('');
    //console.log( inputt );
    let output = [];
    for (var i = 0; i < input.length; i++) {
        output.push(inputt[i].charCodeAt(0).toString(2));
    }
    return output.join(' ');
}

function binaryfrom(input) {
    let output = input.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    return output;
}

function cofl(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function cfl(str) {
    const arrOfWords = str.split(" ");
    const arrOfWordsCased = [];

    for (let i = 0; i < arrOfWords.length; i++) {
        const word = arrOfWords[i];
        arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }

    return arrOfWordsCased.join(" ");
}

$('#label').click(function () {
    if (localStorage.getItem('login') == 'true') {
        skriv({
            navn: prompt('Ting'),
            color: prompt('Farge')
        });
    } else {
        let passordlogginn = prompt('Hva er passordet?');
        if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
            localStorage.setItem('login', 'true');
            skriv({
                navn: prompt('Ting'),
                color: prompt('Farge')
            });
        } else {
            alert('Feil passord');
            $('#checkbox').prop('checked', false);
        }
        //$('body').append('<h1>Trykket</h1>');
    }
});

// $('#les').click(function() {
//     les({
//         navn: prompt('Navn')
//     })
// })

function skriv(input) {
    if (input.color == undefined || input.color == null || input.color == '' || input.color == ' ') {
        clr = 'white';
    } else {
        clr = input.color;
    }
    firebase.database().ref(`/handleliste/${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`).update({
        navn: sanitizeHtml(input.navn, {
            allowedTags: [],
            allowedAttributes: {}
        }),
        color: clr
    });
    $('#checkbox').prop('checked', false);
    refresh();
}

function les(input) {
    firebase.database().ref(`/handleliste/${input.navn}`).once('value').then(function (snapshot) {
        $('#liste').append(`
        <li id="${ider}" navn="${input.navn}" class="tr black" style="border-left: 5px solid ${snapshot.val().color};" farg="${snapshot.val().color};background-color: white;color: black;" tang="${cofl(snapshot.val().navn.toLowerCase())}">
            <div class="tingen" style="width: 90%;height: 100%;">${cofl(snapshot.val().navn.toLowerCase())}</div>
            <div class="buttn" typ="en" navn="${input.navn}" style="width: 10%;height: 100%;">Slett</div>
        </li>
        `);
        ider++;
        //$('body').append(`<br/>${cfl(input.navn.toLowerCase())} sin bilett går ut ${dager[dato.getDay()]} den ${dato.getDate()}. ${maneder[dato.getMonth()]} ${dato.getFullYear()}, om ${dateDiff(new Date(), dato)}`);
    });
}

function les2(input) {
    firebase.database().ref(`/handleliste-ferdig/${input.navn}`).once('value').then(function (snapshot) {
        $('#liste2').append(`
        <li id="${iderr}" navn="${input.navn}" class="ter black" style="border-left: 5px solid ${snapshot.val().color};" farg="${snapshot.val().color}" tang="${cofl(snapshot.val().navn.toLowerCase())}">
            <div class="tingen" style="width: 90%;height: 100%;">${cofl(snapshot.val().navn.toLowerCase())}</div>
            <div class="buttn" typ="to" navn="${input.navn}" style="width: 10%;height: 100%;">Slett</div>
        </li>
        `);
        iderr++;
        //$('body').append(`<br/>${cfl(input.navn.toLowerCase())} sin bilett går ut ${dager[dato.getDay()]} den ${dato.getDate()}. ${maneder[dato.getMonth()]} ${dato.getFullYear()}, om ${dateDiff(new Date(), dato)}`);
    });
}

$('.buttn').click(function () {
    if ($(this).attr('typ') == 'en') {
        firebase.database().ref(`/handleliste/${$(this).attr('navn')}/`).set(null);
    } else if ($(this).attr('typ') == 'to') {
        firebase.database().ref(`/handleliste-ferdig/${$(this).attr('navn')}/`).set(null);
    } else {
        firebase.database().ref(`/handleliste/${$(this).attr('navn')}/`).set(null);
        firebase.database().ref(`/handleliste-ferdig/${$(this).attr('navn')}/`).set(null);
    }
})

$('document').ready(function () {
    $('li').each(function () {
        $(this).attr('text', $(this).text());
        iddd++;
    });
    //console.log(`Satte attr text på ${iddd} ting`);
    refresh();
    // new SwipeOut(list, { btnText: "Slett" });
    // $('#liste li').on("delete", function(evt) {
    //     firebase.database().ref(`/handleliste/${$(this).attr('navn')}/`).set(null);
    //     refresh();
    // });
});

$('#delete').click(function () {
    let passordlogginn = prompt('Hva er passordet?');
    if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
        let delet = confirm('Er du sikker på at du vil slette?');
        if (delet == true || delet) {
            $.each($('.check:checked'), function (index) {
                //console.log($(this).attr('del'));
                firebase.database().ref(`/handleliste/${$(this).attr('del')}/`).set(null);
            });
            alert('Slettet');
            refresh();
        } else {
            alert('Sletter Ikke');
        }
    } else {
        alert('Feil passord');
    }
});

// $('.tr').onSwipe(function(results) {
//     if (results.left == true) {
//         //console.log('Left');
//     } else if (results.right == true) {
//         //console.log('Right')
//     } else {
//         return false;
//     }
// })

function refresh() {
    $('#liste').html('');
    $('#liste2').html('');
    ider = 0;
    iderr = 100000;
    setTimeout(function () {
        firebase.database().ref(`/handleliste/`).once('value').then(function (snapshot) {
            if (snapshot.val() != null && snapshot.val() != undefined) {
                keys = Object.keys(snapshot.val());
                //console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    les({
                        navn: keys[i]
                    });
                }
            }
        });
        firebase.database().ref(`/handleliste-ferdig/`).once('value').then(function (snapshot) {
            if (snapshot.val() != null && snapshot.val() != undefined) {
                keyz = Object.keys(snapshot.val());
                //console.log(keyz);
                for (var i = 0; i < keyz.length; i++) {
                    les2({
                        navn: keyz[i]
                    });
                }
            }
        });
        setTimeout(function () {
            let trclass = document.getElementsByClassName('tr');
            let trcount = 0;
            for (let i = 0; i < trclass.length; i++) {
                trcount++;
                // Hammer(document.getElementById(i)).on('swipeleft', function () {
                //     $(`#${i} .btn`).addClass('swiped');
                //     $(`#${i} .btn`).removeClass('clicked');
                //     //console.log('Swiped');
                // });
                // Hammer(document.getElementById(i)).on('swiperight', function () {
                //     $(`#${i} .btn`).removeClass('swiped');
                //     $(`#${i} .btn`).addClass('clicked');
                //     //console.log('Clicked');
                // });
                // $(`#${i}`).click(function () {
                //     $(`#${i} .btn`).removeClass('swiped');
                //     $(`#${i} .btn`).addClass('clicked');
                //     //console.log('Clicked');
                // });
                $(`#${i}`).click(function () {
                    if (localStorage.getItem('login') == 'true') {
                        //localStorage.setItem('login', 'true');
                        firebase.database().ref(`/handleliste-ferdig/${$(`#${i}`).attr('navn')}/`).update({
                            navn: $(`#${i}`).attr('tang'),
                            color: $(`#${i}`).attr('farg')
                        });
                        firebase.database().ref(`/handleliste/${$(`#${i}`).attr('navn')}/`).set(null);
                        refresh();
                    } else {
                        let passordlogginn = prompt('Hva er passordet?');
                        if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
                            localStorage.setItem('login', 'true');
                            firebase.database().ref(`/handleliste/${$(`#${i} .btn`).attr('navn')}/`).set(null);
                            refresh();
                        } else {
                            alert('Feil passord');
                        }
                    }
                });
            }
            //console.log(`Det er ${trcount} ting med klassen tr.`);



            let terclass = document.getElementsByClassName('ter');
            let tercount = 99999;
            for (let i = 0; i < terclass.length; i++) {
                tercount++;
                // Hammer(document.getElementById(tercount)).on('swipeleft', function () {
                //     $(`#${tercount} .btn`).addClass('swiped');
                //     $(`#${tercount} .btn`).removeClass('clicked');
                //     //console.log('Swiped');
                // });
                // Hammer(document.getElementById(tercount)).on('swiperight', function () {
                //     $(`#${tercount} .btn`).removeClass('swiped');
                //     $(`#${tercount} .btn`).addClass('clicked');
                //     //console.log('Clicked');
                // });
                // $(`#${tercount}`).click(function () {
                //     $(`#${tercount} .btn`).removeClass('swiped');
                //     $(`#${tercount} .btn`).addClass('clicked');
                //     //console.log('Clicked');
                // });
                $(`#${tercount}`).click(function () {
                    if (localStorage.getItem('login') == 'true') {
                        //console.log($(`#${i}`).attr('ting'));
                        //localStorage.setItem('login', 'true');
                        firebase.database().ref(`/handleliste/${$(`#${tercount}`).attr('navn')}/`).update({
                            navn: $(`#${tercount}`).attr('tang'),
                            color: $(`#${tercount}`).attr('farg')
                        });
                        firebase.database().ref(`/handleliste-ferdig/${$(`#${tercount}`).attr('navn')}/`).set(null);
                        refresh();
                    } else {
                        let passordlogginn = prompt('Hva er passordet?');
                        if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
                            localStorage.setItem('login', 'true');
                            firebase.database().ref(`/handleliste/${$(`#${tercount}`).attr('navn')}/`).update({
                                navn: $(`#${tercount}`).attr('tang'),
                                color: $(`#${tercount}`).attr('farg')
                            });
                            firebase.database().ref(`/handleliste-ferdig/${$(`#${tercount}`).attr('navn')}/`).set(null);
                            refresh();
                        } else {
                            alert('Feil passord');
                        }
                    }
                });
            }
            //console.log(`Det er ${tercount - 100000} ting med klassen ter.`);
        }, 2000);
    }, 10)
}
// var listen = document.getElementById('listen')
// new SwipeOut(listen, { btnText: "Slett" });
// $('#listen li').on("delete", function(evt) {
//     //console.log($(this).attr('text'));
// });

/*firebase.database().ref(`/handleliste/`).on('value', function(snapshot) {
    if (Object.keys(snapshot.val()).length != keys) {
        //console.log(snapshot.val());
        refresh();
    } else {
        return false;
    }
    //console.log('hei');
})*/

setInterval(function () {
    //console.log('Hei');
    firebase.database().ref(`/handleliste/`).once('value').then(function (snapshot) {
        if (snapshot.val() != null && snapshot.val() != undefined) {
            if (Object.keys(snapshot.val()).length != keys.length) {
                //console.log(snapshot.val());
                refresh();
            } else {
                return false;
            }
        } else {
            return false;
        }
    });
}, 10000);

setInterval(function () {
    //console.log('Hei');
    firebase.database().ref(`/handleliste-ferdig/`).once('value').then(function (snapshot) {
        if (snapshot.val() != null && snapshot.val() != undefined) {
            if (Object.keys(snapshot.val()).length != keyz.length) {
                //console.log(snapshot.val());
                refresh();
            } else {
                return false;
            }
        } else {
            return false;
        }
    });
}, 10000);