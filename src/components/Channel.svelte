<script>

    import Post from './Post.svelte';

    export let channel = {};

</script>

<h1>{channel.title}</h1>

<ul>
    {#each channel.contents as post}
        <li>

            {#if post.source}
                <a href="{post.source.url}" target="_blank" rel="noopener noreferrer">
                    <Post {post} />
                </a>
            {:else}
                <Post {post} />
            {/if}

        </li>
    {/each}
</ul>

<style>

    h1 {
        font-size: 2rem;
        padding: 0 1rem;
        margin: 1rem 0;
        text-align: center;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
