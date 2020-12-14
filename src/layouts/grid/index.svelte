<script>

    import Item from './Item.svelte';

    export let channel = {};

</script>

<main>

    <ul>
        {#each channel.contents as post}
            <li>

                {#if post.source}
                    <a href="{post.source.url}" target="_blank" rel="noopener noreferrer">
                        <Item {post} />
                    </a>
                {:else}
                    <Item {post} />
                {/if}

            </li>
        {/each}
    </ul>

</main>

<style>

    main {
        padding-top: 3rem;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding: 0 1rem;
        margin: 1rem 0;
        gap: 1rem;
    }

    a {
        display: block;
        transition: opacity 300ms ease;
    }
    a:hover {
        opacity: 0.7;
    }

</style>
