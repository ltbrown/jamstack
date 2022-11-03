<script setup>
const route = useRoute();
const story = await useStoryblok(`projects/${route.params.slug}`, {
  version: "draft",
  // version: useRoute().query._storyblok ? "draft" : "published",
});
</script>
<template>
  <!-- <pre>{{ story }}</pre> -->
  <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>
