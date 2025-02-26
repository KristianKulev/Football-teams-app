<template>
  <div
    class="min-h-screen h-full bg-secondary-white font-primary flex flex-col flex-auto items-center"
  >
    <MainHeader />

    <section class="main-layout-container">
      <section class="main-layout">
        <User />
        <Navigation />

        <div class="">
          <router-view />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Navigation from "@/components/Navigation.vue";
import User from "@/components/User.vue";

export default {
  components: {
    MainHeader,
    Navigation,
    User,
  },
};
</script>
<style>
.main-layout-container {
  @apply flex flex-col flex-auto w-full overflow-auto;
}

.main-layout {
  margin: 0 auto;
  @apply overflow-hidden w-full sm:w-[600px] sm:rounded-lg shadow-sm;
}
</style>