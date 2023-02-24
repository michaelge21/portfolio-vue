<template>
  <p>the user is {{ age }} years old</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      required: true,
      default: 30,
    },
  },
};
</script>

<style lang="scss" scoped></style>
