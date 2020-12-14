<script>

    export let channel = {};

</script>

<main>
    <ul>
        {#each channel.contents as post}
            <li>

                <figure>
                    {#if post.image}
                        <img src={post.image.display.url} alt="" />
                    {/if}
                </figure>

                <h3>{post.generated_title}</h3>

            </li>
        {/each}
    </ul>
</main>

<style>

    main {
        padding: 3rem 1rem;
    }

    li {
        display: flex;
        align-items: center;
        margin: 0.25em 0;
    }
    figure {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

</style>
