<script setup>

</script>

<template>
<div class="topnav">
                <a class="topnav_tab" href="#comparaison">
                    <span class="flex-1"> </span> 
                    <span class="topnav_tab_title">Comparaison</span> 
                    <span class="flex-1 text-neutral-400 
">Diff.</span>
                </a>
                <a class="topnav_tab" href="#eurostoxxnr">
                    <span class="flex-1"> </span> 
                    <span class="flex-1 ">Eurostoxx NR</span> 
                    <span class="flex-1 text-neutral-400 
">Indice</span>
                </a>
                <a class="topnav_tab active" href="#active">
                    <span class="flex-1"> </span> 
                    <span class="flex-1 ">Active</span> 
                    <span class="flex-1 text-neutral-400 
">Fonds</span>
                </a>
                <div class="date_top_nav">
                    <img src="../assets/datetopnav.png" alt="datetopnav">
                </div>
            </div>
</template>

<style>
/* .topnav {
    overflow: hidden;
    background-color: #222;
    position: fixed; /* Set the navbar to fixed position
    top: 0;  Position the navbar at the top of the page 
    width: 100%; 
    height: 60px;
} */
.topnav{
    @apply overflow-hidden bg-zinc-800 fixed top-0 w-full h-16
}

/* .topnav a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 0px 50px;
    text-decoration: none;
    font-size: 14px; 
}*/

.topnav a {
   @apply float-right text-gray-100 text-center pb-0 pt-0 pr-12 pl-12 text-sm
}

/* .topnav a:hover {
    background-color: #ddd;
    color: black;
} */
.topnav a:hover {
    @apply bg-neutral-200 text-black
}


/* .topnav a.active {
    background-color: white;
    color: black;
} */
.topnav a.active {
    @apply bg-white text-black
}

/* .topnav_tab {
    display: flex;
    flex-direction: column;
    min-height: 60px;
} */
.topnav_tab {
    @apply flex flex-col h-16
}

.topnav_tab_empty {
    @apply flex-1
}

.topnav_tab_title {
    @apply flex-1 
}

.topnav_tab_subtitle {
    @apply flex-1 text-neutral-400 
}

.topnav .date_top_nav {
    @apply h-full ml-72 mt-3
}
</style>
