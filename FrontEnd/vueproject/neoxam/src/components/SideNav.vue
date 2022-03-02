<script setup>
    import { ref , computed } from 'vue'
    const retracted = ref(true)
    
</script>

<template>
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
 <nav class="nav" :class="{ retract: retracted }">
    <button @click="retracted = !retracted">
        {{ retracted ? 'Show' : 'Hide' }}
    </button>
        <div class="greenrockimg">
            <img src="../assets/greenrock.png" width="100%" alt="greerock">
        </div>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">account_balance_wallet</i>
            </div>
            <span class="nav__label">Fonds</span>
        </a>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">dashboard</i>
            </div>
            <span class="nav__label">Vue d'ensemble</span>
        </a>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">insights</i>
            </div>
            <span class="nav__label">Performance</span>
        </a>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">search</i>
            </div>
            <span class="nav__label">Contribution</span>
        </a>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">bar_chart</i>
            </div>
            <span class="nav__label">Attribution</span>
        </a>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">pie_chart_outline</i>
            </div>
            <span class="nav__label">Allocation</span>
        </a>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">view_list</i>
            </div>
            <span class="nav__label">Ligne-à-ligne</span>
        </a>
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
            <i class="material-icons md-36">folder</i>
            </div>
            <span class="nav__label">Documents</span>
        </a>
        <!-- <a href="#" syle="float: bottom;" class="nav_link">
            <div class="dropup">
                <button onclick="myFunction()" class="dropbtn">
                    <i style="float:left" class="material-icons md-36">group_work</i>
                    <div class="nav_label">
                        <scan>Lab</scan>
                        <i style="float:right" class="material-icons md-36">keyboard_double_arrow_up</i>
                    </div>
                </button>
                <div id="myDropup" class="dropup-content">
                    <a href="#clientedition"><i class="fa-solid fa-arrow-right-arrow-left"></i> Client Edition</a>
                    <a href="#dataaudit"><i class="fa-solid fa-coins"></i> Data Audit</a>
                    <a href="#dataquality"><i class="fa-solid fa-list-check"></i> Data Quality</a>
                    <a href="#Traductions"><i class="fa-solid fa-globe"></i> Traductions</a>
                    <a href="#Deconexion"><i class="fa-solid fa-arrow-right-from-bracket"></i> Deconexion</a>
                </div>
            </div>
        </a> -->
</nav>

</template>

<style scoped>
.nav {
flex-shrink:0;
display: flex;
flex-direction: column;
width: 250px;
height: inherit;
position: relative;
background-color: #222;
transition: width 2s;
flex-shrink: 0;
font-size: 18px;
}


.nav.retract {
    width: var(--nav-icon-width);
}
.nav.retract .nav__label {
    display: none;
  }

/* .nav__link {
    display: flex;
    align-items: center;
    color:white;
    text-decoration: none;
    height: 60px;
} */
.nav__link {
    @apply flex items-center text-white h-16
}

/* .nav__link:hover {
    color: #f1f1f1;
    background-color: grey;
} */
.nav__link:hover {
    @apply bg-gray-500 text-gray-50
}


.nav__icon-container {
    width: var(--nav-icon-width);
    height: var(--nav-icon-width);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}





.greenrockimg{
    @apply text-center
}


.material-icons.md-36 { font-size: 36px; }
</style>