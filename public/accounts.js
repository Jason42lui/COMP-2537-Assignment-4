x = 0

function loadEvents(){
    $.ajax({
        // url: "https://infinite-river-98790.herokuapp.com/accounts/getAllAccounts",
        url: "http://localhost:5000/accounts/getAllAccounts",
        type: "get",
        success: (x)=>{
            console.log(x)
            for (i = 0; i < x.length ; i++) {
                if (x[i].username === 'test1') {
                    $(".accountWrapper").append(`
                    <div class="cardContent" id="${x[i]["_id"]}">
                    <h3> <span>Username:</span> ${x[i].username} </h3>
                    <h3> <span>Email:</span> ${x[i].email} </h3>
                    <h5> <span>Admin Status:</span> ${x[i].admin} </h5>
                    `)
                } else
                $(".accountWrapper").append(`
                <div class="cardContent" id="${x[i]["_id"]}">
                <h3> Username: ${x[i].username} </h3>
                <h3> Email: ${x[i].email} </h3>
                <h5> Admin Status: ${x[i].admin} </h5>
                <div class="buttonContainers">
                <button class="giveButtons" id="${x[i]["_id"]}"> Give Admin status</button>
                <button class="removeButtons" id="${x[i]["_id"]}"> Remove Admin status</button> 
                <button class="deleteButtons" id="${x[i]["_id"]}"> Delete</button>
                </div>
                `)
            }
        }
    })
}

function giveAdmin() {
    x = this.id
    $.ajax({
        // url: `https://infinite-river-98790.herokuapp.com/timeline/increaseHits/${x}`,
        url: `http://localhost:5000/accounts/giveAdmin/${x}`,
        type: "get",
        success: function() {   
            location.reload();  
        }
    })
}

function removeAdmin() {
    x = this.id
    $.ajax({
        // url: `https://infinite-river-98790.herokuapp.com/timeline/remove/${x}`,
        url: `http://localhost:5000/accounts/removeAdmin/${x}`,
        type: "get",
        success: function() {   
            location.reload();  
        }
    })
}

function deleteContent() {
    x = this.id
    $.ajax({
        // url: `https://infinite-river-98790.herokuapp.com/timeline/remove/${x}`,
        url: `http://localhost:5000/accounts/remove/${x}`,
        type: "get",
        success: function() {   
            location.reload();  
        }
    })
}


function setup() {
    loadEvents()

    $("body").on("click", ".giveButtons", giveAdmin)
    $("body").on("click", ".removeButtons", removeAdmin)
    $("body").on("click", ".deleteButtons", deleteContent)
}

$(document).ready(setup)