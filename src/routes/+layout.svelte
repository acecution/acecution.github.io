<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";
  import Favicon from '../assets/pfp.jpg'; 
  import { page } from "$app/stores";

  let defaultTitle = 'Home';
  let description = 'My portfolio website for SUM24-FWD course.';
  let author = 'Anastasia Varfolomeeva';

  $: pageTitle = $page.data.title ? `${$page.data.title} | ${defaultTitle}` : defaultTitle;

  onMount(() => {
      document.title = pageTitle; 
  });

</script>

<svelte:head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{pageTitle}</title>
<meta name="author" content={author} />
<meta name="description" content={description} />
<link rel="icon" href={Favicon} /> 
</svelte:head>

<Header></Header>

<slot />

<Footer></Footer>

