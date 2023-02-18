<script>
export default {
  data() {
    return {
      Books: [
        {
          id:1,
          tittle: "Narnia",
          author: "C.S Lewis",
          releaseDate: "1999-12-01",
        },
        {
          id:2,
          tittle: "Narnia",
          author: "C.S Lewis",
          releaseDate: "1999-12-01",
        },
        {
          id:3,
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
  <book-info></book-info>
  <book-info></book-info>
  <book-info></book-info>
</ul>
</template>

<style>
h1{
  color:blue
}
</style>