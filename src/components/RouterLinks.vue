<template>
  <ul>
    <li><router-link to="/men">Men</router-link></li>
    <li><router-link to="/woman">Woman</router-link></li>
    <li><router-link to="/clothes">Clothes</router-link></li>
  </ul>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
    ul {
    list-style: none;
    display: inline;

    li {
      display: inline-block;
      margin: 0 10px;

      a {
        font-weight: bold;
        color: #373737;

        &.router-link-exact-active {
          color: #868686;
          font-weight: 300;
          border-bottom: 1px solid lightgray;
        }
      }
    }
  }
</style>
