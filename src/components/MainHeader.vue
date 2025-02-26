<template>
  <header class="main-header relative">
    <section
      class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center"
    >
      <span class="user-name sm:hidden m-0">RichyRich</span>
    </section>
    <section class="flex items-center">
      <img
        src="@/assets/images/arrow-left.png"
        alt="nav arrow"
        class="nav-arrow pr-4 pl-2"
      />

      <img
        src="@/assets/images/logo.png"
        alt="App Logo"
        class="main-logo-small sm:hidden"
      />

      <img
        src="@/assets/images/logo-full.svg"
        alt="App Logo"
        class="main-logo-big hidden sm:block"
      />
    </section>
    <aside class="px-4 relative">
      <img
        src="@/assets/images/notification.png"
        alt="notifications"
        class="notification"
      />
      <span class="notification-badge">2</span>
    </aside>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss">
.main-header {
  height: 55px;
  min-height: 55px;

  @apply flex justify-between items-center bg-tertiary-blue w-full px-4 sm:h-[80px] sm:min-h-[80px];

  .main-logo-big {
    height: 25px;
  }

  .notification-badge {
    @apply absolute top-2 right-2 bg-primary-accent text-primary-white rounded-full text-center font-secondary font-semibold italic border-2 border-tertiary-blue;
    width: 18px;
    height: 18px;
    font-size: 10px;
  }
}
</style>
