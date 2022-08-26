<script lang="ts">
  export let score: number;
  export let num_skipped: number;

  let items = [
    {
      path: "items_for_sorting/photos/books.jpeg",
      stream: ["donate", "paper"],
    },
    {
      path: "items_for_sorting/photos/cardboard_box.jpeg",
      stream: ["paper", "compost"],
    },
    {
      path: "items_for_sorting/photos/compostable_bag.jpeg",
      stream: ["compost"],
    },
    { path: "items_for_sorting/photos/eaten_apple.jpeg", stream: ["compost"] },
    { path: "items_for_sorting/photos/envelope.jpeg", stream: ["paper"] },
    { path: "items_for_sorting/photos/glass_bottle.jpeg", stream: ["mgpc"] },
    {
      path: "items_for_sorting/photos/laptop.jpeg",
      stream: ["special", "donate"],
    },
    {
      path: "items_for_sorting/photos/metal_can.jpeg",
      stream: ["mgpc", "donate"],
    },
    { path: "items_for_sorting/photos/milk_carton.jpeg", stream: ["mgpc"] },
    { path: "items_for_sorting/photos/plastic_bottle.jpeg", stream: ["mgpc"] },
    {
      path: "items_for_sorting/photos/plastic_utensils.jpeg",
      stream: ["mgpc", "donate", "compost"],
    },
    {
      path: "items_for_sorting/photos/refrigerator.jpeg",
      stream: ["special", "donate"],
    },
    { path: "items_for_sorting/photos/snack_bag.jpeg", stream: ["landfill"] },
    { path: "items_for_sorting/photos/styrofoam.jpeg", stream: ["landfill"] },
    {
      path: "items_for_sorting/photos/toys.jpeg",
      stream: ["donate", "mgpc"],
    },
  ];
  let currentItemIdx = 0;

  function selectStream(event) {
    for (let i = 0; i < items[currentItemIdx].stream.length; i++) {
      if (items[currentItemIdx].stream[i] == event.target.value) {
        score += 1;
      }
    }
    currentItemIdx += 1;
  }
</script>

<main>
  <div id="header" class="unselectable title">
    <h1>Resource Management Trainer</h1>
  </div>
  <div id="content">
    {#if currentItemIdx < items.length}
      <p>
        We live in a world where we have finite resources. That is why as we go
        through life, we need to take responsibility on what we consume and
        discard. Test your knowledge on what to do with things you don't want
        anymore! Much of our "waste" is actually resources that can be used
        again if managed properly and given a new life.
      </p>
      <p>
        For each pictured item, click on the button for the stream that
        you think it should go into. The score will let you know if you got it
        right. If you don't know, you can click the "Skip" button.
      </p>
      <p>Happy sorting!</p>
      <div>
        <img
          id="waste-item-photo"
          src={items[currentItemIdx].path}
          alt="FIXME"
        />
      </div>
      <div class="streams-buttons">
        <div>
          <button class="donate" on:click={selectStream} value="donate">
            Donate
          </button>
          <button class="compost" on:click={selectStream} value="compost">
            Compost
          </button>
          <button class="paper" on:click={selectStream} value="paper"
            >Paper/Cardboard</button
          >
          <button class="mgpc" on:click={selectStream} value="mgpc">
            Metal, Glass, Plastic or Carton
          </button>
          <button class="special" on:click={selectStream} value="special">
            Special Recyling
          </button>
          <button class="landfill" on:click={selectStream} value="landfill"
            >Landfill
          </button>
        </div>
        <div>
          <button
            class="skip"
            on:click={() => {
              currentItemIdx += 1;
            }}>Skip</button
          >
        </div>
      </div>
    {:else}
      <div>
        {#if score == 0 || score == 1 || score == 2 || score == 3 || score == 4}
          "You have much room to grow. Here are some great resources to get you
          started on your journey to become an eco-star!"
        {/if}
        {#if score == 5 || score == 6 || score == 7 || score == 8 || score == 9}
          "This can be a little tricky but you are on your way to becoming an
          eco-star!"
        {/if}
        {#if score == 10 || score == 11 || score == 12 || score == 13 || score == 14}
          "Great job, you got most of them correct. Check out these resources to
          help you become an eco-star!"
        {/if}
        {#if score == 15}
          "You're an eco-superstar resource manager!"
        {/if}
      </div>
      <div>
        <p>FUN FACTS!</p>
        <div class="streams-buttons">
          <div>
            <button class="donate" value="donate">
              DONATE: "One person's trash is another person's treasure." All
              usable items should be donated so it can be used by someone else. Giving items another life is a great way to avoid sending more waste to landfill and incinerators.</button
            >
          </div>
          <div>
            <button class="compost" value="compost">
              COMPOST: All food scraps, yard debris, and certified compostable items should be composted whenever possible. About a third of our waste can be turned into compost,
              nature's way of recycling, which is a natural nutritious soil
              amendment.</button
            >
          </div>
          <div>
            <button class="paper" value="paper"
              >PAPER, CARDBOARD: If you can rip it, you can recycle it, make sure
              it is "clean" before you recycle it.</button
            >
          </div>
          <div>
            <button class="mgpc" value="mgpc">
              METAL, GLASS, PLASTIC, CARTON: All metal, glass botles and jars,
              rigid plastics, and cartons can be recycled. Make sure they are
              clean before recycling.</button
            >
          </div>
          <div>
            <button class="special" value="special">
              SPECIAL RECYCLING: Electronics and Hazardous materials need to be
              sent to special recycling facilities. This includes electronics that contain batteries, not ones that plug into an outlet. Hazadous materials include any items that contain toxic chemicals such as paints, gasoline, etc.</button
            >
          </div>
          <div>
            <button class="landfill" value="landfill"
              >LANDFILL: This should always be the last resort! Anything that
              can't be donated, composted, or recycled goes here. Common items: soft plastics, styrofoam.</button
            >
          </div>
        </div>
        <div>
          <p>Every municipality has different rules and practices when it comes to waste management. That is why it is important to check with your local municipality first. This project was created based on New York City's Department of Sanitation recycling rules.</p>
        </div>
      </div>
    {/if}
  </div>
  <div id="footer">
    <div class="score">Score: {score}/{items.length}</div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #11752f;
    text-transform: uppercase;
    font-size: 3.3em;
    font-weight: 450;
  }

  img#waste-item-photo {
    max-height: 80vh;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .streams-buttons button {
    color: white;
  }

  .streams-buttons button.donate {
    background-color: rgb(64, 19, 78);
  }

  .streams-buttons button.compost {
    background-color: rgb(219, 148, 16);
  }

  .streams-buttons button.paper {
    background-color: green;
  }

  .streams-buttons button.mgpc {
    background-color: rgb(45, 112, 156);
  }

  .streams-buttons button.landfill {
    background-color: rgb(108, 127, 138);
  }

  .streams-buttons button.special {
    background-color: rgb(163, 160, 0);
  }

  .streams-buttons button.skip {
    background-color: rgb(255, 59, 59);
  }

  div.score {
    font-size: 3em;
  }
</style>
