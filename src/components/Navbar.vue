<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="!isAuthenticated" style="float:right">
                <router-link to="/login" class="active"
                >
                  Login
                </router-link>
      </li>
      <li><a href="#news">Toute les listes</a></li>
      <li v-if="isAuthenticated" style="float:right"><a class="active" href="#about">Déconnexion</a></li>
    </ul>
</div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
