<template>
  <div class="user-container">
    <section class="flex items-center">
      <Avatar />
      <span class="user-name hidden sm:block">RichyRich</span>
    </section>
    <label class="user-level">Level 5</label>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  name: "User",
  components: {
    Avatar,
  },
};
</script>
<style lang="scss">
.user-container {
  @apply bg-secondary-blue sm:rounded-t-[10pt] sm:mt-4 p-[42px] flex justify-center flex-col items-center sm:block;
}

.user-name {
  @apply text-white font-bold italic ml-4;
}

.user-level {
  @apply inline-block rounded-full bg-primary-blue text-primary-white font-secondary text-xs px-2 font-medium h-4 mt-2;
}
</style>