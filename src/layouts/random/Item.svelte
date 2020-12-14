<script>

    export let post = {};

    function top(){
        return Math.random() * window.innerHeight;
    }
    function left(){
        return Math.random() * window.innerWidth;
    }

</script>

{#if post.image}    
    <article style="top: {top()}px; left: {left()}px;">

        <img src={post.image.display.url} alt="" />

    </article>
{/if}

<style>

    article {
        position: absolute;
        width: 15vw;
    }
    img {
        width: 100%;
        height: auto;
    }

</style>
