<template>
  <div class="container">
    <div id="app">
      <div id="nav">
        <router-link to="/">Beranda</router-link>|
        <router-link to="/kegiatan">Kegiatan</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

::-webkit-scrollbar {
    width: 10px;
    background: transparent; 
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: black; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: orangered; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: red; 
  }

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
