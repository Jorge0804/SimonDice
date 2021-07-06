// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    secuencia: [],
    iniciar: true,
  },
  created: function(){

  },
  methods:{
    Oprimir: function(cuadro){
      if(cuadro == 3 && this.iniciar){
        this.iniciar = false;
        this.IniciarJuego();
      }
    },
    IniciarJuego: function(){
      this.GenerarSecuencia();
    },
    GenerarSecuencia: function(){
      var lista = [1,2,3,4,5];
      this.secuencia = lista.sort(function() {return Math.random() - 0.5});
    },
  },
})
