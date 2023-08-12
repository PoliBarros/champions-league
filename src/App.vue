<template>
  <div id="app">
    <!-- NICE TO HAVE - Skeleton Loader -->
    <SkeletonLoader v-if="isLoading" />

    <!-- Error Message -->
    <div v-else class="club-content">
      <div v-if="error" class="error-message">
        An error occurred: {{ error.message }}
      </div>

      <!-- Main content -->
      <div v-else class="club-header">
        <h2>English Premier League</h2>
        <button class="loadMore" v-if="showBtn" v-on:click="loadMore">
          Load More
        </button>
      </div>

      {{ displayList }}
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "./components/SkeletonLoader.vue";
import mockClubInfo from "./utils/mock";
import "./assets/global.css";

export default {
  name: "App",
  components: {
    SkeletonLoader,
  },
  data() {
    return {
      list: [],
      displayList: [],
      isLoading: true,
      showBtn: false,
      error: "",
    };
  },
  mounted() {
    //This setTimeout is used just to simulate a delay to show the skeleton loading - Real code should not have this
    setTimeout(() => {
      fetch(
        "https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2020-2021"
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.table) {
            // concat the fetched data (table) with mocked data (tooltip)
            this.list = data.table.map((item) => {
              const matchedIdTooltip = mockClubInfo.find(
                (mock) => mock.idStanding === item.idStanding
              );
              return { ...item, ...matchedIdTooltip };
            });
            this.showBtn = true;

            //NICE TO HAVE - show the first 5 items when load
            const itemsToAdd = this.list.splice(0, 5);
            this.displayList = this.displayList.concat(itemsToAdd);
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = error;
          this.isLoading = false;
          console.error("Fetch error:", error);
        });
    }, 1000);
  },
  methods: {
    loadMore() {
      //NICE TO HAVE - Load 3 more items when button clicked
      if (this.list.length === 0) {
        this.showBtn = false;
        return;
      }
      const elementsToAdd = this.list.splice(0, 3);
      this.displayList = this.displayList.concat(elementsToAdd);

      //If the list is empty, hide the button
      this.showBtn = this.list.length === 0 ? false : true;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: var(--font-color);
  background-color: var(--bg-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
.club-content {
  height: 100%;
  width: 90%;
}
.club-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 5px solid transparent;
  margin-top: 50px;
}
.loadMore {
  padding: 10px;
  cursor: pointer;
  color: var(--font-color);
  background-color: #fff;
  font-weight: bold;
  border: 2px solid var(--font-color);
  transition: all 0.3s ease-in;
  box-shadow: var(--shadow);
  text-transform: uppercase;
}
.loadMore:hover {
  transform: scale(1.1);
}

@media (max-width: 414px) {
  h2 {
    font-size: 1.1rem;
  }
  .club-header {
    flex-direction: column;
    gap: 5px;
  }
  .loadMore:hover {
    transform: scale(1);
  }
}
</style>
