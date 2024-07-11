<script lang="ts">
    export let data; 
  
    let imgSrc = data.img;
    let imgAlt = data.alt;
    let comicTitle = `Title: ${data.safe_title}`;
    let datePublished = `Published: ${data.date.toLocaleDateString()}`;
    let dateAgo = `The comic was released ${data.timeAgo}.`;

    let title = 'Comic';

</script>

<svelte:head>
    <title>{title}</title> 
</svelte:head>
  
<div class="comic">
  <div class="comic-container">
    <div class="comic-image">
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <div class="comic-title">
      <span>{comicTitle}</span>
    </div>
    <div class="comic-date">
      <span>{datePublished}</span>
    </div>
    <div class="comic-ago">
      <span>{dateAgo}</span>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:700,900&subset=cyrillic");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&subset=cyrillic');
  
  .comic {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 100px;
      padding-top: 100px;
  }

  .comic-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #F4F6F7;
      width: fit-content;
      padding-bottom: 10px;
      border: 10px outset lightblue;
  }

  .comic-title, .comic-date, .comic-ago {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.2em;
  }

  .comic-title {
      font-weight: bold;
  }

</style>
  
  