<template>
  <button :class="['rounded-full', buttonClasses]">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary"].includes(value),
    },
  },
  computed: {
    buttonClasses() {
      return this.type === "primary"
        ? "text-xs uppercase font-medium bg-primary-accent text-primary-white px-4 py-2 hover:bg-secondary-accent"
        : "text-xs uppercase font-medium border border-primary-accent bg-primary-white text-primary-accent px-4 py-2 hover:bg-secondary-white";
    },
  },
};
</script>
