<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    import anime from 'animejs/lib/anime.es.js';
    let columns;
    let rows;
    let wrapper;
    let tiles = []
    const colors = [
      "rgb(229, 57, 53)",
      "rgb(253, 216, 53)",
      "rgb(244, 81, 30)",
      "rgb(76, 175, 80)",
      "rgb(33, 150, 243)",
      "rgb(156, 39, 176)"
    ]
  
    onMount(() => {
      window.onresize = () => {
        createGrid()
        console.log(tiles)
      }
  
      createGrid()
    })
  
    const createTiles = quantity => {
      tiles = Array.from({length: quantity}, (_, index) => index)
    }
  
    const createGrid = () => {
      columns = Math.floor(document.body.clientWidth / 75)
      rows = Math.floor(document.body.clientHeight / 75)
  
      createTiles(columns * rows)
  
      wrapper.style.setProperty("--columns", columns)
      wrapper.style.setProperty("--rows", rows)
    }
  
    let count = -1;
    let toggled = false
  
    const handleTileClick = index => {
      toggled = !toggled
      document.body.classList.toggle("toggled");
  
      count += 1
      anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
          grid: [columns, rows],
          from: index
        }),
      })
    }

    let nextPage = false

    const handleLearnMore = e => {
        // console.log()
        dispatch('nextPage', !nextPage)
    }
  
  </script>
  
  <div bind:this={wrapper} id="tiles" class="">
    {#each tiles as tile (tile)}
      <button class="tile" on:click={() => handleTileClick(tile)}></button>
    {/each}
  </div>
  
  
  <div class="centered w-full relative">
    <div id="focus" class="w-full text-center">
      <h1 id="title" class="text-left w-3/4 text-6xl">
        Walking GCN
      </h1>
      <div class="">
        <button class="learn-more bg-white w-3/4 left-1/2 lg:left-1/4 lg:w-1/4 text-2xl" on:click={handleLearnMore}>Learn More</button>
      </div>
    </div>
    <p id="slogan" class="text-left text-4xl w-3/4 mx-auto">Taking better steps to optimize chip design
      <span id="reason" class="block">by speeding up training on large graph neural networks models that predict key design metrics</span>
    </p>
    <div class="w-3/4 mx-auto my-8">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
  
  <style>
    #tiles {
      height: 100vh;
      z-index: 2;
  
      display: grid;
      grid-template-columns: repeat(var(--columns), 1fr);
      grid-template-rows: repeat(var(--rows), 1fr);
  
      
    }
  
    #focus {
      position: relative;
      height: 150px;
    }
  
    .tile:before {
      background-color: rgb(20,20,20);
      content: "";
      position: absolute;
      inset: 0.5px;
    }
  
    .tile {
      position: relative;
      background-color: transparent;
    }
  
    #title {
    position: absolute;
    color: white;
    font-family: "Rubik", sans-serif;
    margin: 0px;
    transition: opacity 1200ms ease;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  
  .centered {
    pointer-events: none;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  #slogan {
    color: white;
    pointer-events: none;
    transition: opacity 1200ms ease;
    z-index: 3;
  }
  
  .learn-more {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    padding: 30px;
    border-radius: 1.5rem;
    opacity: 0;
    box-shadow: 0px 0px 0px;
    transition: transform 3s, box-shadow 3s;
  }
  
  .learn-more:hover {   
    box-shadow: 2px 2px 3px;
    transform: translate(-50%, -50%) scale(1.05);
  }

  
  </style>