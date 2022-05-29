secondCard = undefined;
firstCard = undefined;
cardHasBeenFlipped = false;
lock = false;
const array = Array(9)
  .fill()
  .map(() => Math.ceil(151 * Math.random()));

function loadTwelvePokemon() {
  $("main").empty();
  $("main").append(`
    <div id="game_grid">
    <div class="card" data-framework="1">
        <img id="img1" class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="1">
        <img id="img2"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="2">
        <img id="img3"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
        <img class="back_face" src="/pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="2">
        <img id="img4"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="3">
        <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="3">
        <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="4">
        <img id="img7"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="4">
        <img id="img8"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="5">
        <img id="img9"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="5">
        <img id="img10"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="6">
        <img id="img11"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card" data-framework="6">
        <img id="img12"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
</div>
              `);
}

function loadSixPokemon() {
  $("main").empty();
  $("main").append(`
      <div id="game_grid">
      <div class="card" data-framework="1">
          <img id="img1" class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="1">
          <img id="img2"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="2">
          <img id="img3"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="/pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="2">
          <img id="img4"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="3">
          <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="3">
          <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
  </div>
                `);
}
function loadSixteenPokemon() {
  $("main").empty();
  $("main").append(`
      <div id="game_grid">
      <div class="card" data-framework="1">
          <img id="img1" class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="1">
          <img id="img2"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="2">
          <img id="img3"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="/pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="2">
          <img id="img4"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="3">
          <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="3">
          <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="4">
          <img id="img7"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="4">
          <img id="img8"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="5">
          <img id="img9"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="5">
          <img id="img10"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="6">
          <img id="img11"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="6">
          <img id="img12"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card" data-framework="7">
        <img id="img13"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[6]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
        </div>
    <div class="card" data-framework="7">
      <img id="img14"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[6]}.png">
      <img class="back_face" src="pokeCard.png" alt="">
  </div>
  <div class="card" data-framework="8">
      <img id="img15"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[7]}.png">
      <img class="back_face" src="pokeCard.png" alt="">
  </div>
  <div class="card" data-framework="8">
      <img id="img16"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[7]}.png">
      <img class="back_face" src="pokeCard.png" alt="">
  </div>
  <div class="card" data-framework="9">
  <img id="img17"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[8]}.png">
  <img class="back_face" src="pokeCard.png" alt="">
</div>
<div class="card" data-framework="9">
  <img id="img18"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[8]}.png">
  <img class="back_face" src="pokeCard.png" alt="">
</div>
  </div>
                `);
}

function gameOptions() {
  $("main").empty();
  $("main").append(`
    <h1> Select your grid layout for the game</h1>
    <div class="optionWrapper">
    <button id="gameOption1"> 2 x 3 </button>
    <button id="gameOption2"> 4 x 3 </button>
    <button id="gameOption3"> 6 x 3 </button>
    </div>
    `);
}

function setup() {
  $(".startButton").on("click", gameOptions);
  $("main").on("click", '#gameOption1', loadSixPokemon);
  $("main").on("click", '#gameOption2', loadTwelvePokemon);
  $("main").on("click", '#gameOption3', loadSixteenPokemon);
  $("main").on("click", '.card', function () {
    if (lock) return;
    $(this).toggleClass("flip");

    if (!cardHasBeenFlipped) {
      //captured first card
      firstCard = $(this).find(".front_face")[0];
      cardHasBeenFlipped = true;
      $(this).css("pointer-events", "none");
    } else {
      $(this).css("pointer-events", "auto");
      secondCard = $(this).find(".front_face")[0];
      console.log(firstCard, secondCard);
      cardHasBeenFlipped = false;

      // check if you have match
      if (
        $(`#${firstCard.id}`).attr("src") == $(`#${secondCard.id}`).attr("src")
      ) {
        console.log("A Match!");
        $(`#${firstCard.id}`).parent().off("click");
        $(`#${secondCard.id}`).parent().off("click");
      } else {
        console.log("not a Match!");
        lock = true;
        setTimeout(() => {
          $(`#${firstCard.id}`).parent().removeClass("flip");
          $(`#${secondCard.id}`).parent().removeClass("flip");
          lock = false;
        }, 1000);
      }
    }
  });
}

$(document).ready(setup);
