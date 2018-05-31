var round = false
var counter = 5;
var timeStart = true;
var gameOver =false;
function valueChange(){
          $.ajax({
            url: "/value",
            type: "POST",
            data: {value: $("#value").val(), gameOver: gameOver},
            success: function(data){
              if(data == "27"){
                console.log("emptying");
                round = true;
                $('.flex-container').append(
                  "<div>" + data + "</div>");
                  alert("Level Completed")
                  $("#value").val('')
                  $('.flex-container').empty()
                  $('.flex-container').append(  "<div>" + 1 + "</div>");
                  counter =7;
                  timeStart = true;
                  clearInterval(counter);
                  $('#changer').text("Level 2")
                  $('#fx').text("Find the first 5 terms of 4(3)^x and then the sum at the end in 5 seconds timer starts when you type")
              }
              /////////////////////////////972
              else  if(data == "972"){
                console.log("emptying");
                round = true;
                $('.flex-container').append(
                  "<div>" + data + "</div>");
                  alert("Level Completed")
                  $("#value").val('')
                  $('.flex-container').empty()
                  $('.flex-container').append(  "<div>" + 1 + "</div>");
                  counter =4;
                  timeStart = true;
                  clearInterval(counter);
                  $('#changer').text("Level 2")
                  $('#fx').text("Find the first 5 terms of (-3)^n and then the sum at the end in 5 seconds timer starts when you type")
                }
                else  if(data == "-243"){
                  console.log("emptying");
                  round = true;
                  $('.flex-container').append(
                    "<div>" + data + "</div>");
                    alert("Level Completed")
                    $("#value").val('')
                    $('.flex-container').empty()
                    $('.flex-container').append(  "<div>" + 1 + "</div>");
                    counter =4;
                    timeStart = true;
                    clearInterval(counter);
                    $('#changer').text("Level 2")
                    $('#fx').text("Find the first 5 terms of 2x and then the sum at the end in 5 seconds timer starts when you type")
                  }
            else  if(data){
              $("#value").val('')
              $('.flex-container').append(
                "<div>" + data + "</div>");
              }

            },
            dataType: "json"
          });


        return false;
}


function timer(){

span = document.getElementById("count");

    setInterval(function() {
      if(!round)
      {
      counter--;
      console.log(counter);
    }
      if (counter > -1) {

        span.innerHTML = counter;
      }
      // Display 'counter' wherever you want to display it.
      if(!round)
      {
        // if(counter == 1){
        //   console.log("1ing");
        //   counter--
        // }
      if (counter == 0) {
        console.log("timer - 0");
        if(round)
        {
          alert("Level Completed")
          timeStart =true
        }
        else if(!round){
          alert("Game Over")
          timeStart =true
          round = true;
            clearInterval(counter);
            gameOver = true;
            valueChange();
            location.reload()
            return false;
        }
      }
    }



    }, 1000);



}


var itemN;
      //$(".cartButton").click(function(){
         $("#value").keyup( function( event ) {
        //console.log("value was changed" + $("#value").val());
        if(timeStart){
          console.log("TimerStart");
          round = false;
        timeStart=false;
        timer()
      }
        valueChange();
        event.preventDefault();

});
//////////If the html = /cart then do the below
