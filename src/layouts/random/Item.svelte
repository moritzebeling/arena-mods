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
        width: 20vw;
    }
    img {
        width: 100%;
        height: auto;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    }

</style>
