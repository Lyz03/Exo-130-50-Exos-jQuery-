// part 1
const checkbox = $('#checkbox');

checkbox.click(function () {
    this.toggleAttribute('checked');
})

$('input[type=submit]').click(function () {
    if (checkbox[0].hasAttribute('checked'))
        alert('envoyé')
    else
        alert('veuillez cocher le case');
})

//TODO part 2 !!!!!

// part 3
$('span').click(function () {
    for (let i = 0; i < 4; i++) {
        setTimeout(function () {
            $('span').fadeToggle();
        }, 1000)
    }
});

// part 4
$('tr:even').css("background-color", "gray")

// part 5
$("a").click(function () {
    window.print();
})

// part 6
$('textarea').attr("maxlength", "30");

// TODO part 7 !!!!
$('p').each(function(index, elem) {
    let words = elem.innerText.split(" ");
    let firstWord = words[0];
    words.shift();
    elem.innerHTML = '<b>' + firstWord + ' ' + '</b>' + words.join(" ");
})

// part 8
jQuery('body').append('<div style="background-color: gray;color: white">new Div</div>');

// part 9
$('#div2').appendTo($('#div1'));

// part 10
let MyObject = {
    prop1: "value1",
    prop2: "value2"
}

let part10P = $('#part10')

$.each(MyObject, function (property, value) {
    part10P.text(part10P.text() + property + ' = ' + value + ' ');
})

// part 11
$('ul').first().append('<li>item 4</li>');

// part 12
function part12() {
    let select = $('select').first()
    select.children().remove()
    select.append('<option>option 4</option>')
}
part12()

// part 13
function part13() {
    $('p').css("text-decoration", "underline")
}
part13()

// part 14
$('input[type=text]').first().val()