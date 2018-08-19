$(document).ready(function () {


  var randomButton = document.querySelectorAll('.random');
  var counter = document.querySelector('.counter');



  // sound 

  var simonSound = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
  ]


  // variables

  var userSeq = [];
  var simonSeq = [];
  var numOfLevels = 3;
  var level = 0;
  var id = 0;
  var color = 0;

  document.getElementById('start').addEventListener("click", startGame);

  function startGame(e) {
    console.log(e)
    level++;
    simonSequence();

    $('.randomBtn').click(function () {
      id = $(this).attr('id');
      color = $(this).attr('class');
      userSeq.push(id);
      console.log(id + " " + color);
      addClassSound(id, color);

      // checking user squence
      if (!checkUserSeq()) {
        displayError();
        userSeq = [];

      }
      if (userSeq.length == simonSeq.length) {
        level++;
        userSeq = [];
        simonSequence();
      }
    })
  }

  // checking user seq against simon

  function checkUserSeq() {
    for (var i = 0; i < userSeq.length; i++) {
      if (userSeq[i] != simonSeq[i]) {
        return false;
      }
    }
    return true;
  }

  // displaError function

  function displayError() {
    counter.textContent = "Error";
    console.log("error");
    var counting = 0;
    var myError = setInterval(function () {
      counting++;
      if (counting == 3) {
        counter.textContent = level;
        clearInterval(myError);
        userSeq = [];
        counting = 0;
      }

    })
  }



  //  simon sequence  
  function simonSequence() {
    console.log(level);
    counter.textContent = level;
    getRandome();
    var i = 0;

    var myInterval = setInterval(function () {
      id = simonSeq[i];
      color = $("#" + id).attr('class');
      console.log(id + " " + color);
      addClassSound(id, color);
      i++;
      if (i == simonSeq.length) {
        clearInterval(myInterval);
      }
    }, 1000);
  }


  // genrete random number

  function getRandome() {
    var randomNum = Math.floor(Math.random() * 4);
    simonSeq.push(randomNum);
  }

  // add class sound temprary

  function addClassSound(id, color) {
    playSound()
    $("#" + id).addClass(color + "-active");
    setTimeout(function () {
      $("#" + id).removeClass(color + "-active");
    }, 500)
  }

  function playSound(id) {

  }


})