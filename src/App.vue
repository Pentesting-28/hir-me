<script>
// import StatusContainer from "./components/StatusContainer.vue";
import connect from "./composables/connect/index";
import { onMounted } from "vue";

export default {
  name: "App",
  components: {
    // StatusContainer,
  },
  setup: () => {
    const { state, autoConnect } = connect();
    onMounted(async () => {
      console.log(state);
      await autoConnect();
    });
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
    <!-- <StatusContainer/> -->
  </div>
</template>

<style scoped>

</style>
