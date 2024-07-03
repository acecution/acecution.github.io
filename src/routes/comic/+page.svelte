<script lang='ts'>
    import Comic from "../../Comic.svelte";
    import img2 from "../../assets/2.jpg";
    import img3 from "../../assets/3.jpg";
    function getRandomImageUrl() : string {
        const imageUrls : string[] = [
            img2,
            img3,
        ];
        return imageUrls[Math.floor(Math.random() * imageUrls.length)];
    }

    document.body.style.backgroundImage = `url(${getRandomImageUrl()})`;
</script>

<nav><ul><li><a href="/">Go back</a></li></ul></nav>

<Comic></Comic>

<div class="hint">Hint: Try refreshing the page ;)</div>

<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:700,900&subset=cyrillic");
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&subset=cyrillic');

    .hint {
        font-family: 'Open Sans', sans-serif;
        color: #F4F6F7;
        text-align: center;
        margin-top: 10px;
    }

    nav {
        padding: 20px 70px;
    }

    nav ul li a{
        color: #F4F6F7;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
        font-size: 36px;
        text-shadow: 2px 2px 2px #000;
        text-align: center;
        position: relative;
    }

    nav ul li a::after{
        content: '';
        width: 0;
        height: 3px;
        background:rgba(109, 71, 122, 0.5);
        box-shadow: 1px 1px #000;
        position: absolute;
        left: 0;
        bottom: -6px;
    }

    nav ul li a:hover::after{
        width: 100%;
    }

</style>
