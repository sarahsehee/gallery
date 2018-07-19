////버튼 호버시, "어서 눌러주세요" 라는 멘트가 버튼 밑에 뜬다.
/////버튼을 누르면, 계속 숫자가 바뀐다.
/// (from 예지)

// get the random number
var num = [
  1,
  34,
  56,
  787,
  84,
  85,
  345,
  66,
  23,
  123,
  45,
  345,
  56,
  66,
  23,
  23,
  33,
  78,
  97,
  72
];

// Get the modal
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

///lotto function

function lotto() {
  var randomPick = num[Math.floor(Math.random() * num.length)];

  document.getElementById("result").innerHTML = randomPick;

  if (randomPick === 97) {
    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  } else if (randomPick !== "히히") {
    modal.style.display = "none";
  }
}
