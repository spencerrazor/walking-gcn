<script>

</script>

<main class="pb-16 lg:pb-24 bg-[rgb(20,20,20)] antialiased">
    <header class="bg-[url(chip.jpeg)] w-full h-[300px] lg:h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div class="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
            <h1 class="mb-4 text-4xl font-extrabold leading-none text-white lg:text-6xl text-left lg:text-center md:text-left">Walking GCN - Keeping connections alive with smart batching</h1>
        </div>
    </header>
    <div class="bg-[url(/dragon-scales.svg)] bg-[200%] flex relative z-20 justify-between p-6 lg-m-36 mx-0 md:mx-4 max-w-screen-xl bg-[rgb(20,20,20)] rounded xl:-m-32 xl:p-9 xl:mx-auto">
        <article class="text-white xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h2 class="text-bold text-4xl mb-4">Introduction</h2>
        <p class="lead text-lg mb-4">
            <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                &#9;Netlist sub-graph partitioning
            </a>
            optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
        </p>
        <p class="lead text-lg mb-4">
            Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
        </p>
        <p class="lead text-lg mb-4">
            We base our model off of 
            <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                Cluster GCN
            </a>
            . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
        </p>
        
        <h2 class="text-bold text-3xl mb-4">What is a Chip?</h2>
        
            <figure class="mb-4"><img src="data:image/jpeg;base64,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" alt="" class="mx-auto w-full lg:w-5/6 rounded-lg">
                <figcaption class="text-center">Source: https://www.zdnet.com/article/samsung-applies-3d-stacking-tech-on-7nm-euv-chips/ </figcaption>
            </figure>

            <h2 class="text-bold text-3xl mb-4">Stages of Chip Design</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-3xl mb-4">The Congestion Problem</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-3xl mb-4">Our Method</h2>
            <h2 class="text-bold text-xl mb-4">Data</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-xl mb-4">Preprocessing</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-xl mb-4">Batching</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-xl mb-4">Model</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-xl mb-4">Evaluation</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-3xl mb-4">Results</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
            <h2 class="text-bold text-3xl mb-4">Conclusion</h2>
            <p class="lead text-lg mb-4 ">
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Netlist sub-graph partitioning
                </a>
                optimizes the efficiency of the VLSI (Very Large Scale Integration) Design flow. We propose a model to reduce compute costs and speed up training times on congestion prediction models by using Graph Neural Networks (GNNs) to learn an efficient partitioning strategy.
            </p>
            <p class="lead text-lg mb-4 ">
                Our goal is to identify clusters which can pre-process net-list data and be easily fed to downstream congestion model. We compare our GNN’s self-learning model to several partitioning algorithms as a baseline.
            </p>
            <p class="lead text-lg mb-4 ">
                We base our model off of 
                <a href="#" style="text-decoration: underline; color: rgba(0, 212, 255, 1);">
                    Cluster GCN
                </a>
                . Netlist partitioning has been a major focus to address the increasing complexity of circuits as explained by Moore’s Law. While shallow and heuristic methods have been the focus of much research on partitioning, the applications of deep learning have been less explored.
            </p>
        </article>
        <aside class="hidden xl:block" aria-labelledby="sidebar-label">
            <div class="xl:w-[336px] sticky top-6">
                <h3 id="sidebar-label" class="sr-only">Sidebar</h3>
                <div class="mb-8">
                    <h4 class="mb-2 text-sm font-bold text-white uppercase">Questions to Think About</h4>
                    <p class="mb-4 text-md text-gray-300">Why might it be good to predict congestion in a chip design?</p>
                    <p class="mb-4 text-md text-gray-300">Why might it be good to predict congestion in a chip design?</p>
                </div>
                <div class="mb-12">
                    <h4 class="mb-4 text-sm font-bold text-white uppercase">Common Definitions</h4>
                    <div class="mb-6 flex items-center bg-[rgb(20,20,20)] p-4 rounded-lg">
                        <div>
                            <h5 class="mb-2 text-lg font-bold leading-tight text-white ">Netlist</h5>
                            <p class="mb-2 text-gray-300">Over the past year, Volosoft has undergone changes.</p>
                            <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-[#00D4FF] hover:no-underline">
                                See Detailed
                            </a>
                        </div>
                    </div>
                    <div class="mb-6 flex items-center bg-gray-600 p-4 rounded-lg">
                        <div>
                            <h5 class="mb-2 text-lg font-bold leading-tight text-white ">Netlist</h5>
                            <p class="mb-2 text-gray-300">Over the past year, Volosoft has undergone changes.</p>
                            <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-[#00D4FF] hover:no-underline">
                                See Detailed
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mb-8">
                    <h4 class="mb-2 text-sm font-bold text-white uppercase">Supplmental Video</h4>

                    <div class="flex gap-2">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M21.7 8c0-.7-.4-1.3-.8-2-.5-.5-1.2-.8-2-.8C16.2 5 12 5 12 5s-4.2 0-7 .2c-.7 0-1.4.3-2 .9-.3.6-.6 1.2-.7 2l-.2 3.1v1.5c0 1.1 0 2.2.2 3.3 0 .7.4 1.3.8 2 .6.5 1.4.8 2.2.8l6.7.2s4.2 0 7-.2c.7 0 1.4-.3 2-.9.3-.5.6-1.2.7-2l.2-3.1v-1.6c0-1 0-2.1-.2-3.2ZM10 14.6V9l5.4 2.8-5.4 2.8Z" clip-rule="evenodd"/>
                        </svg>
                        <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-[#00D4FF] hover:no-underline">Learn about Cluster GCN via Stanford</a>
                    </div>

                      
                </div>
                <div>   
                    <a href="#" class="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                    </a>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Students and Teachers, solving billion dollar research problems</p>
                </div>
            </div>
        </aside>
    </div>
    </main>

    <aside aria-label="Related articles" class="py-8 lg:py-24 bg-[rgb(20,20,20)]">
    <div class="px-8 lg:px-4 mx-auto max-w-screen-xl">
        <h2 class="mb-6 lg:mb-8 text-2xl font-bold text-white">References</h2>
        <div class="grid gap-6 lg:gap-12 md:grid-cols-2">
            <article class="flex flex-col xl:flex-row">
                <a href="https://arxiv.org/abs/1905.07953" class="mb-2 xl:mb-0">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mr-5 max-w-sm" alt="Image 1">
                </a>
                <div class="flex flex-col justify-center">
                    <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                        <a href="https://arxiv.org/abs/1905.07953">Cluster-GCN</a>
                    </h2>
                    <p class="mb-4 text-gray-300 max-w-sm text-xl">A batching strategy that clusters based off community detection algorithms and smart batching techniques.</p>
                    <a href="https://arxiv.org/abs/1905.07953" class="inline-flex items-center font-medium underline underline-offset-4 text-[#00D4FF] hover:no-underline">
                        Read in 2 minutes
                    </a>
                </div>
            </article>
            <article class="flex flex-col xl:flex-row">
                <a href="https://arxiv.org/abs/1905.07953" class="mb-2 xl:mb-0">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mr-5 max-w-sm" alt="Image 1">
                </a>
                <div class="flex flex-col justify-center">
                    <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                        <a href="https://arxiv.org/abs/1905.07953">Cluster-GCN</a>
                    </h2>
                    <p class="mb-4 text-gray-300 max-w-sm text-xl">A batching strategy that clusters based off community detection algorithms and smart batching techniques.</p>
                    <a href="https://arxiv.org/abs/1905.07953" class="inline-flex items-center font-medium underline underline-offset-4 text-[#00D4FF] hover:no-underline">
                        Read in 2 minutes
                    </a>
                </div>
            </article>
            <article class="flex flex-col xl:flex-row">
                <a href="https://arxiv.org/abs/1905.07953" class="mb-2 xl:mb-0">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mr-5 max-w-sm" alt="Image 1">
                </a>
                <div class="flex flex-col justify-center">
                    <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                        <a href="https://arxiv.org/abs/1905.07953">Cluster-GCN</a>
                    </h2>
                    <p class="mb-4 text-gray-300 max-w-sm text-xl">A batching strategy that clusters based off community detection algorithms and smart batching techniques.</p>
                    <a href="https://arxiv.org/abs/1905.07953" class="inline-flex items-center font-medium underline underline-offset-4 text-[#00D4FF] hover:no-underline">
                        Read in 2 minutes
                    </a>
                </div>
            </article>
            <article class="flex flex-col xl:flex-row">
                <a href="https://arxiv.org/abs/1905.07953" class="mb-2 xl:mb-0">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mr-5 max-w-sm" alt="Image 1">
                </a>
                <div class="flex flex-col justify-center">
                    <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                        <a href="https://arxiv.org/abs/1905.07953">Cluster-GCN</a>
                    </h2>
                    <p class="mb-4 text-gray-300 max-w-sm text-xl">A batching strategy that clusters based off community detection algorithms and smart batching techniques.</p>
                    <a href="https://arxiv.org/abs/1905.07953" class="inline-flex items-center font-medium underline underline-offset-4 text-[#00D4FF] hover:no-underline">
                        Read in 2 minutes
                    </a>
                </div>
            </article>
        </div>
    </div>
    </aside>

    <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
            <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Why can't we just randomly split the graph into multiple batches?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">You might have been in a classroom where you sat next to your friends, and the teacher randomly assigned you groups instead of grouping you with your friends. You might have thought that working with your friends is much easier. Well, this is the same in large graph networks. Tighter communities adapt well with each other and have more in common within a large graph networks, which is why we have to be more careful when we split our graph.</p>
                    </div>
                    <div class="mb-10">                        
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What was the biggest roadblock you guys had?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            How can I run the same experiments that you did?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.</p>
                        <p class="text-gray-500 dark:text-gray-400">Feel free to <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            I want to build more than one project. Is that allowed?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.</p>
                        <p class="text-gray-500 dark:text-gray-400">Find out more information by <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
                    </div>
                </div>
                <div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What was your tech stack?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">We used Python and common deep learning and graph manipulation libraries, including PyTorch, PyTorch Geometric, and Networkx. For the front-end, we used Svelte and Tailwind CSS.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Do you guys have socials?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">The <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.</p>
                        <p class="text-gray-500 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What improvements can you make to your research?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.</p>
                        <p class="text-gray-500 dark:text-gray-400">Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What is the future of this area of research?
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.</p>
                        <p class="text-gray-500 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p>
                        <p class="text-gray-500 dark:text-gray-400">Find out more information by <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

    <section class="bg-gray-200 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16 flex flex-col items-center">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Meet the Squad</h2>
                <p class="mb-4 font-light text-gray-500 sm:text-xl">Thank you to all the mentors part of our project 👏</p>
                <ul class="text-gray-500 list-inside flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <a href="https://linkedin.com/in/lindsey-kostas-a95115105" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                        <li class="flex items-center justify-left gap-2 bg-white p-2 rounded-lg shadow-lg">
                            <img class="w-10 h-10 rounded-full object-cover" src="https://media.licdn.com/dms/image/C5603AQEcz9nkbN6eGg/profile-displayphoto-shrink_200_200/0/1517251687831?e=2147483647&v=beta&t=1AWW-p2ubRmo1s1xFIG97XGA6Gpy0WfP2JTojJgcgow" alt="Rounded avatar">
                            <p>
                                Lindsey Kostas
                            </p>
                            <svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                            </svg>   
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/onur-atan-07598949" class="hover:scale-110 text-black">
                        <li class="flex items-center justify-left gap-2 bg-white p-2 rounded-lg shadow-lg">
                            <img class="w-10 h-10 rounded-full object-cover" src="https://media.licdn.com/dms/image/C5603AQEYIKSuxEWSiQ/profile-displayphoto-shrink_200_200/0/1537164855985?e=2147483647&v=beta&t=KYZ_wn96EHVzkauGF4J2M2Cg5mdo8RflgJpVAejel-U" alt="Rounded avatar">
                            <p>
                                Onur Atan
                            </p>
                            <svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                            </svg>   
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/dhimnsen" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                        <li class="flex items-center justify-left gap-2 bg-white p-2 rounded-lg shadow-lg">
                            <img class="w-10 h-10 rounded-full object-cover" src="https://media.licdn.com/dms/image/C5603AQGoWmGiAD0L2A/profile-displayphoto-shrink_200_200/0/1516784314606?e=2147483647&v=beta&t=_x4GX2mlZirgwPofDR2OZp_TOxjVNYb_PWQzFnZwuoA" alt="Rounded avatar">
                            <p>
                                Dhiman Sengupta
                            </p>
                            <svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                            </svg>   
                        </li>
                    </a>
                </ul>
            </div> 
            <div class="w-full grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="bg-white shadow-xl py-4 rounded-lg text-center text-gray-500">
                    <img class="shadow-xl mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="srujan.png" alt="Bonnie Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                        <a href="#">Srujan Gutta</a>
                    </h3>
                    <p>Lead Model Engineer</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="#" class="text-[#39569c] hover:text-gray-900">
                                <svg class="w-6 h-6 text-[#00D4FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
                                  </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                                  </svg>  
                                    
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="bg-white shadow-xl py-4 rounded-lg text-center text-gray-500">
                    <img class="shadow-xl mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="spencer.png" alt="Helene Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Spencer Wueste</a>
                    </h3>
                    <p>Front-end / Model Pipeline</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6 text-[#00D4FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
                                  </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                                  </svg>   
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="bg-white shadow-xl py-4 rounded-lg text-center text-gray-500">
                    <img class="shadow-xl object-cover mx-auto mb-4 w-36 h-36 rounded-full" src="james.png" alt="Jese Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">James Bentley</a>
                    </h3>
                    <p>Data Analyst / Data Augmentation</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6 text-[#00D4FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
                                  </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                                  </svg>  
                                    
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="bg-white shadow-xl py-4 rounded-lg text-center text-gray-500">
                    <img class="shadow-xl mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="tommy.png" alt="Joseph Avatar">
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Tommy Shen</a>
                    </h3>
                    <p>Data Analyst / Data Augmentation</p>
                    <ul class="flex justify-center mt-4 space-x-4">
                        <li>
                            <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6 text-[#00D4FF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
                                  </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                                  </svg>  
                                    
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
      </section>

    <footer class="bg-[rgb(20,20,20)] antialiased">
    <div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <div class="text-center">
            <a href="#" class="flex justify-center items-center mb-5 text-2xl font-semibold text-white">
                <svg class="mr-2 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z"/>
                  </svg>
                Walking GCN    
            </a>
            <span class="block text-sm text-center text-gray-300">© 2023-2024 <a href="#" class="hover:underline">UC San Diego | Qualcomm</a>. All Rights Reserved.
            </span>
    </div>
    </footer>