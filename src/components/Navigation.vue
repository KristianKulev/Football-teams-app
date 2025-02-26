<template>
  <nav class="main-nav">
    <ul class="flex">
      <li>
        <router-link to="/" class="nav-link"> My Teams </router-link>
      </li>
      <li>
        <router-link to="/about" class="nav-link"> About </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
.main-nav {
  @apply flex justify-center bg-secondary-blue h-[39px] border-t border-tertiary-blue text-[11px] uppercase;

  ul {
    @apply flex;
  }
}

.nav-link {
  @apply flex flex-col justify-end items-center h-full text-secondary-accent hover:text-blue-300 transition mx-4;

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 120%;
    @apply rounded-t-lg mt-2;
  }

  &.router-link-exact-active {
    @apply text-primary-white;
    &:after {
      @apply bg-primary-accent;
    }
  }
}
</style>
