<template>
  <h3>Hello, I'm {{ props.name }}.</h3>
</template>

<script>
export default {
  props: {
    name: String,
  },
  setup() {
    return {
      props,
    };
  },
};
</script>

<style></style>
