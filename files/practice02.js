////버튼 호버시, "어서 눌러주세요" 라는 멘트가 버튼 밑에 뜬다.
/////버튼을 누르면, 계속 숫자가 바뀐다.
///숫자 중에 "34"가 나오면 "당첨되셨습니다." 라는 멘트의 팝업이 뜬다. (from 예지)

// get the random number
var num = [1, "히히", 34, 56, 787, 84, 85, 345, 66, 23];

// Get the modal
var modal = document.getElementById("myModal");

function lotto() {
  var randomPick = num[Math.floor(Math.random() * num.length)];

  document.getElementById("result").innerHTML = randomPick;
}
