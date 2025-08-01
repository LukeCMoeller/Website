<template>
  <header :class="styles['headerContainer']">
    <!-- Top bar -->
    <div :class="styles.headerTop" style="background-color: gainsboro; display: grid; justify-content: end; grid-auto-flow: column; padding-top: 0.1rem;"></div>
    
    <!-- Header with logo and title -->
    <div :class="styles.headerTop">
      <a href="https://ksu.edu" :class="styles.noBackground">
        <img :src="logo" alt="Logo" :class="styles.logo" style="height: 40px;" />
      </a>
      <div :class="styles.divider"></div>
      <!--<a href="https://www.celestegame.com/" :class="styles.noBackground">-->
        <h2 :class="styles.headerTitle">Luke Moeller - Computer Science</h2>
      
    </div>

    <!-- Navbar -->
    <Menubar :model="items" style="margin: 0; padding: 0;">
      <template #item="{ item, props }">
        <router-link :to="item.route" style="padding: 0; background-color: transparent;">
          <a v-bind="props.action">
            <span style="color: black; font-weight: bold;">
              {{ item.label }}
            </span>
          </a>
        </router-link>
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
  components: { Menubar },
  setup() {
    const items = computed(() => [
      { label: 'Home', route: '/home' },
      { label: 'Projects', route: '/Projects' },
      { label: 'Experience', route: '/School' },
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

.p-menubar-item-content,
.p-menubar-item-content:hover,
.p-menubar-item-link,
.p-menubar-item-link:hover {
  background-color: transparent !important;
}

.p-menubar-item-link:hover {
  text-decoration: underline white 3px;
  text-underline-offset: 5px;
}

.p-menubar-submenu {
  background-color: #823ddd !important;
  border-color: #823ddd !important;
  border-radius: 0 !important;
}
</style>
