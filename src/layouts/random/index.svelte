<script>

    import Item from './Item.svelte';
    
    export let channel = {};

</script>

<main>

    <ul>
        {#each channel.contents as post}
            <li>

                <Item {post} />

            </li>
        {/each}
    </ul>

</main>

<style>
</style>
