<template>
  <div class="skeleton-content">
    <table class="skeleton-table">
      <tbody>
        <tr>
          <th class="skeleton-title-sm"></th>
          <th class="skeleton-title-sm"></th>
          <th class="skeleton-title-lg"></th>
          <th class="skeleton-title-md">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
          <th class="skeleton-title-sm">
            <div class="skeleton skeleton-txt"></div>
          </th>
        </tr>
        <!-- content table -->
        <tr v-for="(item, index) in qntItems" :key="'skel' + index">
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-avatar"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
          <td>
            <div class="skeleton skeleton-txt"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
  data() {
    return {
      qntItems: 5,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.skeleton-content {
  width: 90%;
}
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}
.skeleton-table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  width: 100%;
  border-bottom: 1px solid #ccc;
}
tr:first-of-type {
  border-bottom: 3px solid #ccc;
}
/* center all the avatars columns */
td:nth-child(2) {
  display: flex;
  justify-content: center;
}
th,
td {
  padding: 20px 5px;
  height: 20px;
}

.skeleton-title-lg {
  width: 25%;
}
.skeleton-title-md {
  width: 15%;
}
.skeleton-title-sm {
  width: 5%;
}
.skeleton-txt {
  width: 100%;
  height: 25px;
  background-color: #ccc;
}
.skeleton-avatar {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ccc;
}

@media (max-width: 414px) {
  /* hide some columns of the table */
  th:nth-child(n + 7) {
    display: none;
  }
  td:nth-child(n + 7) {
    display: none;
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: rgb(204, 204, 204);
  }
  100% {
    background-color: rgb(242, 242, 242);
  }
}
</style>