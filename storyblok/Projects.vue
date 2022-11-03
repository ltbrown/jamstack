<script setup>
defineProps({
  blok: Object,
});
</script>
<template>
  <div class="container project-page">
    <div class="project-title">
      <h1 style="line-height: 1">{{ blok.name || "New Project" }}</h1>
      <!-- NOT REFRESHING? -->
      <!-- <NuxtLink :to="{ name: 'index' }">Go Back</NuxtLink> -->
      <a href="/">Go Back</a>
    </div>
    <div class="project-description">
      <img
        :src="blok.image?.filename || 'https://picsum.photos/300/175'"
        :alt="blok.image?.alt"
      />
      <p>
        {{
          blok.description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }}
      </p>
    </div>
  </div>
</template>
