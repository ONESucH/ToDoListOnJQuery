var dataTodo = setStoragDataAndGet('read') || [];
var curHash = location.hash.split('#')[1] || 'active';
var elementsTodo = {
    buttonsStatus: {
        active: $('#active'),
        done: $('#done'),
        remove: $('#remove')
    },
    labelWithText: $('#addNewTaskTodoList'),
    btnAdd: $('#addBtnTodoList'),
    list: $('#taskList')
};
changeHashName(curHash);

elementsTodo.btnAdd.on('click', function () {
    var lengthTask = elementsTodo.labelWithText.val().length;
    if (!lengthTask || lengthTask > 45) {
        return false
    }
    dataTodo.push({
        title: elementsTodo.labelWithText.val(),
        status: 'active',
        id: dataTodo.length
    });
    elementsTodo.labelWithText.val('');
    location.hash = 'active';
    renderTodoList('active');
});

window.addEventListener('hashchange', function (e) {
    var curHash = e.newURL.split('#')[1];
    changeHashName(curHash);
});


function changeHashName(hashName) {
    $.each(elementsTodo.buttonsStatus, function (key, value) {
        value.removeClass('active');
    });
    elementsTodo.buttonsStatus[hashName].addClass('active');
    renderTodoList(hashName);
}

function renderTodoList(status) {
    setStoragDataAndGet('save');
    var html = '';
    dataTodo.forEach(function (item) {
        if (status === 'active' && item.status === 'active') {
            html += "<li class='list-group-item list-group-item-success blockItem' onclick='doneTask(" + item.id + ")'><img src='img/ico_mus.png' class='img-rounded' onclick='removeTask("+ item.id +")'>" + item.title + "</li>";
        }
        if (status === 'done' && item.status === 'done') {
            html += "<li class='list-group-item list-group-item-info blockItem' onclick='activeTask(" + item.id + ")'><img src='img/ico_mus.png' class='img-rounded' onclick='removeTask("+ item.id +")'>" + item.title + "</li>";
        }
        if (status === 'remove' && item.status === 'remove') {
            html += "<li class='list-group-item list-group-item-danger blockItem' onclick='unDoneTask("+ item.id +")'><img src='img/return.png' class='img-rounded' onclick='removeTask("+ item.id +")'>" + item.title + "</li>";
        }
        console.log(item.status);
    });
    elementsTodo.list.html(html);
}

function activeTask(id) {
    dataTodo[id].status = 'active';
    renderTodoList('done');
}

function doneTask(id) {
    dataTodo[id].status = 'done';
    renderTodoList('active');
}

function unDoneTask(id) {
    dataTodo[id].status = 'active';
    renderTodoList('done');
}

function removeTask(id) {
    setTimeout(function () {
        dataTodo[id].status = 'remove';
    }, 100);
    location.hash = 'active';
}
function setStoragDataAndGet(type) {
    if (type === 'read') {
        return JSON.parse(localStorage.getItem('todo'));
    }
    if (type === 'save') {
        var todoListToJson = JSON.stringify(dataTodo);
        localStorage.setItem('todo', todoListToJson);
    }
}