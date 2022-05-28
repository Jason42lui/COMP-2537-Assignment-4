secondCard = undefined;
firstCard = undefined;
cardHasBeenFlipped = false;
let lock = false;
const array = Array(9)
  .fill()
  .map(() => Math.ceil(151 * Math.random()));

function loadTwelvePokemon() {
  $("main").append(`
    <div id="game_grid">
    <div class="card">
        <img id="img1" class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img2"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img3"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
        <img class="back_face" src="/pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img4"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
    <div class="card">
        <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
    </div>
</div>
              `);
}

function loadSixPokemon() {
  $("main").append(`
      <div id="game_grid">
      <div class="card">
          <img id="img1" class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img2"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img3"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="/pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img4"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
  </div>
                `);
}
function loadSixteenPokemon() {
    $("main").append(`
      <div id="game_grid">
      <div class="card">
          <img id="img1" class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img2"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[0]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img3"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="/pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img4"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[1]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[2]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[3]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[4]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
          <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[5]}.png">
          <img class="back_face" src="pokeCard.png" alt="">
      </div>
      <div class="card">
        <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[6]}.png">
        <img class="back_face" src="pokeCard.png" alt="">
        </div>
    <div class="card">
      <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[6]}.png">
      <img class="back_face" src="pokeCard.png" alt="">
  </div>
  <div class="card">
      <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[7]}.png">
      <img class="back_face" src="pokeCard.png" alt="">
  </div>
  <div class="card">
      <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[7]}.png">
      <img class="back_face" src="pokeCard.png" alt="">
  </div>
  <div class="card">
  <img id="img5"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[8]}.png">
  <img class="back_face" src="pokeCard.png" alt="">
</div>
<div class="card">
  <img id="img6"  class="front_face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${array[8]}.png">
  <img class="back_face" src="pokeCard.png" alt="">
</div>
  </div>
                `);
  }

function setup() {
  console.log(array);
  loadSixteenPokemon();
  $(".card").on("click", function () {
      if(lock) return;
    $(this).toggleClass("flip");

    if (!cardHasBeenFlipped) {
      //captured first card
      firstCard = $(this).find(".front_face")[0];
      cardHasBeenFlipped = true;
    } else {
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
        lock = true
        setTimeout(() => {
          $(`#${firstCard.id}`).parent().removeClass("flip");
          $(`#${secondCard.id}`).parent().removeClass("flip");
          lock = false
        }, 1000);
      }
    }

    // reset
    // firstCard = undefined
    // secondCard = undefined
  });
}

$(document).ready(setup);
