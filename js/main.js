var dataTodo = setStorageDataAndGet('read') || [];
var curHash = location.hash.split('#')[1] || 'active';
var allTask = {
  buttonsItem: {
      active: $('#active'),
      done: $('#done'),
      remove: $('#remove')
  },
    addNewTaskTodoList : $('#addNewTaskTodoList'),
    addBtnTodoList : $('#addBtnTodoList'),
    taskList : $('#taskList')
};

changeHashName(curHash);

allTask.addBtnTodoList.on('click', function () {
    var lengthTask = allTask.addNewTaskTodoList.val().length;
    if (!lengthTask || lengthTask > 15) {
        alert('Максимум можно использоваьть 15 символов, у вас их - ' + lengthTask);
        return false
    }
    dataTodo.push({
        title : allTask.addNewTaskTodoList.val(),
        status : 'active',
        id : dataTodo.length
    });
    allTask.addNewTaskTodoList.val('');
    location.hash = 'active';
    renderTodoList('active');
});

window.addEventListener('hashchange', function (e) {
    var curHash = e.newURL.split('#')[1];
    changeHashName(curHash);
});

function changeHashName(hashName) {
    $.each(allTask.buttonsItem, function (key, value) {
        value.removeClass('active');
    });
    allTask.buttonsItem[hashName].addClass('active');
    renderTodoList(hashName);
}

function renderTodoList(status) {
    setStorageDataAndGet('save');
    var html = '';
    dataTodo.forEach( function (item) {
        if (status === 'active' && item.status === 'active') {
            html += "<li class='list-group-item list-group-item-success blockItem' onclick='activeTask(" + item.id + ")'>" + item.title + "<i class='fa fa-trash flo-right' aria-hidden='true' onclick='removeTask(" + item.id + ")'>" + "</i>" + "</li>";
        }
        if (status === 'done' && item.status === 'done') {
            html += "<li class='list-group-item list-group-item-warning blockItem' onclick='unDoneTask(" + item.id + ")'>" + item.title + "<i class='fa fa-trash flo-right' aria-hidden='true' onclick='taskRemoveItDone(" + item.id + ")'>" + "</i>" + "</li>";
        }
        if (status === 'remove' && item.status === 'remove') {
            html += "<li class='list-group-item list-group-item-danger blockItem' onclick='unRemoveTask(" + item.id + ")'>" + item.title + "<i class='fa fa-reply-all flo-right' aria-hidden='true'>" + "</i>" + "</li>";
        }
    });
    allTask.taskList.html(html);
}

function activeTask(id) {
    dataTodo[id].status = 'done';
    renderTodoList('active');
}

function removeTask(id) {
    setTimeout( function () {
        dataTodo[id].status = 'remove';
    }, 500);
    renderTodoList('active');
}

function taskRemoveItDone(id) {
    setTimeout( function () {
        dataTodo[id].status = 'remove';
    }, 500);
    renderTodoList('done');
}

function unDoneTask(id) {
    dataTodo[id].status = 'active';
    renderTodoList('done')
}

function unRemoveTask(id) {
    dataTodo[id].status = 'active';
    renderTodoList('remove')
}

function setStorageDataAndGet(type) {
    if (type === 'read') {
        return JSON.parse(localStorage.getItem('todo'));
    }
    if (type === 'save') {
        var todoListToJson = JSON.stringify(dataTodo);
        localStorage.setItem('todo', todoListToJson);
    }
}
