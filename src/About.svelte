<script lang="ts">
  import type { AboutSection } from './types';

  export let aboutSection: AboutSection = {
    title: 'About Me',
    description: [
      '18 y.o.',
      'RU/ENG',
      'Innopolis University B23-ISE-05 student',
      {
        title: 'Trusted Technologies',
        items: ['C/C++', 'Java', 'Python', 'Haskell'],
      },
      'Studying Front-end Web Development at this course ;)',
    ],
  };
</script>


<article class="article_first" id="about">
  <h2>{aboutSection.title}</h2>
  <ul class="list__about">
    {#each aboutSection.description as item}
      {#if typeof item === 'object'}
        <li>
          {item.title}
          <ul>
            {#each item.items as tech}
              <li>{tech}</li>
            {/each}
          </ul>
        </li>
      {:else}
        <li>{item}</li>
      {/if}
    {/each}
  </ul>
</article>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:700,900&subset=cyrillic");
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&subset=cyrillic');

h2 {
position: relative;
font-family: "Montserrat", sans-serif;
font-size: 5em;
font-weight: 700;
padding-left: 70px;
margin-bottom: 0px;
color: #333;
}

ul {
position: relative;
font-family: 'Open Sans', sans-serif;
font-size: 1.2em;
}

ul ul {
font-size: 1em;
}

nav ul li{
display: inline-block;
list-style: none;
}

.article_first {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
/* 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}

.list__about {
padding-left: 120px;
/* border: 1px solid black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 30px;  */
}
</style>