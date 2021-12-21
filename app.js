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

// part 15
function removeAllClass(element) {
    element.removeClass()
}

removeAllClass($('.class1'));

// part 16
const part16Span = $('#css')
part16Span.css('color', 'blue');
part16Span.removeAttr('style');

// part 17
window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log('click gauche')
});

$('body').click(function (e) {
    if (e.button === 0)
        console.log('click droit')
})

// part 18
function checkInteger(nb) {
    if (Number.isInteger(nb)) {
        console.log("c'est un entier")
    }
}

// part 19
window.addEventListener("keydown", function (event) {
    if (event.key === 'Enter')
        console.log('Enter')
});

// part 20
console.log($('tr').length);

// part 21
console.log($('textArea').val())

// part 22
$('#form').append('<input type="radio" value="radio">');

// part 23
console.log($('p').first().offset());

// part 24
$('p').each(function(index, elem) {
    elem.style.textTransform = "uppercase";
})

// part 25
$('textarea').change(function () {
    console.log('changé');
})

// part 26
$('tr').last().remove();

// part 27
$('button').text('nouveau text');

// part 28
$("select").append('<option>opt 1</option>, <option>opt 2</option>');

// part 29
$("textarea").css("background", "gray");

// part 30
$('tr').siblings().remove();

// part 31
$("select").change(function () {
    console.log($(this).val())
});

// part 32
$('a').removeAttr("href");

// part 33
$('.class')[0].className = "newClass";

// part 34
$('select').addClass("css");

// part 35
console.log($('#selected p').length)

// TODO part 36 !!!!!!

// part 37
console.log(jQuery.fn.jquery);

// part 38
$('tr').eq(0).remove();

// part 39
$('input[type=text]').val('new value');

// part 40
$('span').text('new text');

// part 41
$('span').click(function () {
    console.log($(this).attr("class"))
});

// part 42
window.addEventListener('load', function () {
    $('a').attr("href", "newLink")
});

// part 43
function deleteDisabled(element) {
    element.removeAttr("disabled")
}
deleteDisabled($('select'));

// part 44
console.log($('div').first().outerWidth())

// part 45
$('button').mouseenter(function () {
    $('button').fadeOut()
});

// part 46
let value = [];
$('#form').children().each(function (index, element) {
    value.push(element.value)
});

// part 47
$('span').first().attr('data-attribute', 'value')