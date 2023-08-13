<template>
  <div class="wrap-table">
    <table class="list-table">
      <tbody>
        <tr>
          <th class="table-title-sm"></th>
          <th class="table-title-sm"></th>
          <th class="table-title-lg"></th>
          <th class="table-title-md">
            <div class="table-txt">Form</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">GP</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">W</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">D</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">L</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">GF</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">GA</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">GD</div>
          </th>
          <th class="table-title-sm">
            <div class="table-txt">Pts</div>
          </th>
        </tr>
        <!-- content table -->

        <!-- Events to handle tooltip hide and show in both mobile and desktop -->
        <tr
          v-for="club in clubs"
          :key="club.idStanding"
          v-on:mouseover="showUpTooltip"
          v-on:mouseleave="hideTooltip"
          v-on:click="toggleTooltip"
        >
          <td>
            <div class="table-txt">
              {{ club.intRank < 10 ? `0${club.intRank}` : club.intRank }}
            </div>
          </td>
          <td class="scrolled">
            <div>
              <img
                :src="club.strTeamBadge"
                :alt="club.strTeam"
                class="table-img"
              />
            </div>
          </td>
          <td>
            <div class="table-txt">
              {{ club.strTeam }}
              <!-- NICE TO HAVE - Tooltip div is at this columns, no specific reason to be here -->
              <div
                v-if="showTooltip"
                v-on:click="showTooltip = false"
                class="tooltip"
              >
                <h3>
                  <img
                    :src="club.strTeamBadge"
                    :alt="club.strTeam"
                    class="table-img"
                  />{{ club.strTeam }}
                </h3>
                <p>{{ club.tooltip }}</p>
              </div>
            </div>
          </td>
          <td>
            <div class="table-form">
              <div v-for="(item, index) in club.strForm" :key="'form' + index">
                <span
                  class="form-play"
                  :class="{
                    win: item === 'W',
                    loose: item === 'L',
                    draw: item === 'D',
                  }"
                >
                  {{
                    item === "W" ? `&#x2713;` : item === "L" ? "X" : "-"
                  }}</span
                >
              </div>
            </div>
          </td>
          <td>
            <div class="table-txt">{{ club.intPlayed }}</div>
          </td>
          <td>
            <div class="table-txt">{{ club.intWin }}</div>
          </td>
          <td>
            <div class="table-txt">{{ club.intDraw }}</div>
          </td>
          <td>
            <div class="table-txt">{{ club.intLoss }}</div>
          </td>
          <td>
            <div class="table-txt">{{ club.intGoalsFor }}</div>
          </td>
          <td>
            <div class="table-txt">{{ club.intGoalsAgainst }}</div>
          </td>
          <td>
            <div class="table-txt">{{ club.intGoalDifference }}</div>
          </td>
          <td>
            <div class="table-txt">{{ club.intPoints }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ClubList",
  props: {
    clubs: null,
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  methods: {
    toggleTooltip() {
      if (window.innerWidth < 540) {
        this.showTooltip = true;
      }
    },

    showUpTooltip() {
      if (window.innerWidth >= 540) {
        this.showTooltip = true;
      }
    },
    hideTooltip() {
      if (window.innerWidth >= 540) {
        this.showTooltip = false;
      }
    },
  },
};
</script>

<style scoped>
.wrap-table {
  padding-bottom: 10px;
  overflow-x: auto;
  font-weight: bold;
}

.list-table {
  margin-top: 20px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  box-shadow: var(--shadow);
}

.table-img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
tr {
  width: 100%;
  border-bottom: 3px solid var(--primary);
  background: var(--blue);
  background: linear-gradient(
    270deg,
    rgba(129, 214, 241) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: all 0.3s ease-in-out;
}
tr td:first-child {
  border-left: 5px solid transparent;
  transition: all 0.6s ease;
}
tr:hover td:first-child {
  border-left: 5px solid var(--blue);
}
td:nth-child(3) {
  text-align: left;
}
td:nth-child(1),
td:nth-child(2),
th:nth-child(1),
th:nth-child(2) {
  background: rgb(240, 250, 253);
}
td:nth-child(1),
th:nth-child(1) {
  position: sticky;
  left: 0;
  z-index: 2;
}
td:nth-child(2),
th:nth-child(2) {
  position: sticky;
  left: 30px;
  z-index: 2;
}
th {
  border-bottom: 6px solid var(--primary);
}
td {
  border-bottom: 2px solid var(--blue-opc);
}
th,
td {
  padding: 20px 5px;
}
.table-txt {
  width: 100%;
  border-right: 1px solid var(--blue-opc);
}

td:last-child .table-txt:last-of-type,
th:last-child .table-txt:last-of-type {
  border: none;
}

/* Sizes */
.table-title-lg {
  width: 25%;
}
.table-title-md {
  width: 15%;
}
.table-title-sm {
  width: 5%;
}

/* Tooltip */
.tooltip {
  max-width: 250px;
  height: auto;
  padding: 10px;
  position: absolute;
  z-index: 4;
  background: var(--secondary);
  bottom: 50%;
  left: 40%;
  border: 2px solid var(--blue-opc);
  flex-direction: column;
  border-radius: 5px;
  display: none;
}
.tooltip h3 {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.tooltip img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.tooltip p {
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 18px;
}

/* Form  */
.table-form {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3px;
  border-right: 1px solid var(--blue-opc);
}
.win {
  color: var(--win);
}
.loose {
  color: var(--loose);
}
.draw {
  color: var(--draw);
}

/* Surface duo dimension */
@media (max-width: 540px) {
  .tooltip {
    left: 7%;
  }
  .table-form,
  .table-txt {
    padding-right: 5px;
  }
  /*class to show tha can be scrolled left */
  .scrolled {
    box-shadow: 3px 0 5px -2px #888;
  }
  tr:hover .tooltip {
    display: flex;
  }
  .background {
    width: 100%;
    height: 100%;
    background-color: var(--gray);
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
}

@media (min-width: 541px) {
  tr td:nth-of-type(3):hover .tooltip {
    display: flex;
  }
}
</style>


