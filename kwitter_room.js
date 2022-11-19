
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBT3QAehsOYIS6HxF-65RR85eTAvc4t8JQ",
      authDomain: "kwitter-71713.firebaseapp.com",
      databaseURL: "https://kwitter-71713-default-rtdb.firebaseio.com",
      projectId: "kwitter-71713",
      storageBucket: "kwitter-71713.appspot.com",
      messagingSenderId: "281108369591",
      appId: "1:281108369591:web:a17ca0ea5c94bb60e63d32"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
room_name = localStorage.getItem("room_name")
function addRoom()
{
      room_name= document.getElementById("room_name").value 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name", room_name)
      window.location= "kwitter_page.html"
}     
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - "+Room_names)
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML+= row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name)
{
      console.log(name)
 localStorage.setItem("room_name", name)
      window.location= "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}