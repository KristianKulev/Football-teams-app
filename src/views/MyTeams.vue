<template>
  <div class="my-teams-container">
    <!-- Search Component -->
    <Search />

    <!-- Followed Teams Section -->
    <TeamList :teams="followedTeams" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Search from "@/components/SearchBar.vue";
import TeamList from "@/components/TeamList.vue";

export default {
  components: {
    Search,
    TeamList,
  },
  computed: {
    ...mapState(["followedTeams", "teams"]),
  },
  methods: {
    ...mapActions(["fetchTeams"]),
  },
  created() {
    this.fetchTeams();
  },
};
</script>

<style lang="scss">
.my-teams-container {
  @apply bg-tertiary-white;
}

.teams-heading {
  @apply font-bold uppercase font-secondary italic text-sm p-4;
}

.team-item {
  @apply flex justify-between items-center px-5 py-2;

  &:hover,
  &.active {
    @apply bg-secondary-white;
    .team-logo {
      @apply bg-primary-white;
    }
  }
}

.team-logo {
  @apply inline-block p-2 rounded-full bg-secondary-white mr-4;
}

.team-name {
  @apply text-sm text-primary-blue font-medium font-bold;
}

.team-stadium {
  @apply px-2 text-xs text-secondary-accent;
}

.team-leagues {
  @apply text-[11px] text-secondary-accent;
}
</style>