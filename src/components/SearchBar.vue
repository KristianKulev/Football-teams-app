<template>
  <div
    class="search-bar-container"
    @keydown.down.prevent="moveDown"
    @keydown.up.prevent="moveUp"
    @keydown.enter.prevent="selectTeam"
  >
    <h3 class="teams-heading">Search teams</h3>
    <div class="search-bar">
      <img
        src="@/assets/images/search.png"
        alt="User Avatar"
        class="w-[17px] h-[17px]"
      />

      <input
        type="text"
        :value="searchQuery"
        placeholder="Search for a team"
        @input="
          debounce(() => {
            this.updateSearchQuery($event.target.value);
          })
        "
        @focus="activeIndex = -1"
      />
    </div>
    <ul v-if="filteredTeams.length">
      <li
        v-for="(team, index) in filteredTeams"
        :key="team.id"
        :class="{ active: index === activeIndex }"
        class="team-item"
      >
        <aside class="flex flex-auto mr-1">
          <section class="flex items-center flex-auto">
            <TeamLogo />
            <aside>
              <div
                v-html="highlightText(team.leagues.join(', '))"
                class="team-leagues"
              ></div>
              <span v-html="highlightText(team.name)" class="team-name"></span>
              <span class="text-tertiary-white px-2"> | </span>

              <img
                src="@/assets/images/stadium.png"
                alt="stadium"
                class="w-[14px] h-[12px] inline-block"
              />
              <span
                v-html="highlightText(team.stadium)"
                class="team-stadium"
              ></span>
            </aside>
          </section>
        </aside>
        <Button
          v-if="isTeamFollowed(team.id)"
          type="secondary"
          @click="toggleFollow(team)"
          >Following</Button
        >
        <Button v-else type="primary" @click="toggleFollow(team)"
          >Follow</Button
        >
      </li>
    </ul>
    <section
      v-else-if="searchQuery.length >= 3"
      class="flex flex-col items-center p-4"
    >
      <img
        src="@/assets/images/no-results.png"
        alt="no-results"
        class="w-[144px] h-[77px]"
      />
      <p class="text-secondary-accent p-2 text-xs">No Teams Found</p>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { ref } from "vue";
import DOMPurify from "dompurify";
import { createDebounce } from "@/utils/helpers";
import Button from "@/components/Button.vue";
import TeamLogo from "@/components/TeamLogo.vue";

export default {
  components: {
    Button,
    TeamLogo,
  },
  setup() {
    return {
      // Use the function, so that the filtering is not triggered on every keystroke
      debounce: createDebounce(),
      activeIndex: ref(-1),
    };
  },
  computed: {
    ...mapState(["searchQuery"]),
    ...mapGetters(["filteredTeams", "isTeamFollowed"]),
  },
  methods: {
    ...mapActions(["updateSearchQuery", "toggleFollowTeam"]),

    toggleFollow(team) {
      this.toggleFollowTeam(team);
    },

    highlightText(text) {
      if (!this.searchQuery) {
        return text;
      }

      // Sanitize the user input in order to prevent XSS attacks, since v-html is used for the highlight
      const purifiedQuery = DOMPurify.sanitize(this.searchQuery);
      const regex = new RegExp(`(${purifiedQuery})`, "gi");

      // NOTE: $1 is a placeholder for the first group from the regular exp
      return text.replace(regex, '<span class="text-primary-accent">$1</span>');
    },

    // TODO: the up/down logic needs additional clarification for how it should work. This is just a PoC, and requires the mouse context to be over the SearchBar component
    moveDown() {
      if (this.activeIndex < this.filteredTeams.length - 1) {
        this.activeIndex++;
      }
    },

    moveUp() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },

    selectTeam() {
      if (this.activeIndex >= 0) {
        this.toggleFollow(this.filteredTeams[this.activeIndex]);
      }
    },
  },
};
</script>

<style lang="scss">
.search-bar-container {
  @apply bg-primary-white pb-4;
}

.search-bar {
  @apply flex items-center flex-auto bg-secondary-white rounded-full mx-4 px-4 mb-2.5;
  height: 36px;

  input {
    @apply flex-auto ml-2.5 border-none bg-transparent outline-0;
  }
}
</style>
