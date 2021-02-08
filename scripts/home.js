var xhr = new XMLHttpRequest();

/* Get Boards API Call */
function getBoardsAPICall() {
    xhr.open('GET', 'http://localhost:8080/api/v1/boards');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // Retrieving access token from session storage
    var accessToken = sessionStorage.getItem('access-token');
    console.log('AccessToken', accessToken);
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send();
    xhr.onreadystatechange = getBoardsResponse;
}

function getBoardsResponse() {
    console.log(xhr.responseText);
    if (xhr.readyState === 4 && xhr.status === 200) {
        var boardList = JSON.parse(xhr.responseText);
        var boards = boardList.boards;
        boards.forEach(function(value, index) {
            var template = '<div id=' + value.id + ' onclick=showProjects(' + value.id.toString() + ')>' + value.name +
                '<button class="delete-btn" onclick="deleteBoard(' + value.id.toString() + ')">Delete Board</button>' +
                '<button class="project-btn" onclick="addProject(' + value.id.toString() + ')">Add Project</button>' +
                '</div>';
            document.getElementById('boardBlockList').innerHTML += template;
        });
        console.log(boardList);
    }
}

/* Add Board API Call */
function addBoardAPICall(boardName) {
    var boardTitle = boardName.value;
    if (boardTitle == "") {
        alert('Board title cannot be empty.');
    } else {
        // Retrieving User details from session storage 
        var userDetails = JSON.parse(sessionStorage.getItem('user-detail'));

        if (userDetails.role.id === 105) {
            alert('Only admins can add a board.')
        } else {
            var params = {
                "description": "A new board",
                "name": boardTitle,
                "owner_id": userDetails.id
            };

            xhr.open('POST', 'http://localhost:8080/api/v1/boards');
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            // Retrieving access token from session storage
            var accessToken = sessionStorage.getItem('access-token');
            console.log('AccessToken', accessToken);
            xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
            xhr.send(JSON.stringify(params));

            xhr.onreadystatechange = addBoardResponse;
        }
    }
}

function addBoardResponse() {
    console.log(xhr.responseText);
    if (xhr.readyState === 4) {
        getBoardsAPICall();
    }
}



var projectListData = [{
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

//showProjects();

/* Show projects for respective boards API call */
function showProjects(listId) {
    var urlString = 'http://localhost:8080/api/v1/boards/' + listId + '/projects';
    xhr.open('GET', urlString);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // Retrieving access token from session storage
    var accessToken = sessionStorage.getItem('access-token');
    console.log('AccessToken', accessToken);
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send();
    xhr.onreadystatechange = getProjectsResponse;
}

function getProjectsResponse() {
    if (xhr.readyState === 4) {
        var projectList = JSON.parse(xhr.responseText);
        var projects = projectList.projects;
        projects.forEach(function(value, index) {
            var template =
                '<div class="project-card">' +
                value.name +
                '<ul>' +
                '<li>Task one</li>' +
                '<li>Task two</li>' +
                '</ul>' +
                '</div>';
            document.getElementById(listId).innerHTML += template;
        });
    }
}

function removeProjects() {
    //document.getElementById('projectList').innerHTML = '';
}

/* Delete board API Call */
function deleteBoard(boardId) {
    event.stopPropagation();
    var url = 'http://localhost:8080/api/v1/boards/' + boardId;
    xhr.open('DELETE', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // Retrieving access token from session storage
    var accessToken = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send();
    xhr.onreadystatechange = deleteBoardResponse(boardId);
}

function deleteBoardResponse(boardId) {
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
        document.getElementById(boardId).remove();
    }
}

/* Add Project API Call */
function addProject(boardId) {
    event.stopPropagation();
    // Retrieving User details from session storage 
    var userDetails = JSON.parse(sessionStorage.getItem('user-detail'));
    var params = {
        "description": "New Project via API",
        "end_date": new Date(),
        "name": "Project New Added",
        "owner_id": userDetails.id,
        "start_date": new Date()
    };
    var url = 'http://localhost:8080/api/v1/boards/' + boardId + '/projects';
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // Retrieving access token from session storage
    var accessToken = sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(JSON.stringify(params));

    xhr.onreadystatechange = addProjectResponse;
}

function addProjectResponse() {
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
    }
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