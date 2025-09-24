let names = [];

function insertName() {

    if (names.length == 6) {
        alert("You have already entered 6 names.")
    }
    else {

        let name = document.getElementById("name").value;
        names.push(name)

        console.log(names);
        let list = document.getElementById("lists")

        let lis = document.createElement('li')
        lis.innerHTML = `${name}`
        list.append(lis)

    }
}


function sortnames() {
    let list = document.getElementById("lists");
    list.innerHTML = ""; 

    let sortedNames = [...names].sort(); 

    for (let name of sortedNames) {
        let lis = document.createElement('li');
        lis.innerHTML = name;
        list.append(lis);
    }
}