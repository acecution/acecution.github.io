<script lang="ts">
    import About from "../About.svelte";
    import Footer from "../Footer.svelte";
    import Header from "../Header.svelte";
    import img1 from "../assets/1.jpg";

</script>

<body>
<header class = "header" style="background-image: url({img1})" id="home">
    <Header></Header>
    <h1 class="header__title">Anastasia Varfolomeeva</h1>
</header>
<main>
    <About></About>
    <Footer></Footer>
</main>
</body>

<style>
    @keyframes header_anim {
        from {
            transform: translateX(-120%);
        }
        to {
            transform: translateX(0);
        }
    }

    h1 {
        position: absolute;
        bottom: 0;
        font-family: "Open Sans", sans-serif;
        font-size: 8em;
        font-weight: 700;
    }

    :global(body) {
        background-color: white;
        padding: 0;
        margin: 0;
    }

    .header__title {
        transform: translateX(0);
        animation-name: header_anim;
        animation-duration: 1.5s;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        text-transform: uppercase;
        color: #fff;
        align-self: center;
    }

    .header {
        display: flex;
        min-height: 100vh;
        padding: 8px 50px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
</style>
