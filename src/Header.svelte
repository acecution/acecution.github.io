<script lang="ts">
    import type { NavItem } from './types';
  
    export let navItems: NavItem[] = [
      { href: '/', title: 'About' },
      { href: 'comic', title: 'Comic' },
    ];
</script>

<nav class="header">
    <ul>
        {#each navItems as item}
            <li><a href={item.href}>{item.title}</a></li>
        {/each}
    </ul>
</nav>

<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:700,900&subset=cyrillic");
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&subset=cyrillic');
    
    ul {
    position: relative;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    }
    
    nav ul li{
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
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
    /* background:rgba(109, 71, 122, 0.5); */
    background: gray;
    box-shadow: 1px 1px #000;
    position: absolute;
    left: 0;
    bottom: -6px;
    }
    
    nav ul li a:hover::after{
    width: 100%;
    }
    
    .header {
    display: flex;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: transparent; 
    }
    
</style>