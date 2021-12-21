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

// part 8
jQuery('body').append('<div style="background-color: gray;color: white">new Div</div>');

// part 9
$('#div2').appendTo($('#div1'));

// part 10



