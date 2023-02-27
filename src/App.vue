<script>
export default {
  data() {
    return {
      Books: [
        {
          id: 1,
          tittle: "Narnia",
          author: "C.S Lewis",
          releaseDate: "1999-12-01",
        },
        {
          id: 2,
          tittle: "Narnia",
          author: "C.S Lewis",
          releaseDate: "1999-12-01",
        },
        {
          id: 3,
          tittle: "Narnia",
          author: "C.S Lewis",
          releaseDate: "1999-12-01",
        },
      ],
    };
  },
};
</script>

<template>
  <h1>My Books</h1>
  <ul>
    <book-info 
    id="1"
    title="Narnia I"
    author="C.S Lewis"
    release-date="1999-12-01" 
    is-Liked="1"></book-info>
    <book-info 
    id="1"
    title="Narnia II" 
    author="C.S Lewis"
    release-date="1899-12-01" ></book-info>
    <book-info 
    id="1"
    title="Narnia III" 
    author="C.S Lewis"
    release-date="1799-12-01" 
    is-Liked="1"></book-info>
  </ul>
</template>

<style>
h1 {
  color: blue;
}
</style>
