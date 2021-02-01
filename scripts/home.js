var projectListData = [{
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

//showProjects();

function showProjects(listId) {
    projectListData.forEach(function(value, index) {
        var template =
            '<div class="project-card">' +
            value.name +
            '<ul>' +
            '<li>Task one</li>' +
            '<li>Task two</li>' +
            '</ul>' +
            '</div>';
        if (listId) {
            document.getElementById(listId).innerHTML += template;
        } else {
            document.getElementById('projectList').innerHTML += template;
        }
    });
}

function removeProjects() {
    //document.getElementById('projectList').innerHTML = '';
}

var idValue = 1;

function addBoard(id) {
    var boardTitle = id.value;
    if (boardTitle == "") {
        alert('Board title cannot be empty.');
    } else {
        var alertText = 'Board named ' + boardTitle + ' is added.'
        alert(alertText);
        idValue++;
        var projectListUniqueId = "projectList_" + idValue;
        var boardUniqueId = "board_" + idValue;
        var templateBlock =
            '<section class="board-block" id=' + boardUniqueId + '>' +
            '<div class="board-block-header">' +
            boardTitle +
            '<button style="background-color: red; color: white; border: none; height: 30px; border-radius: 5px;" onclick="removeProjects()">Remove projects</button>' +
            '</div>' +
            '<div class="project-container" id=' + projectListUniqueId + '>' +
            '</div>' +
            '</section>';
        document.getElementById('boardBlockList').innerHTML += templateBlock
        document.getElementById('newBoardTitleText').value = '';
        showProjects(projectListUniqueId);
        document.getElementById('menuList').innerHTML += '<li onclick="openProject(' + boardUniqueId + ')" id="menuItems">' + boardTitle + '</li>';
        document.getElementById('menuList').innerHTML += '<div style="height:1px; background-color: white;"></div>';
    }
}

function openProject(projectBoard) {
    console.log(projectBoard);
    var projectBoards = document.getElementById('boardBlockList').getElementsByClassName('board-block');
    for (var i = 0; i < projectBoards.length; i++) {
        document.getElementById(projectBoards[i].id).style.display = 'none';
    }
    document.getElementById(projectBoard.id).style.display = 'block';
}


function toggleMenu() {
    var menuState = document.getElementsByClassName('menu-block')[0];
    if (menuState.style.display == 'none') {
        menuState.style.display = '';
    } else {
        menuState.style.display = 'none';
    }
}