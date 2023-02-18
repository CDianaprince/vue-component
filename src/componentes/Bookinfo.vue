<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      Books:{
          id: 1,
          title: "Narnia",
          author: "C.S Lewis",
          releaseDate: "1999-12-01",
      },
    };
  },
  methods:{
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};

</script>

<template>

<li>
  <h2>
  {{  Books.title }}
  </h2>

  <button type="button" @click="toogleDetails">{{ detailsAreVisible ? "hide" : "show" }}</button>

  <ul v-if="detailsAreVisible
  ">
    <li><strong>Author: </strong> {{ Books.author }}</li>
    <li><strong>Release Date:</strong> {{ Books.releaseDate }}</li>
  </ul>
</li>
</template>