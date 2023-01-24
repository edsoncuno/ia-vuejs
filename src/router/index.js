import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExercisesView from "../views/ExercisesView.vue";
import Exercise1 from "../components/exercises/Exercise1.vue";
import Exercise2 from "../components/exercises/Exercise2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExercisesView,
      children: [
        {path: '1',component: Exercise1,name: 'exercise1'},
        {path: '2',component: Exercise2,name: 'exercise2'},
      ]
    },
  ]
})

export default router
