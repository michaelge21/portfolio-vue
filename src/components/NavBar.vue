<template>
  <ul>
    <li>
      <a :href="this.homeURL"></a>
    </li>
    <li>
      <a
        :class="{ disableLink: this.disableLink == 1 }"
        :href="this.portfolioURL"
        >Portfolio</a
      >
    </li>
    <li>
      <a :class="{ disableLink: this.disableLink == 2 }" :href="this.aboutURL"
        >About</a
      >
    </li>
    <li>
      <a href="#">Resume</a>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  props: {
    homeURL: {
      type: String,
      default() {
        return "#";
      },
    },
    portfolioURL: {
      type: String,
      default() {
        return "./src/pages/portfolio/index.html";
      },
    },
    aboutURL: {
      type: String,
      default() {
        return "./src/pages/about/index.html";
      },
    },
    disableLink: {
      type: Number,
    },
  },
  // newPortfolioURL : {
  //   type: Object,
  //   default() {
  //     return {
  //       color: "#222222"
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
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
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

li {
  margin: 10px 20px 0 20px;
  font-size: calc(1vw + 1vh + 0.5rem);

  a {
    text-decoration: overline;
    text-decoration-thickness: 3px;
  }
}

.disableLink {
  text-decoration: none;
  pointer-events: none;
}
</style>
