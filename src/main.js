import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './vuex/'
import './style/public.scss'
import './config/rem'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter);

const  router=VueRouter({
  routes,
  mode:'history',
  strict:process.env.NODE_ENV!=='production',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }else {
      return {
        x:0,
        y:to.meta.savedPosition||0
      }
    }
  }
});
