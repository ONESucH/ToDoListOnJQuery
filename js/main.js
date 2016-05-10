//TO DO LIST
$('#todoList ul').sortable({
   items: "li:not('.listTitle, .addItem')",
    connectWidth: "ul",
    dropOnEmpty: true,
    placeholder: "emptySpace"
});

$('#input').keydown( function (e) {
    if (e.keyCode == 13) {
        var item = $(this).val();

        $(this).append('<ul>' + item + '</ul>');
        $(this).parent().parent().append('<li>' + item + '</li>');
        $(this).val('');
    }
});
