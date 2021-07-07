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
    contador: 0,
    play: '▶',
    puntos: 0,
    inicio: true,
    styleCuadro1: {
      active: false,
      intervalo: null,
      backgroundColor: 'rgba(76, 76, 187, 0.87)',
    },
    styleCuadro2: {
      active: false,
      intervalo: null,
      backgroundColor: 'rgba(0, 128, 0, 0.8)',
    },
    styleCuadro3: {
      active: false,
      intervalo: null,
      backgroundImage: 'linear-gradient(to bottom right, rgba(236, 12, 12, 0.94), rgba(202, 84, 246, 0.68), blue)',
    },
    styleCuadro4: {
      active: false,
      intervalo: null,
      backgroundColor: 'rgba(255, 0, 0, 0.71)',
    },
    styleCuadro5: {
      active: false,
      intervalo: null,
      backgroundColor: 'rgba(239, 239, 51, 0.8)',
    },
  },
  created: function(){
    //this.intervalo = setInterval(function(){alert('hola')}, 3000);
  },
  methods:{
    Oprimir: function(cuadro){
      this.play = this.puntos;
      if(cuadro == 3 && this.iniciar){
        this.iniciar = false;
        this.GenerarSecuencia();
        this.IniciarRonda();
      }
      else{
        this.CambiarCuadro(this.ObtenerCuadro(cuadro));
        this.ComprobarPuntos(cuadro);
      }
    },
    ComprobarPuntos: function(cuadro){
      if(cuadro == this.secuencia[this.contador]){
        this.contador++;
        this.puntos += 20;
        this.play = this.puntos;
        if(this.contador == this.secuencia.length){
          this.NuevaRonda();
        }
      } else{
        alert("Perdiste, tu puntuación final fue de "+this.puntos+" :c");
        location.reload();
      }
    },
    NuevaRonda: function(){
      this.contador = 0;
      let min = 1;
      let max = 6;
      this.secuencia.push(Math.floor((Math.random() * (max-min)) +min));
      this.IniciarRonda();
      this.puntos += 100;
      this.play = this.puntos;
    },
    ObtenerCuadro: function(numero){
      var cuadro;
      switch (numero){
        case 1:
          cuadro = this.styleCuadro1;
          break;
        case 2:
          cuadro = this.styleCuadro2;
          break;
        case 3:
          cuadro = this.styleCuadro3;
          break;
        case 4:
          cuadro = this.styleCuadro4;
          break;
        case 5:
          cuadro = this.styleCuadro5;
          break;
      }
      return cuadro;
    },
    GenerarSecuencia: function(){
      var lista = [1,2,3,4,5];
      this.secuencia = lista.sort(function() {return Math.random() - 0.5});
    },
    IniciarRonda: function() {
      this.inicio = false;
      let i = 0;
      let intervalo = setInterval(()=>{
        if (this.inicio == false){
          this.inicio = true;
        } else{
          i++;
          this.inicio = false;
          if (i == 3){
            clearInterval(intervalo);
            this.MostrarSecuencia();
          }
        }
      }, 350);
    },
    MostrarSecuencia: function(){
      let i = 0;
      let intervalo = setInterval(()=>{
        if (i < this.secuencia.length){
          this.CambiarCuadro(this.ObtenerCuadro(this.secuencia[i]));
          console.log(i);
        } else{
          clearInterval(intervalo);
        }
        i++;
      }, 700);
    },
    CambiarCuadro: function (cuadro){
      if(!cuadro.active){
        cuadro.active = true;
        cuadro.intervalo = setInterval(function(){
          cuadro.active = false;
          clearInterval(cuadro.intervalo);
        }, 600);
      } else{
        cuadro.active = false;
      }
    },
  },
})
