//========TO DO LIST========
var dataTODO = [];

var allTask = {
    addItemLiMonday : document.getElementById('addItemLiMonday'),
    addItemLiTuesday : document.getElementById('addItemLiTuesday'),
    addItemLiWednesday : document.getElementById('addItemLiWednesday'),
    addItemLiThursday : document.getElementById('addItemLiThursday'),
    addItemLiFriday : document.getElementById('addItemLiFriday'),
    addItemLiSaturday : document.getElementById('addItemLiSaturday'),
    addItemLiSunday : document.getElementById('addItemLiSunday'),
    inpMonday : document.getElementById('inpMonday'),
    inpTuesday : document.getElementById('inpTuesday'),
    inpWednesday : document.getElementById('inpWednesday'),
    inpThursday : document.getElementById('inpThursday'),
    inpFriday : document.getElementById('inpFriday'),
    inpSaturday : document.getElementById('inpSaturday'),
    inpSunday : document.getElementById('inpSunday'),
    removeItem : document.getElementById('removeItem')
};

$('#inpMonday').click( function () {
    var inputWriteText = allTask.inpMonday.value;
    var inputLength = inputWriteText.length;
    if (inputLength === 0) {
        return;
    }
    if (inputLength >= 16) {
        alert('Можно использовать максимум 15 символов, вы использовали - ' + inputLength);
        allTask.inpMonday.value = '';
        return false;
    }
    dataTODO.push(inputWriteText);
    allTask.inpMonday.value = '';
    console.log('Удалено', allTask.inpMonday, '\nДобавлено в массив - ', dataTODO);

    $('#ulMonday').append('<li>' + inputWriteText + '</li>').addClass('createNewElement');
    console.log('Вся функция работает... ', inputWriteText);
});

$('#ulTuesday').click( function () {
    var inputWriteText = allTask.inpTuesday.value;
    var inputLength = inputWriteText.length;
    if (inputLength === 0) {
        return;
    }
    if (inputLength >= 16) {
        alert('Можно использовать максимум 15 символов, вы использовали - ' + inputLength);
        allTask.inpTuesday.value = '';
        return false;
    }
    dataTODO.push(inputWriteText);
    allTask.inpTuesday.value = '';

    $('#ulTuesday').append('<li>' + inputWriteText + '</li>').addClass('createNewElement');
    console.log('Вся функция работает... ', inputWriteText);
});

$('#ulWednesday').click( function () {
    var inputWriteText = allTask.inpWednesday.value;
    var inputLength = inputWriteText.length;
    if (inputLength === 0) {
        return;
    }
    if (inputLength >= 16) {
        alert('Можно использовать максимум 15 символов, вы использовали - ' + inputLength);
        allTask.inpWednesday.value = '';
        return false;
    }
    dataTODO.push(inputWriteText);
    allTask.inpWednesday.value = '';

    $('#ulWednesday').append('<li>' + inputWriteText + '</li>').addClass('createNewElement');
    console.log('Вся функция работает... ', inputWriteText);
});

$('#ulThursday').click( function () {
    var inputWriteText = allTask.inpThursday.value;
    var inputLength = inputWriteText.length;
    if (inputLength === 0) {
        return;
    }
    if (inputLength >= 16) {
        alert('Можно использовать максимум 15 символов, вы использовали - ' + inputLength);
        allTask.inpThursday.value = '';
        return false;
    }
    dataTODO.push(inputWriteText);
    allTask.inpThursday.value = '';

    $('#ulThursday').append('<li>' + inputWriteText + '</li>').addClass('createNewElement');
    console.log('Вся функция работает... ', inputWriteText);
});

$('#ulFriday').click( function () {
    var inputWriteText = allTask.inpFriday.value;
    var inputLength = inputWriteText.length;
    if (inputLength === 0) {
        return;
    }
    if (inputLength >= 16) {
        alert('Можно использовать максимум 15 символов, вы использовали - ' + inputLength);
        allTask.inpFriday.value = '';
        return false;
    }
    dataTODO.push(inputWriteText);
    allTask.inpFriday.value = '';

    $('#ulFriday').append('<li>' + inputWriteText + '</li>').addClass('createNewElement');
    console.log('Вся функция работает... ', inputWriteText);
});

$('#ulSaturday').click( function () {
    var inputWriteText = allTask.inpSaturday.value;
    var inputLength = inputWriteText.length;
    if (inputLength === 0) {
        return;
    }
    if (inputLength >= 16) {
        alert('Можно использовать максимум 15 символов, вы использовали - ' + inputLength);
        allTask.inpSaturday.value = '';
        return false;
    }
    dataTODO.push(inputWriteText);
    allTask.inpSaturday.value = '';

    $('#ulSaturday').append('<li>' + inputWriteText + '</li>').addClass('createNewElement');
    console.log('Вся функция работает... ', inputWriteText);
});

$('#ulSunday').click( function () {
    var inputWriteText = allTask.inpSunday.value;
    var inputLength = inputWriteText.length;
    if (inputLength === 0) {
        return;
    }
    if (inputLength >= 16) {
        alert('Можно использовать максимум 15 символов, вы использовали - ' + inputLength);
        allTask.inpSunday.value = '';
        return false;
    }
    dataTODO.push(inputWriteText);
    allTask.inpSunday.value = '';

    $('#ulSunday').append('<li>' + inputWriteText + '</li>').addClass('createNewElement');
    console.log('Вся функция работает... ', inputWriteText);
});
