function addMember(){
    var d = document.getElementById("member-input");
    d.innerHTML += "<div><input type ='text' class='input-field' id='name-input' placeholder='Input name here...'/><button id='confirm-member' onclick='addMember();'>Add to the team</button></div>"
}