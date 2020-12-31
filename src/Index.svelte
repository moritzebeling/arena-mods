<script>

	import {onMount} from 'svelte';
	import {getChannel} from './utilities/getChannel.js';

	import Grid from './layouts/grid/index.svelte';
	import List from './layouts/list/index.svelte';
	import Random from './layouts/random/index.svelte';

	const layouts = [
		{ title: "Grid", component: Grid },
		{ title: "List", component: List },
		{ title: "Random", component: Random },
	];
	let layout = layouts[0];

	$: {
		console.log( layout )
	}

	const channelId = 'photo_class_websites';
	let load;

	onMount(()=>{
		load = getChannel(channelId);
	});

</script>

{#if load}

	<header>
		{#if load}
			{#await load}
				<h1>Please wait ...</h1>
			{:then channel}
				<h1>{channel.title}</h1>
			{:catch error}
				<h1 class="error">{error.message}</h1>
			{/await}
		{/if}
		<select bind:value={layout}>
			{#each layouts as l}
				<option value={l}>{l.title}</option>
			{/each}
		</select>
	</header>

	{#await load}
		<!-- loading -->
	{:then channel}

		<svelte:component this={layout.component} {channel}/>

	{:catch error}
		<!-- error -->
	{/await}

{/if}

<style>

	header {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	} 

</style>