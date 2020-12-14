<script>

    export let post = {};

</script>

<article>

    {#if post.image}
        <img src={post.image.display.url} alt="" />
    {/if}

    <h3>{post.generated_title}</h3>

</article>

<style>

    article {
        margin-bottom: 1rem;
    }

    img {
        margin-bottom: 0.25rem;
    }

</style>
