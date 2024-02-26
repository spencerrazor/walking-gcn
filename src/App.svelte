<script>
  import Landing from "./Landing.svelte";
  import Home from './Home.svelte';
  import { fade, slide } from 'svelte/transition';
  import { quintOut, expoInOut } from 'svelte/easing';
  
  let nextPage;
</script>

{#if !nextPage}
  <div out:slide={{duration: 1500, easing: expoInOut, axis: 'y' }}>
  <Landing on:nextPage={(event) => {
    console.log('hi')
    nextPage = event.detail
  }}/>
  </div>
{:else}
  <div transition:slide={{duration: 1500, easing: expoInOut, axis: 'y' }}>
    <Home />
  </div>
{/if}