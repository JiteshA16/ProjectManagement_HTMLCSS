
var projectListData = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

showProjects();

function showProjects(listId) {
    projectListData.forEach(function (value, index) {
        var template =
            '<div class="project-card">'
            + value.name
            + '<ul>'
            + '<li>Task one</li>'
            + '<li>Task two</li>'
            + '</ul>'
            + '</div>';
        if (listId) {
            document.getElementById(listId).innerHTML += template;
        } else {
            document.getElementById('projectList').innerHTML += template;
        }
    });
}

function removeProjects() {
    document.getElementById('projectList').innerHTML = '';
}

var idValue = 1;

function addBoard(id) {
    var boardTitle = id.value;
    if (boardTitle == "") {
        alert('Board title cannot be empty.');
    } else {
        idValue++;
        var projectListUniqueId = "projectList_" + idValue;
        console.log(idValue)
        var templateBlock =
            '<section class="board-block">'
            + '<div>'
            + boardTitle
            + '<button style="margin-left: 5px;" onclick="removeProjects()">Remove projects</button>'
            + '</div>'
            + '<div class="project-container" id=' + projectListUniqueId + '>'
            + '</div>'
            + '</section>';
        document.getElementById('boardBlockList').innerHTML += templateBlock
        document.getElementById('newBoardTitleText').value = '';
        showProjects(projectListUniqueId);
    }
}


function toggleMenu() {
    var menuState = document.getElementsByClassName('menu-block')[0];
    if (menuState.style.display == 'none') {
        menuState.style.display = '';
    } else {
        menuState.style.display = 'none';
    }
}