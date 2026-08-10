import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TrackView from '../views/TrackView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import Bookshelf from '../views/Bookshelf.vue'
import BookDetail from '../views/BookDetail.vue'
import ToolboxView from '../views/ToolboxView.vue'
import CapabilityView from '../views/CapabilityView.vue'
import ThemeView from '../views/ThemeView.vue'
import ReadingPathView from '../views/ReadingPathView.vue'
import VerticalTogView from '../views/VerticalTogView.vue'
import SearchView from '../views/SearchView.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/track/:id', name: 'track', component: TrackView, props: true },
  { path: '/books', name: 'books', component: Bookshelf },
  { path: '/search', name: 'search', component: SearchView },
  { path: '/book/:id', name: 'book', component: BookDetail, props: true },
  { path: '/toolbox', name: 'toolbox', component: ToolboxView },
  { path: '/capability', name: 'capability', component: CapabilityView },
  { path: '/themes', name: 'themes', component: ThemeView },
  { path: '/themes/:id', name: 'theme', component: ThemeView, props: true },
  { path: '/paths', name: 'paths', component: ReadingPathView },
  { path: '/paths/:id', name: 'path', component: ReadingPathView, props: true },
  { path: '/tog', name: 'tog', component: VerticalTogView },
  { path: '/about', name: 'about', component: About },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/me', name: 'me', component: ProfileView },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})
