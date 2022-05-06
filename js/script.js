function newItem(){

    
    // create list
    let li = $('<li></li>');
    // read user input
    let inputText = $('#input').val();
    // append input to list
    li.append(inputText);

    // display warning if user did not enter anything
    if (inputText === '') {
        alert("You must write something!");
    } 
    else {
        $('#list').append(li);
    }

    // cross an item out on double click:
    function crossOut() {
        li.toggleClass("strike");
    }
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    // create delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    // mark delete button with 'X'
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    // function: remove item from list
    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
        li.addClass("delete")
    }

    // Reorder items
    $('#list').sortable();
}

 
