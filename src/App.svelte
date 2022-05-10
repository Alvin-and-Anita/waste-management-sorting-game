<script lang="ts">
	export let score: number;
	export let num_skipped: number;
	let streams = [
		{ label: 'Compostable', key: 'compostable' },
		{ label: 'Paper/Cardboard', key: 'paper' },
		{ label: 'Metal, Glass, Plastic or Carton', key: 'mgpc' },
		{ label: 'Landfillz', key: 'landfill' },
	];
	let items = [
		{ path: 'items_for_sorting/photos/hot_paper_cup.jpg', stream: 'landfill' }, 
		{ path: 'items_for_sorting/photos/compostable_bag.jpg', stream: 'compostable' }, 
		{ path: 'items_for_sorting/photos/plastic_forks.jpg', stream: 'mgpc' }, 
		{ path: 'items_for_sorting/photos/plastic_lid.jpg', stream: 'mgpc' }, 
		{ path: 'items_for_sorting/photos/plates.jpg', stream: 'compostable' }, 
		{ path: 'items_for_sorting/photos/styrofoam_cups.jpg', stream: 'landfill' }, 
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
	<div id="header" class="unselectable title"><h1>Waste Management Trainer</h1></div>
	<div id="content">
		{#if currentItemIdx < items.length}
			<div><img id="waste-item-photo" src={items[currentItemIdx].path} alt="FIXME"></div>
			<div id="streams-buttons">
				{#each streams as stream}
					<button on:click={selectStream} value={stream.key}>{stream.label}</button>
				{/each}
				<button on:click={() => { currentItemIdx += 1; }}>Skip</button>
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
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	img#waste-item-photo {
		max-height: 80vh;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
