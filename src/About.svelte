<script lang="ts">
  import type { AboutSection } from './types';

  export let aboutSection: AboutSection = {
    title: 'About Me',
    description: [
      '18 y.o.',
      'RU/ENG',
      'Innopolis University B23-ISE-05 student',
      'Studying Front-end Web Development at this course ;)',
    ],
  };

  export let trustedTechnologies: AboutSection = {
    title: '',
    description: [
      'C/C++', 
      'Java', 
      'Python', 
      'Haskell',
    ]
  };
</script>

<div class="container">
  <div class="about-block">
    <h2>{aboutSection.title}</h2>
    <div class="about-content"> 
      <ul>
        {#each aboutSection.description as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="tech-block">
    <h2 class="tech-title">{trustedTechnologies.title}</h2>
    <div class="about-content"> 
      <ul>
        {#each trustedTechnologies.description as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:700,900&subset=cyrillic");
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&subset=cyrillic');

h2 {
position: relative;
font-family: "Montserrat", sans-serif;
font-size: 2em;
font-weight: 700;
margin-bottom: 0px;
margin-top: 0px;
color: #333;
}

ul {
position: relative;
font-family: 'Open Sans', sans-serif;
font-size: 1.2em;
margin-top: 0px;
margin-bottom: 0px;
left: -15px;
}

nav ul li{
display: inline-block;
list-style: none;
}

.container {
  display: flex;
  gap: 30px;
  margin-left: 200px;
}

.about-block {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: white;
  width: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px; 
  box-shadow: 0 0 10px black;
}

.tech-block {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: white;
  border-radius: 30px; 
  box-shadow: 0 0 10px black;
  width: 100px;
  padding: 20px;
}

</style>
