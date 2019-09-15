<template>
  <div style="padding-bottom:44px;">
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from "./nav.vue";
export default {
  data() {
    return {
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: ""
      }
    };
  },
  components: {
    Nav
  }
};
</script>