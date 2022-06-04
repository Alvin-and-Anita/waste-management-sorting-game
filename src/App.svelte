<script lang="ts">
  export let score: number;
  export let num_skipped: number;
  let streams = [
    { label: "Donate", key: "donate" },
    { label: "Compost", key: "compost" },
    { label: "Paper/Cardboard", key: "paper" },
    { label: "Metal, Glass, Plastic or Carton", key: "mgpc" },
    { label: "Special Recycling", key: "special" },
    { label: "Landfill", key: "landfill" },
  ];
  let items = [
    { path: "items_for_sorting/photos/hot_paper_cup.jpg", stream: "landfill" },
    {
      path: "items_for_sorting/photos/compostable_bag.jpg",
      stream: "compost",
    },
    { path: "items_for_sorting/photos/plastic_forks.jpg", stream: "mgpc" },
    { path: "items_for_sorting/photos/plastic_lid.jpg", stream: "mgpc" },
    { path: "items_for_sorting/photos/plates.jpg", stream: "compost" },
    { path: "items_for_sorting/photos/styrofoam_cups.jpg", stream: "landfill" },
  ];
  let currentItemIdx = 0;

  function selectStream(event) {
    if (items[currentItemIdx].stream == event.target.value) {
      score += 1;
    }
    currentItemIdx += 1;
  }
</script>

<main>
  <div id="header" class="unselectable title">
    <h1>Waste Management Trainer</h1>
  </div>
  <div id="content">
    {#if currentItemIdx < items.length}
      <div>
        <img
          id="waste-item-photo"
          src={items[currentItemIdx].path}
          alt="FIXME"
        />
      </div>
      <div id="streams-buttons">
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
      <div>All done!</div>
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

  #streams-buttons button {
    color: white;
  }

  #streams-buttons button.donate {
    background-color: rgb(64, 19, 78);
  }

  #streams-buttons button.compost {
    background-color: rgb(219, 148, 16);
  }

  #streams-buttons button.paper {
    background-color: green;
  }

  #streams-buttons button.mgpc {
    background-color: rgb(45, 112, 156);
  }

  #streams-buttons button.landfill {
    background-color: rgb(108, 127, 138);
  }

  #streams-buttons button.special {
    background-color: rgb(163, 160, 0);
  }

  #streams-buttons button.skip {
    background-color: rgb(255, 59, 59);
  }

  div.score {
    font-size: 3em;
  }
</style>
