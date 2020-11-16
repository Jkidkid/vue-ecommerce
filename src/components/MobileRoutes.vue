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

    li {
      margin: 10px 0;

      a {
        font-weight: bold;
        color: #e4e4e4;
        font-size: 32px;

        &.router-link-exact-active {
          color: #868686;
          font-weight: 300;
          border-bottom: 1px solid lightgray;
        }
      }
    }
  }
</style>
