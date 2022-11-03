<script setup>
// const story = await useStoryblok("home", { version: "draft" });
const story = await useStoryblok(
  "home",
  {
    version: "draft",
    resolve_relations: "featuredProjects.projects",
  },
  {
    resolveRelations: "featuredProjects.projects",
  }
);
// will have to do the same in [slug].vue
// const story = await useStoryblok(
//   "home",
//   {
//     version: useRoute().query._storyblok ? "draft" : "published",
//     resolve_relations: "featuredProjects.projects",
//   },
//   {
//     resolveRelations: "featuredProjects.projects",
//   }
// );
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <div>Hello world</div> -->
    <!-- <pre>{{ story }}</pre> -->
    <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
  </div>
</template>
