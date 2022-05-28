<script lang="ts">
  export let score: number;
  export let num_skipped: number;
  let streams = [
    { label: "Compostable", key: "compostable" },
    { label: "Paper/Cardboard", key: "paper" },
    { label: "Metal, Glass, Plastic or Carton", key: "mgpc" },
    { label: "Landfill", key: "landfill" },
  ];
  let items = [
    { path: "items_for_sorting/photos/hot_paper_cup.jpg", stream: "landfill" },
    {
      path: "items_for_sorting/photos/compostable_bag.jpg",
      stream: "compostable",
    },
    { path: "items_for_sorting/photos/plastic_forks.jpg", stream: "mgpc" },
    { path: "items_for_sorting/photos/plastic_lid.jpg", stream: "mgpc" },
    { path: "items_for_sorting/photos/plates.jpg", stream: "compostable" },
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
        <button class="compostable" on:click={selectStream} value="compostable">
          Compostable
        </button>
        <button class="paper" on:click={selectStream} value="paper"
          >Paper/Cardboard</button
        >
        <button class="mgpc" on:click={selectStream} value="mgpc">
          Metal, Glass, Plastic or Carton
        </button>
        <button class="landfill" on:click={selectStream} value="landfill"
          >Landfill</button
        >
        <button
          class="skip"
          on:click={() => {
            currentItemIdx += 1;
          }}>Skip</button
        >
      </div>
    {:else}
      <div>All done!</div>
    {/if}
  </div>
  <div id="footer">
    <div>Score: {score}/{items.length}</div>
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

  #streams-buttons button.compostable {
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

  #streams-buttons button.skip {
    background-color: rgb(255, 59, 59);
  }
</style>
