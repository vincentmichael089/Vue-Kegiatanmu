<template>
  <div id="app">
    <div class="main-title">Kegiatanmu</div>
    <div id="nav">
      <router-link to="/">Beranda</router-link>|
      <router-link to="/kegiatan">Kegiatan</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>


#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#nav {
  padding: 10px 0 30px 0;
}

#nav a {
  font-weight: bold;
  font-size: 1.25rem;
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

.main-title {
  padding-top: 30px;
  font-family: "Calistoga";
  font-size: 3rem;
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
