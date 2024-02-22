<script>
  import Landing from "./Landing.svelte";
  import Home from './Home.svelte';
  
  let nextPage = false;
</script>

{#if !nextPage}
  <Landing on:nextPage={(event) => {
    console.log('hi')
    nextPage = event.detail
  }
  }/>
{:else}
  <Home />
{/if}