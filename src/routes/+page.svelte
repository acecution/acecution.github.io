<script lang="ts">
    import About from "../About.svelte";
    import pfp from "../assets/pfp.jpg";

</script>

<div class="container">
  <main>
      <About></About>
  </main>
  <div class = 'header'>
    <div class="header-content">
      <img src="{pfp}" alt="Anastasia Varfolomeeva" class="profile-picture"/> 
      <h1>Anastasia Varfolomeeva</h1>
    </div>
</div>
</div>

<style>
    :global(body) {
            background-color: white;
            padding: 0;
            margin: 0;
            background-image: url("../assets/3.jpg");
        }

    h1 {
        text-transform: uppercase;
        color: #fff;
        font-family: "Open Sans", sans-serif;
        font-size: 4em;
        line-height: 1.2;
        margin-left: 30px;
    }

    main {
        flex: 1;
    }

    .header {
        display: flex;
        min-height: 30vh;
        padding: 8px 50px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        gap: 13em;
        padding-top: 100px;
        padding-bottom: 150px;
    }

    .header-content {
        display: flex;
        align-items: center;
    }

    .profile-picture {
        width: 170px;
        height: auto; 
        border-radius: 50%;
        border: 3px solid #ff69b4; 
        box-shadow: 0 0 10px #ff69b4;
    }

</style>

