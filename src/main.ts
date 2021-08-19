import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		num_skipped: 0,
		score: 0,
	}
});

export default app;
