var ider = 0,
    iderr = 100000;
var pass = "110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000";
var iddd = 0;
var keys, keyz;
var data, data1, data2, data3;
var clr;
var database;
//database = 'handleliste';
$('document').ready(function () {
    if (localStorage.getItem('liste') != '' && localStorage.getItem('liste') != null && localStorage.getItem('liste') != undefined) {
        database = localStorage.getItem('liste');
    } else {
        localStorage.setItem('liste', 'handleliste');
        database = 'handleliste';
    }
})
$('document').ready(function () {
    firebase.database().ref('/handleliste/').once('value').then(function (snapshot) {
        let nokler = Object.keys(snapshot.val());
        //console.log(nokler);
        $('#navcontent').html(`
        <div class="plusss">
            <input type="text" id="nyliste" placeholder="Legg til en handleliste">
            <span onclick="nyliste()">+</span>
        </div>
        <button id="slettknapp" class="fas fa-trash fa-5x" onclick="sletthandleliste()"></button>
        `);
        for (let i of nokler) {
            if (i.slice(-5) != 'kjopt') {
                $('#navcontent').append(`
                <div class="listeknapp" onclick="openliste('${i}')">${cofl(i.toLowerCase())}</div>
                `);
            }
        }
    });
});
const nyliste = () => {
    firebase.database().ref(`/handleliste/${$('#nyliste').val()}`).once('value').then(function (snapshot) {
        if (snapshot.val() != null && snapshot.val != undefined) {
            alert('Det er allerede en liste med dette navnet!');
        } else {
            lagliste($('#nyliste').val());
        }
    })
}
const lagliste = (val) => {
    database = val;
    localStorage.setItem('liste', val);
    firebase.database().ref(`/handleliste/${database}/nyliste`).update({
        color: 'f6bd60',
        navn: 'Ny Liste',
        count: 1
    });
    $.when().then(() => $('#nav').prop('checked', false)).then(() => $('#app').removeClass('blur')).then(() => setTimeout(() => refresh(), 2100));
}
const openliste = (listenavn) => {
    database = listenavn;
    localStorage.setItem('liste', listenavn)
    //$.when().then(() => $('#nav').prop('checked', false)).then(() => setTimeout(() => refresh(), 2100));
    refresh();
}
const sletthandleliste = () => {
    if (localStorage.getItem('login') == 'true') {
        let cnfrm = confirm('Er du sikker på at du vil slette denne handlelisten?');
        if (cnfrm == true) {
            firebase.database().ref(`/handleliste/${database}`).set(null);
            firebase.database().ref(`/handleliste/${database}-kjopt`).set(null);
            database = 'handleliste';
            localStorage.setItem('liste', 'handleliste');
        } else {
            alert('Sletter ikke');
        }
        refresh()
    } else {
        let logginnpass = prompt('Passord');
        if (logginnpass == binaryfrom(binaryfrom(binaryfrom(pass)))) {
            localStorage.setItem('login', 'true');
            let cnfrm = confirm('Er du sikker på at du vil slette denne handlelisten?');
            if (cnfrm == true) {
                firebase.database().ref(`/handleliste/${database}`).set(null);
                firebase.database().ref(`/handleliste/${database}-kjopt`).set(null);
                database = 'handleliste';
                localStorage.setItem('liste', 'handleliste');
            } else {
                alert('Sletter ikke');
            }
            refresh()
        }
    }
}
const hideOpenNav = () => {
    $('#nav').prop('checked', false);
    $('#app').removeClass('blur')
}
const runFuncs = (funcArr) => {
    for (let o of funcArr) {
        o();
    }
}

function disableScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

function enableScroll() {
    window.onscroll = function () {};
}

function binaryto(input) {
    let inputt = input.split('');
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

function les(input) {
    firebase.database().ref(`/handleliste/${database}/${input.navn}`).once('value').then(function (snapshot) {
        $('#liste').append(`
        <li id="${ider}" navn="${input.navn}" class="tr" style="border-left: 5px solid #${snapshot.val().color};" farg="${snapshot.val().color}" tang="${cofl(snapshot.val().navn.toLowerCase())}" count="${snapshot.val().count}">
            <div class="tingen" style="width: 90%;height: 100%;" onclick="ned(${ider})">${cofl(snapshot.val().navn.toLowerCase())}</div>
            <div class="buttnen" typ="en" navn="${input.navn}">
                <div class="tall" parentid="${ider}">${snapshot.val().count}</div>
                <div class="pluss" parentid="${ider}" onclick="pluss(${ider})">+</div>
                <div class="minus" parentid="${ider}" onclick="minus(${ider})">-</div>
            </div>
        </li>
        `);
        ider++;
    });
}

function les2(input) {
    firebase.database().ref(`/handleliste/${database}-kjopt/${input.navn}`).once('value').then(function (snapshot) {
        $('#liste2').append(`
        <li id="${iderr}" navn="${input.navn}" class="ter" style="border-left: 5px solid #${snapshot.val().color};" farg="${snapshot.val().color}" tang="${cofl(snapshot.val().navn.toLowerCase())}" count="${snapshot.val().count}">
            <div class="tingen" style="width: 90%;height: 100%;" onclick="opp(${iderr})">${cofl(snapshot.val().navn.toLowerCase())}</div>
            <div class="buttnen" typ="to" navn="${input.navn}">
                <div class="tall" parentid="${iderr}">${snapshot.val().count}</div>
                <div class="pluss" parentid="${iderr}" onclick="pluss(${iderr})">+</div>
                <div class="minus" parentid="${iderr}" onclick="minus(${iderr})">-</div>
            </div>
        </li>
        `);
        iderr++;
    });
}

function refresh() {
    $('#liste').html('');
    $('#liste2').html('');
    ider = 0;
    iderr = 100000;
    $.when().then(() => {
        $('#ikkekjopt').text(cofl(database.toLowerCase()))
    }).then(() => {
        firebase.database().ref('/handleliste/').once('value').then(function (snapshot) {
            let nokler = Object.keys(snapshot.val());
            //console.log(nokler);
            $('#navcontent').html(`
            <div class="plusss">
                <input type="text" id="nyliste" placeholder="Legg til en handleliste">
                <span onclick="nyliste()">+</span>
            </div>
            <button id="slettknapp" class="fas fa-trash fa-5x" onclick="sletthandleliste()"></button>
            `);
            for (let i of nokler) {
                if (i.slice(-5) != 'kjopt') {
                    $('#navcontent').append(`
                    <div class="listeknapp" onclick="openliste('${i}')">${cofl(i.toLowerCase())}</div>
                    `);
                }
            }
        });
    }).then(() => {
        firebase.database().ref(`/handleliste/${database}/`).once('value').then(function (snapshot) {
            if (snapshot.val() != null && snapshot.val() != undefined) {
                keys = Object.keys(snapshot.val());
                let nokler1 = keys.join('\n');
                // console.log(`Handleliste nøkler:\n\n${nokler1}\n\nData:`);
                // console.log(snapshot.val());
                for (let i = 0; i < keys.length; i++) {
                    les({
                        navn: keys[i]
                    });
                }
            }
        });
    }).then(() => {
        firebase.database().ref(`/handleliste/${database}-kjopt/`).once('value').then(function (snapshot) {
            if (snapshot.val() != null && snapshot.val() != undefined) {
                keyz = Object.keys(snapshot.val())
                let nokler2 = keyz.join('\n')
                // console.log(`Kjøpt nøkler:\n\n${nokler2}\n\nData:`);
                // console.log(snapshot.val());
                for (let i = 0; i < keyz.length; i++) {
                    les2({
                        navn: keyz[i]
                    });
                }
            }
        });
    });
}

setInterval(function () {
    refresh();
    // console.log('Laster på nytt')
}, 60000);


$('document').ready(function () {
    refresh();
});

$('#navnpating').on('input', function () {
    if ($(this).val().length != 0 && $(this).val() != '' && $(this).val() != ' ' && $(this).val() != null && $(this).val() != undefined) {
        bringUpColorSelect();
    } else {
        takeDownColorSelect();
    }
})

function bringUpColorSelect() {
    $('#colorselect').css('display', 'flex');
    window.scrollTo(0, 0);
    disableScroll();
}

function takeDownColorSelect() {
    $('#colorselect').css('display', 'none');
    enableScroll();
}

$('.en').click(function () {
    skrive('#f6bd60');
});
$('.to').click(function () {
    skrive('#fb4d3d');
});
$('.tre').click(function () {
    skrive('#6874e8');
});
$('.fire').click(function () {
    skrive('#84a59d');
});
$('.fem').click(function () {
    skrive('#f28482');
});
$('.seks').click(function () {
    skrive('#84e296');
});
$('.syv').click(function () {
    skrive('#0d5d56');
});
$('.atte').click(function () {
    skrive('#258ea6');
});
$('.ni').click(function () {
    skrive('#41393e');
});

function skrive(colr) {
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

function skriv(input) {
    clr = input.color.slice(1);
    let navnet = sanitizeHtml(input.navn, {
        allowedTags: [],
        allowedAttributes: {}
    })
    firebase.database().ref(`/handleliste/${database}/${clr}-${navnet}-${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`).update({
        navn: navnet,
        color: `${clr}`,
        count: 1
    });
    $('#checkbox').prop('checked', false);
    $('#app').removeClass('blur');
    refresh();
}

function pluss(input) {
    if (localStorage.getItem('login') == 'true') {
        $(`#${input} .buttnen .tall`).text(eval($(`#${input} .buttnen .tall`).text()) + 1);
        if (input >= 100000) {
            firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${input}`).attr('navn')}`).update({
                navn: $(`#${input}`).attr('tang'),
                color: $(`#${input}`).attr('farg'),
                count: $(`#${input} .buttnen .tall`).text()
            });
            refresh();
        } else if (input <= 999999) {
            firebase.database().ref(`/handleliste/${database}/${$(`#${input}`).attr('navn')}`).update({
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
                firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${input}`).attr('navn')}`).update({
                    navn: $(`#${input}`).attr('tang'),
                    color: $(`#${input}`).attr('farg'),
                    count: $(`#${input} .buttnen .tall`).text()
                });
                refresh();
            } else if (input <= 999999) {
                firebase.database().ref(`/handleliste/${database}/${$(`#${input}`).attr('navn')}`).update({
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




function minus(input) {
    if (localStorage.getItem('login') == 'true') {
        $(`#${input} .buttnen .tall`).text(eval($(`#${input} .buttnen .tall`).text()) - 1);
        if (input >= 100000) {
            if (eval($(`#${input} .buttnen .tall`).text()) == 0) {
                let cnfrm = confirm('Vil du slette?');
                if (cnfrm == true) {
                    firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${input}`).attr('navn')}`).set(null);
                    refresh();
                }
            } else {
                firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${input}`).attr('navn')}`).update({
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
                    firebase.database().ref(`/handleliste/${database}/${$(`#${input}`).attr('navn')}`).set(null);
                    refresh();
                }
            } else {
                firebase.database().ref(`/handleliste/${database}/${$(`#${input}`).attr('navn')}`).update({
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
                        firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${input}`).attr('navn')}`).set(null);
                        refresh();
                    }
                } else {
                    firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${input}`).attr('navn')}`).update({
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
                        firebase.database().ref(`/handleliste/${database}/${$(`#${input}`).attr('navn')}`).set(null);
                        refresh();
                    }
                } else {
                    firebase.database().ref(`/handleliste/${database}/${$(`#${input}`).attr('navn')}`).update({
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

function opp(id) {
    if (localStorage.getItem('login') == 'true') {
        firebase.database().ref(`/handleliste/${database}/${$(`#${id}`).attr('navn')}/`).update({
            navn: $(`#${id}`).attr('tang'),
            color: $(`#${id}`).attr('farg'),
            count: $(`#${id}`).attr('count')
        });
        firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${id}`).attr('navn')}/`).set(null);
        refresh();
    } else {
        let passordlogginn = prompt('Hva er passordet?');
        if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
            localStorage.setItem('login', 'true');
            firebase.database().ref(`/handleliste/${database}/${$(`#${id}`).attr('navn')}/`).update({
                navn: $(`#${id}`).attr('tang'),
                color: $(`#${id}`).attr('farg'),
                count: $(`#${id}`).attr('count')
            });
            firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${id}`).attr('navn')}/`).set(null);
            refresh();
        } else {
            alert('Feil passord');
        }
    }
}

function ned(id) {
    if (localStorage.getItem('login') == 'true') {
        firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${id}`).attr('navn')}/`).update({
            navn: $(`#${id}`).attr('tang'),
            color: $(`#${id}`).attr('farg'),
            count: $(`#${id}`).attr('count')
        });
        firebase.database().ref(`/handleliste/${database}/${$(`#${id}`).attr('navn')}/`).set(null);
        refresh();
    } else {
        let passordlogginn = prompt('Hva er passordet?');
        if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
            localStorage.setItem('login', 'true');
            firebase.database().ref(`/handleliste/${database}-kjopt/${$(`#${id}`).attr('navn')}/`).update({
                navn: $(`#${id}`).attr('tang'),
                color: $(`#${id}`).attr('farg'),
                count: $(`#${id}`).attr('count')
            });
            firebase.database().ref(`/handleliste/${database}/${$(`#${id}`).attr('navn')}/`).set(null);
            refresh();
        } else {
            alert('Feil passord');
        }
    }
}