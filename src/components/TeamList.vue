<template>
  <section class="team-list">
    <h3 class="teams-heading">My teams</h3>
    <ul>
      <li v-for="team in teams" :key="team.id" class="team-item">
        <aside class="flex flex-auto">
          <section class="flex items-center flex-auto">
            <TeamLogo />

            <span class="team-name">{{ team.name }}</span>
          </section>
        </aside>
        <Button type="secondary" @click="toggleFollow(team)">Following</Button>
      </li>
    </ul>
    <section
      v-if="!teams.length"
      class="bg-secondary-white text-secondary-accent h-[90px] flex items-center justify-center text-xs mx-4 rounded-lg"
    >
      You aren't following any teams yet.
    </section>
  </section>
</template>

<script>
import { mapActions } from "vuex";

import Button from "@/components/Button.vue";
import TeamLogo from "@/components/TeamLogo.vue";
export default {
  components: {
    Button,
    TeamLogo,
  },
  props: {
    teams: Array,
  },
  methods: {
    ...mapActions(["toggleFollowTeam"]),
    toggleFollow(team) {
      this.toggleFollowTeam(team);
    },
  },
};
</script>
<style lang="scss">
.team-list {
  @apply bg-primary-white pb-4 mt-2;
}
</style>
