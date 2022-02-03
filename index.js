// Homework #1

// *Create a button in HTML. And when the button is clicked it should create API Call.
// *API call URL = https://thronesapi.com/api/v2/Characters/2
// *It will return informations about John Snow :D 
// // *Print in HTML following properties: firstName, lastName, fullName, title, family and it's image ;)

console.log("connect");

let myBtn = document.getElementById("myBtn");
let results = document.getElementById("results");

let gotURL = "https://thronesapi.com/api/v2/Characters/2";
let responseOfApi;

function fetchGOTChars(apiUrl){
    $.ajax({
        url:apiUrl,
        success: function(response){
            console.log("Success", response);
            responseOfApi = response;
        

        },
        error : function(error) {
            console.log(error);
        }
    });
}
myBtn.addEventListener("click" , function(  ){
    fetchGOTChars(gotURL);
     printResults(responseOfApi , results);
});

function printResults( array ,element) {
    element.innerHTML = `<li>${array.firstName}</li>
                       <li>${array.lastName}</li>
                       <li>${array.fullName}</li>
                       <li>${array.title}</li>
                       <li>${array.family}</li>
                       <li>${array.image}</
    `;
  }

