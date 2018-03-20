$(document).ready(function () {
  function simonApp() {
    var red_audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    var green_audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    var yellow_audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    var blue_audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    var squence = [];
    var counter = 0;
    var count_2 = 0;
    var count = document.getElementsByClassName("count");
    //console.log(count);


    function nextSquence() {

      var audios = [red_audio, blue_audio, green_audio, yellow_audio];
      var randomNumber = audios[Math.floor(Math.random() * audios.length)];
      randomNumber.play();
      squence.push(randomNumber);
      // buttons.style.
      console.log("the new buttons random is  :" + randomNumber);
    }

    $("#start_game").on("change", function () {
      nextSquence();

      function getColors(sound) {
        if (!squence.length) {
          nextSquence();
        } else {
          if (sound === squence[counter]) {
            // next step
            if (counter === squence.length - 1) {
              counter = 0;
              nextSquence();
            } else {
              counter++;
              if (counter == 20) {
                alert("you won the match");
              }
            }
          } else {
            // lose condition
            alert("this is wrong");
            counter = 0;
            squence = [];
            window.location.reload(1);
          }
        }
      }

      $("#red_btn").on("click", function () {
        getColors(red_audio.play());
      });

      $("#blue_btn").on("click", function () {
        getColors(blue_audio.play());
      });

      $("#yellow_btn").on("click", function () {
        getColors(yellow_audio.play());
      });

      $("#green_btn").on("click", function () {
        getColors(green_audio.play());
      });
    });
  }

  setInterval(simonApp, 1000);
}); // close for document objects notations