function validateForm(){
    var user_Name = document.getElementById("name");
    var passWord = document.getElementById("pass");
    
    if( user_Name.value == "" && passWord.value == ""){
        alert("Form filled out");
    }
}