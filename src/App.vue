<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  name: "App",
  components: { DefaultLayout },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
