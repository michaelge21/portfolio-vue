<template>
  <ul>
    <li>
      <a :href="relativeURL"></a>
    </li>
    <li>
      <a href="src/pages/portfolio/index.html">Portfolio</a>
    </li>
    <li>About</li>
    <li>Resume</li>
    <li>Contact</li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      relativeURL: "#",
    };
  },
  props: {},
};
</script>

<style scoped>
ul {
  display: flex;
  place-items: center;
  flex-flow: row wrap;

  list-style: none;
}

li:first-child {
  margin-right: auto;
  background-image: url("../assets/betterMichaelReducedSize.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
  position: relative;
}

li:first-child a {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

li {
  margin: 10px 20px 0 20px;
  font-size: calc(1vw + 1vh + 0.5rem);
}
</style>
