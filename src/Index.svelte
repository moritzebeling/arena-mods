<script>

	import {getChannel} from './utilities/getChannel.js';
	import Channel from './components/Channel.svelte';

	const channelId = 'photo_class_websites';

	let load = getChannel(channelId);

</script>

<main>

	{#await load}
		<p>Please wait...</p>
	{:then channel}

		<Channel {channel} />

	{:catch error}
		<p style="color: red">Oh no! {error.message}</p>
	{/await}

</main>
