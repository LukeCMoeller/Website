<template>
  <header :class="styles['headerContainer']">
    <!--Header bar-->
    <div :class="styles.headerTop" style="background-color: gainsboro; display: grid; justify-content: end; grid-auto-flow: column; padding-top: .1rem;"></div>
    
    <!--Header-->
    <div :class="styles.headerTop">
      <!--Header Icon-->
      <a href="https://ksu.edu" :class="styles.noBackground">
        <img :src="logo" alt="Logo" :class="styles.logo" style="height: 40px;" />
      </a>
      <div :class="styles.divider"></div>
      <!--Header Text-->
      <a href="https://www.celestegame.com/" :class="styles.noBackground">
        <h1 :class="styles.headerTitle">My Awsome Website</h1>
      </a>
    </div>

    <!--Navbar-->
    <Menubar :model="items" style="margin: 0; padding: 0;">
  <template #item="{ item, props }">
    <router-link v-if="item.route" :to="item.route" style="padding: 0; background-color: transparent;">
      <a v-bind="props.action">
        <span :style="{ color: 'black', fontWeight: item.root ? 'bold' : 'normal' }">
          {{ item.label }}
        </span>
      </a>
    </router-link> 
    <a v-else v-bind="props.action">
      <span :style="{ color: 'black', fontWeight: item.root ? 'bold' : 'normal' }">
        {{ item.label }}
      </span>
    </a>
  </template>
</Menubar>



  </header>
</template>
<script>
import { defineComponent, computed } from 'vue';
import styles from '../Styles/HeaderStyles.module.css';
import Menubar from 'primevue/menubar';
import logo from '../../assets/vue.svg';
export default defineComponent({
  name: 'Header',
  components: {
    Menubar,
  },
setup() {
    const items = computed(() => [
      { label: 'Home', route: '/home', root: true },
      {
        label: 'About Me', root: true,
        items: [
          { label: 'AboutMe', route: '/AboutMe' },
          { label: 'Projects', route: '/Projects' }
        ]
      },
      { label: 'Hobbies', route: '/Hobbies', root: true },
      { label: 'Ciriculm?', route: '/School', root: true },
    ]);
    return {
      logo,
      styles,
      items,
    };
  },
});
</script>

<style>

.p-menubar {
  background-color: #823ddd !important;
  width: 100% !important; 
  border-color: #823ddd !important; 
  border-radius: 0 !important;
  padding-left: 9vw !important;
  position: relative !important;
}
.p-menubar-item-content:hover{
  background-color: transparent !important;
}
.p-menubar-item-link:hover{
  background-color: transparent !important;
  text-decoration: underline rgb(255, 255, 255) 3px;
  text-underline-offset: 5px; 
}
.p-menubar-item-content{
  background-color: transparent !important;
}
.p-menubar-submenu{
  background-color: #823ddd !important;
  border-color: #823ddd !important;
  border-radius: 0 !important;
}
.p-menubar-root-list {
  display: flex !important;
  flex-direction: row !important;
  background-color: #823ddd !important;
  border-color: #823ddd !important;
  border-radius: 0 !important;
  margin-left: 0 !important;
  padding-left: 0 !important;
}
.p-menubar-root-list > li {
  flex: none !important;
}

</style>
