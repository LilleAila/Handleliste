var ider = 0,
    iderr = 100000;
var pass = "110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000";
//var list = document.getElementById('liste');
var iddd = 0;
var keys, keyz;
var data, data1, data2, data3;
var clr;
const runFuncs = (funcArr) => {
    for (let o of funcArr) {
        //console.log(o);
        o();
    }
}
// runFuncs([() => console.log('En'), () => console.log('To'), () => console.log('Tre'), () => {
//     setTimeout(() => {
//         console.log('Fire')
//     }, 1000)
// }, () => console.log('Fem')])

const binaryto = (input) => {
    let inputt = input.split('');
    //console.log( inputt );
    let output = [];
    for (var i = 0; i < input.length; i++) {
        output.push(inputt[i].charCodeAt(0).toString(2));
    }
    return output.join(' ');
}

const binaryfrom = (input) => {
    let output = input.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    return output;
}

const cofl = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const cfl = (str) => {
    const arrOfWords = str.split(" ");
    const arrOfWordsCased = [];

    for (let i = 0; i < arrOfWords.length; i++) {
        const word = arrOfWords[i];
        arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }

    return arrOfWordsCased.join(" ");
}

const les = (input) => {
    firebase.database().ref(`/handleliste/handleliste/${input.navn}`).once('value').then((snapshot) => {
        $('#liste').append(`
        <li id="${ider}" navn="${input.navn}" class="tr" style="border-left: 5px solid #${snapshot.val().color};" farg="${snapshot.val().color}" tang="${cofl(snapshot.val().navn.toLowerCase())}" count="${snapshot.val().count}">
            <div class="tingen" style="width: 90%;height: 100%;">${cofl(snapshot.val().navn.toLowerCase())}</div>
            <div class="buttnen" typ="en" navn="${input.navn}">
                <div class="tall" parentid="${ider}">${snapshot.val().count}</div>
                <div class="pluss" parentid="${ider}" onclick="pluss(${ider})">+</div>
                <div class="minus" parentid="${ider}" onclick="minus(${ider})">-</div>
            </div>
        </li>
        `);
        ider++;
        //$('body').append(`<br/>${cfl(input.navn.toLowerCase())} sin bilett går ut ${dager[dato.getDay()]} den ${dato.getDate()}. ${maneder[dato.getMonth()]} ${dato.getFullYear()}, om ${dateDiff(new Date(), dato)}`);
    });
}

const les2 = (input) => {
    firebase.database().ref(`/handleliste/handleliste-kjopt/${input.navn}`).once('value').then((snapshot) => {
        $('#liste2').append(`
        <li id="${iderr}" navn="${input.navn}" class="ter" style="border-left: 5px solid #${snapshot.val().color};" farg="${snapshot.val().color}" tang="${cofl(snapshot.val().navn.toLowerCase())}" count="${snapshot.val().count}">
            <div class="tingen" style="width: 90%;height: 100%;">${cofl(snapshot.val().navn.toLowerCase())}</div>
            <div class="buttnen" typ="to" navn="${input.navn}">
                <div class="tall" parentid="${iderr}">${snapshot.val().count}</div>
                <div class="pluss" parentid="${iderr}" onclick="pluss(${iderr})">+</div>
                <div class="minus" parentid="${iderr}" onclick="minus(${iderr})">-</div>
            </div>
        </li>
        `);
        iderr++;
        //$('body').append(`<br/>${cfl(input.navn.toLowerCase())} sin bilett går ut ${dager[dato.getDay()]} den ${dato.getDate()}. ${maneder[dato.getMonth()]} ${dato.getFullYear()}, om ${dateDiff(new Date(), dato)}`);
    });
}

// $('.buttn').click(() => {
//     if ($(this).attr('typ') == 'en') {
//         firebase.database().ref(`/handleliste/handleliste/${$(this).attr('navn')}/`).set(null);
//     } else if ($(this).attr('typ') == 'to') {
//         firebase.database().ref(`/handleliste/handleliste-kjopt/${$(this).attr('navn')}/`).set(null);
//     } else {
//         firebase.database().ref(`/handleliste/handleliste/${$(this).attr('navn')}/`).set(null);
//         firebase.database().ref(`/handleliste/handleliste-kjopt/${$(this).attr('navn')}/`).set(null);
//     }
//     refresh();
// });

// $('document').ready(() => {
//     $('li').each(() => {
//         $(this).attr('text', $(this).text());
//         iddd++;
//     });
//     //console.log(`Satte attr text på ${iddd} ting`);
//     refresh();
//     // new SwipeOut(list, { btnText: "Slett" });
//     // $('#liste li').on("delete", (evt) => {
//     //     firebase.database().ref(`/handleliste/handleliste/${$(this).attr('navn')}/`).set(null);
//     //     refresh();
//     // });
// });

// $('#delete').click(() => {
//     let passordlogginn = prompt('Hva er passordet?');
//     if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
//         let delet = confirm('Er du sikker på at du vil slette?');
//         if (delet == true || delet) {
//             $.each($('.check:checked'), (index) => {
//                 //console.log($(this).attr('del'));
//                 firebase.database().ref(`/handleliste/handleliste/${$(this).attr('del')}/`).set(null);
//             });
//             alert('Slettet');
//             refresh();
//         } else {
//             alert('Sletter Ikke');
//         }
//     } else {
//         alert('Feil passord');
//     }
// });

// $('.tr').onSwipe((results) => {
//     if (results.left == true) {
//         //console.log('Left');
//     } else if (results.right == true) {
//         //console.log('Right')
//     } else {
//         return false;
//     }
// })

const refresh = () => {
    $('#liste').html('');
    $('#liste2').html('');
    ider = 0;
    iderr = 100000;
    //setTimeout(() => {
    $.when().then(() => {
        firebase.database().ref(`/handleliste/handleliste/`).once('value').then((snapshot) => {
            if (snapshot.val() != null && snapshot.val() != undefined) {
                keys = Object.keys(snapshot.val());
                let nokler1 = keys.join('\n');
                //console.log(snapshot.val());
                console.log(`Handleliste nøkler:\n\n${nokler1}\n\nData:`);
                console.log(snapshot.val());
                for (let i = 0; i < keys.length; i++) {
                    les({
                        navn: keys[i]
                    });
                }
            }
        });
    }).then(() => {
        firebase.database().ref(`/handleliste/handleliste-kjopt/`).once('value').then((snapshot) => {
            if (snapshot.val() != null && snapshot.val() != undefined) {
                keyz = Object.keys(snapshot.val())
                let nokler2 = keyz.join('\n')
                //console.log(snapshot.val())
                console.log(`Kjøpt nøkler:\n\n${nokler2}\n\nData:`);
                console.log(snapshot.val());
                for (let i = 0; i < keyz.length; i++) {
                    les2({
                        navn: keyz[i]
                    });
                }
            }
        });
    }).then(() => {
        //setTimeout(() => {
        let trclass = document.getElementsByClassName('tr');
        let trcount = 0;
        for (let i = 0; i < trclass.length; i++) {
            trcount++;
            // Hammer(document.getElementById(i)).on('swipeleft',() => {
            //     $(`#${i} .btn`).addClass('swiped');
            //     $(`#${i} .btn`).removeClass('clicked');
            //     //console.log('Swiped');
            // });
            // Hammer(document.getElementById(i)).on('swiperight', () => {
            //     $(`#${i} .btn`).removeClass('swiped');
            //     $(`#${i} .btn`).addClass('clicked');
            //     //console.log('Clicked');
            // });
            // $(`#${i}`).click(() => {
            //     $(`#${i} .btn`).removeClass('swiped');
            //     $(`#${i} .btn`).addClass('clicked');
            //     //console.log('Clicked');
            // });
            $(`#${i} .tingen`).click(() => {
                if (localStorage.getItem('login') == 'true') {
                    //localStorage.setItem('login', 'true');
                    firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${i}`).attr('navn')}/`).update({
                        navn: $(`#${i}`).attr('tang'),
                        color: $(`#${i}`).attr('farg'),
                        count: $(`#${i}`).attr('count')
                    });
                    firebase.database().ref(`/handleliste/handleliste/${$(`#${i}`).attr('navn')}/`).set(null);
                    refresh();
                } else {
                    let passordlogginn = prompt('Hva er passordet?');
                    if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
                        localStorage.setItem('login', 'true');
                        firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${i}`).attr('navn')}/`).update({
                            navn: $(`#${i}`).attr('tang'),
                            color: $(`#${i}`).attr('farg'),
                            count: $(`#${i}`).attr('count')
                        });
                        firebase.database().ref(`/handleliste/handleliste/${$(`#${i}`).attr('navn')}/`).set(null);
                        refresh();
                    } else {
                        alert('Feil passord');
                    }
                }
            });
            $(`#${i} .buttn`).click(() => {
                if (localStorage.getItem('login') == 'true') {
                    firebase.database().ref(`/handleliste/handleliste/${$(`#${i}`).attr('navn')}/`).set(null);
                    refresh();
                } else {
                    let passordlogginn = prompt('Hva er passordet?');
                    if (passordloggin == binaryfrom(binaryfrom(binaryfrom(pass)))) {
                        localStorage.setItem('login', 'true');
                        firebase.database().ref(`/handleliste/handleliste/${$(`#${i}`).attr('navn')}/`).set(null);
                        refresh();
                    }
                }
            });
        }
        //console.log(`Det er ${trcount} ting med klassen tr.`);



        let terclass = document.getElementsByClassName('ter');
        let tercount = 99999;
        for (let i = 0; i < terclass.length; i++) {
            tercount++;
            // Hammer(document.getElementById(tercount)).on('swipeleft', () => {
            //     $(`#${tercount} .btn`).addClass('swiped');
            //     $(`#${tercount} .btn`).removeClass('clicked');
            //     //console.log('Swiped');
            // });
            // Hammer(document.getElementById(tercount)).on('swiperight', () => {
            //     $(`#${tercount} .btn`).removeClass('swiped');
            //     $(`#${tercount} .btn`).addClass('clicked');
            //     //console.log('Clicked');
            // });
            // $(`#${tercount}`).click(() => {
            //     $(`#${tercount} .btn`).removeClass('swiped');
            //     $(`#${tercount} .btn`).addClass('clicked');
            //     //console.log('Clicked');
            // });
            $(`#${tercount} .tingen`).click(() => {
                if (localStorage.getItem('login') == 'true') {
                    //console.log($(`#${i}`).attr('ting'));
                    //localStorage.setItem('login', 'true');
                    firebase.database().ref(`/handleliste/handleliste/${$(`#${tercount}`).attr('navn')}/`).update({
                        navn: $(`#${tercount}`).attr('tang'),
                        color: $(`#${tercount}`).attr('farg'),
                        count: $(`#${tercount}`).attr('count')
                    });
                    firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${tercount}`).attr('navn')}/`).set(null);
                    refresh();
                } else {
                    let passordlogginn = prompt('Hva er passordet?');
                    if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
                        localStorage.setItem('login', 'true');
                        firebase.database().ref(`/handleliste/handleliste/${$(`#${tercount}`).attr('navn')}/`).update({
                            navn: $(`#${tercount}`).attr('tang'),
                            color: $(`#${tercount}`).attr('farg'),
                            count: $(`#${tercount}`).attr('count')
                        });
                        firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${tercount}`).attr('navn')}/`).set(null);
                        refresh();
                    } else {
                        alert('Feil passord');
                    }
                }
            });
        }
        //console.log(`Det er ${tercount - 100000} ting med klassen ter.`);
    });
    //}, 1500);
    //}, 10)
}
// var listen = document.getElementById('listen')
// new SwipeOut(listen, { btnText: "Slett" });
// $('#listen li').on("delete", (evt) => {
//     //console.log($(this).attr('text'));
// });

/*firebase.database().ref(`/handleliste/handleliste/`).on('value', (snapshot) => {
    if (Object.keys(snapshot.val()).length != keys) {
        //console.log(snapshot.val());
        refresh();
    } else {
        return false;
    }
    //console.log('hei');
})*/

setInterval(() => {
    refresh();
    console.log('Laster på nytt')
}, 60000);


$('document').ready(() => {
    refresh();
});

$('#navnpating').on('input', () => {
    if ($(this).val().length != 0 && $(this).val() != '' && $(this).val() != ' ' && $(this).val() != null && $(this).val() != undefined) {
        //console.log('changed and more than 0 characters!');
        bringUpColorSelect();
    } else {
        takeDownColorSelect();
    }
})

const bringUpColorSelect = () => {
    $('#colorselect').css('display', 'flex');
}

const takeDownColorSelect = () => {
    $('#colorselect').css('display', 'none');
}

// $('#label').click(() {
//     if (localStorage.getItem('login') == 'true') {
//         skrive();
//     } else {
//         let passordlogginn = prompt('Hva er passordet?');
//         if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
//             localStorage.setItem('login', 'true');
//             skrive();
//         } else {
//             alert('Feil passord');
//             //$('#checkbox').prop('checked', false);
//         }
//         //$('body').append('<h1>Trykket</h1>');
//     }
// });

$('.en').click(() => {
    skrive('#f6bd60');
});
$('.to').click(() => {
    skrive('#fb4d3d');
});
$('.tre').click(() => {
    skrive('#6874e8');
});
$('.fire').click(() => {
    skrive('#84a59d');
});
$('.fem').click(() => {
    skrive('#f28482');
});
$('.seks').click(() => {
    skrive('#84e296');
});
$('.syv').click(() => {
    skrive('#0d5d56');
});
$('.atte').click(() => {
    skrive('#258ea6');
});
$('.ni').click(() => {
    skrive('#41393e');
});

const skrive = (colr) => {
    if (localStorage.getItem('login') == 'true') {
        skriv({
            navn: $('#navnpating').val(),
            color: colr
        });
        takeDownColorSelect();
        $('#navnpating').val('');
    } else {
        let confirm = prompt('Passord');
        if (confirm == binaryfrom(binaryfrom(binaryfrom(pass)))) {
            localStorage.setItem('login', 'true');
            skriv({
                navn: $('#navnpating').val(),
                color: colr
            });
            takeDownColorSelect();
            $('#navnpating').val('');
        } else {
            alert('Feil Passord!')
        }
    }
}

const skriv = (input) => {
    clr = input.color.slice(1);
    let navnet = sanitizeHtml(input.navn, {
        allowedTags: [],
        allowedAttributes: {}
    })
    firebase.database().ref(`/handleliste/handleliste/${clr}-${navnet}-${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`).update({
        navn: navnet,
        color: `${clr}`,
        count: 1
    });
    $('#checkbox').prop('checked', false);
    refresh();
}

const pluss = (input) => {
    if (localStorage.getItem('login') == 'true') {
        $(`#${input} .buttnen .tall`).text(eval($(`#${input} .buttnen .tall`).text()) + 1);
        if (input >= 100000) {
            firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${input}`).attr('navn')}`).update({
                navn: $(`#${input}`).attr('tang'),
                color: $(`#${input}`).attr('farg'),
                count: $(`#${input} .buttnen .tall`).text()
            });
            refresh();
        } else if (input <= 999999) {
            firebase.database().ref(`/handleliste/handleliste/${$(`#${input}`).attr('navn')}`).update({
                navn: $(`#${input}`).attr('tang'),
                color: $(`#${input}`).attr('farg'),
                count: $(`#${input} .buttnen .tall`).text()
            });
            refresh();
        }
    } else {
        let logginn = prompt('Passord');
        if (logginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
            localStorage.setItem('login', 'true');
            $(`#${input} .buttnen .tall`).text(eval($(`#${input} .buttnen .tall`).text()) + 1);
            if (input >= 100000) {
                firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${input}`).attr('navn')}`).update({
                    navn: $(`#${input}`).attr('tang'),
                    color: $(`#${input}`).attr('farg'),
                    count: $(`#${input} .buttnen .tall`).text()
                });
                refresh();
            } else if (input <= 999999) {
                firebase.database().ref(`/handleliste/handleliste/${$(`#${input}`).attr('navn')}`).update({
                    navn: $(`#${input}`).attr('tang'),
                    color: $(`#${input}`).attr('farg'),
                    count: $(`#${input} .buttnen .tall`).text()
                });
                refresh();
            }
        } else {
            alert('Feil passord');
        }
    }
}




const minus = (input) => {
    if (localStorage.getItem('login') == 'true') {
        $(`#${input} .buttnen .tall`).text(eval($(`#${input} .buttnen .tall`).text()) - 1);
        if (input >= 100000) {
            if (eval($(`#${input} .buttnen .tall`).text()) == 0) {
                let cnfrm = confirm('Vil du slette?');
                if (cnfrm == true) {
                    firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${input}`).attr('navn')}`).set(null);
                    refresh();
                }
            } else {
                firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${input}`).attr('navn')}`).update({
                    navn: $(`#${input}`).attr('tang'),
                    color: $(`#${input}`).attr('farg'),
                    count: $(`#${input} .buttnen .tall`).text()
                });
                refresh();
            }
        } else if (input <= 999999) {
            if (eval($(`#${input} .buttnen .tall`).text()) == 0) {
                let cnfrm = confirm('Vil du slette?');
                if (cnfrm == true) {
                    firebase.database().ref(`/handleliste/handleliste/${$(`#${input}`).attr('navn')}`).set(null);
                    refresh();
                }
            } else {
                firebase.database().ref(`/handleliste/handleliste/${$(`#${input}`).attr('navn')}`).update({
                    navn: $(`#${input}`).attr('tang'),
                    color: $(`#${input}`).attr('farg'),
                    count: $(`#${input} .buttnen .tall`).text()
                });
                refresh();
            }
        }
    } else {
        let logginn = prompt('Passord');
        if (logginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
            localStorage.setItem('login', 'true');
            $(`#${input} .buttnen .tall`).text(eval($(`#${input} .buttnen .tall`).text()) - 1);
            if (input >= 100000) {
                if (eval($(`#${input} .buttnen .tall`).text()) == 0) {
                    let cnfrm = confirm('Vil du slette?');
                    if (cnfrm == true) {
                        firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${input}`).attr('navn')}`).set(null);
                        refresh();
                    }
                } else {
                    firebase.database().ref(`/handleliste/handleliste-kjopt/${$(`#${input}`).attr('navn')}`).update({
                        navn: $(`#${input}`).attr('tang'),
                        color: $(`#${input}`).attr('farg'),
                        count: $(`#${input} .buttnen .tall`).text()
                    });
                    refresh();
                }
            } else if (input <= 999999) {
                if (eval($(`#${input} .buttnen .tall`).text()) == 0) {
                    let cnfrm = confirm('Vil du slette?');
                    if (cnfrm == true) {
                        firebase.database().ref(`/handleliste/handleliste/${$(`#${input}`).attr('navn')}`).set(null);
                        refresh();
                    }
                } else {
                    firebase.database().ref(`/handleliste/handleliste/${$(`#${input}`).attr('navn')}`).update({
                        navn: $(`#${input}`).attr('tang'),
                        color: $(`#${input}`).attr('farg'),
                        count: $(`#${input} .buttnen .tall`).text()
                    });
                    refresh();
                }
            }
        } else {
            alert('Feil passord');
        }
    }
}