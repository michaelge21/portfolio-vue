<template>
  <NavBar :disableLink="1" :homeURL="'../../../index.html'"></NavBar>

  <main>
    <User :age="age"></User>
  </main>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import User from "../../components/User.vue";

export default {
  name: "Portfolio",
  components: { NavBar, User },
  data() {
    return {
      age: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>

<style>
*,
::before,
::after {
  box-sizing: border-box;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

p,
h1,
h2,
h3,
h4,
h5,
ul,
li,
main,
body {
  margin: 0;
  padding: 0;
}
</style>
