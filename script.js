var maneder = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
var dager = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'];
var ider = 0;
var pass = "110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000";
//var list = document.getElementById('liste');
var iddd = 0;
var keys;

function dateDiff(date1, date2) {
    // round to the nearest whole number
    let diff = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
    if (diff == 1) {
        return `Om ${diff} dag.`;
    } else if (diff == 0) {
        return `I dag.`;
    } else if (diff <= 7 && diff >= 1) {
        return `Om ${diff} dager.`;
    } else if (diff >= 8) {
        return `Om ${diff} dager.`;
    } else {
        let diffrnc = '' + diff;
        let diffrnce = diffrnc.slice(1);
        if (diffrnce == 1) {
            return `${diffrnce} dag siden.`;
        } else {
            return `${diffrnce} dager siden.`;
        }
    }
}

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

$('#skrive').click(function() {
    let passordlogginn = prompt('Hva er passordet?');
    if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
        skriv({
            navn: prompt('Ting')
        });
    } else {
        alert('Feil passord');
        $('#checkbox').prop('checked', false);
    }
    //$('body').append('<h1>Trykket</h1>');
});

// $('#les').click(function() {
//     les({
//         navn: prompt('Navn')
//     })
// })

function skriv(input) {
    firebase.database().ref(`/handleliste/${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`).update({
        navn: input.navn
    });
    console.log('Trykket');
    alert('Trykket');
    $('#checkbox').prop('checked', false);
    location.reload();
}

function les(input) {
    firebase.database().ref(`/handleliste/${input.navn.toLowerCase()}`).once('value').then(function(snapshot) {
        $('#myTable tbody tr td ul').append(`
        <li id="${ider}" navn="${input.navn}" class="tr">
            ${cofl(snapshot.val().navn.toLowerCase())}
            <div class="btn clicked" navn="${input.navn}">Slett</div>
        </li>
        `);
        ider++;
        //$('body').append(`<br/>${cfl(input.navn.toLowerCase())} sin bilett går ut ${dager[dato.getDay()]} den ${dato.getDate()}. ${maneder[dato.getMonth()]} ${dato.getFullYear()}, om ${dateDiff(new Date(), dato)}`);
    });
}

$('document').ready(function() {
    $('li').each(function() {
        $(this).attr('text', $(this).text());
        iddd++;
    });
    console.log(`Satte attr text på ${iddd} ting`);
    refresh();
    // new SwipeOut(list, { btnText: "Slett" });
    // $('#liste li').on("delete", function(evt) {
    //     firebase.database().ref(`/handleliste/${$(this).attr('navn')}/`).set(null);
    //     refresh();
    // });
});

$('#delete').click(function() {
    let passordlogginn = prompt('Hva er passordet?');
    if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
        let delet = confirm('Er du sikker på at du vil slette?');
        if (delet == true || delet) {
            $.each($('.check:checked'), function(index) {
                console.log($(this).attr('del'));
                firebase.database().ref(`/handleliste/${$(this).attr('del')}/`).set(null);
            });
            alert('Slettet');
            location.reload();
        } else {
            alert('Sletter Ikke');
        }
    } else {
        alert('Feil passord');
    }
});

// $('.tr').onSwipe(function(results) {
//     if (results.left == true) {
//         console.log('Left');
//     } else if (results.right == true) {
//         console.log('Right')
//     } else {
//         return false;
//     }
// })

function refresh() {
    $('#myTable tbody').html(`
    <tr class="header">
        <th style="width:100%;">Handleliste</th>
    </tr>
    <tr>
        <td>
            <ul id="liste"></ul>
        </td>
    </tr>
    `);
    ider = 0;
    firebase.database().ref(`/handleliste/`).once('value').then(function(snapshot) {
        keys = Object.keys(snapshot.val());
        console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            les({
                navn: keys[i]
            });
        }
    });
    setTimeout(function() {
                let trclass = document.getElementsByClassName('tr');
                let trcount = 0;
                for (let i = 0; i < trclass.length; i++) {
                    trcount++;
                    Hammer(document.getElementById(i)).on('swipeleft', function() {
                        $(`#${i} .btn`).addClass('swiped');
                        $(`#${i} .btn`).removeClass('clicked');
                        console.log('Swiped');
                    });
                    Hammer(document.getElementById(i)).on('swiperight', function() {
                        $(`#${i} .btn`).removeClass('swiped');
                        $(`#${i} .btn`).addClass('clicked');
                        console.log('Clicked');
                    });
                    $(`#${i}`).click(function() {
                        $(`#${i} .btn`).removeClass('swiped');
                        $(`#${i} .btn`).addClass('clicked');
                        console.log('Clicked');
                    });
                    $(`#${i} .btn`).click(function() {
                                firebase.database().ref(`/handleliste/${$(`#${i} .btn`).attr('navn')}/`).set(null);
            });
        }
        console.log(`Det er ${trcount} ting med klassen tr.`);
    }, 2000)
}
// var listen = document.getElementById('listen')
// new SwipeOut(listen, { btnText: "Slett" });
// $('#listen li').on("delete", function(evt) {
//     console.log($(this).attr('text'));
// });

/*firebase.database().ref(`/handleliste/`).on('value', function(snapshot) {
    if (Object.keys(snapshot.val()).length != keys) {
        //console.log(snapshot.val());
        refresh();
    } else {
        return false;
    }
    console.log('hei');
})*/

setInterval(function() {
    //console.log('Hei');
    firebase.database().ref(`/handleliste/`).once('value').then(function(snapshot) {
        if (Object.keys(snapshot.val()).length != keys.length) {
            console.log(snapshot.val());
            refresh();
        } else {
            return false;
        }
    })
}, 10000)
