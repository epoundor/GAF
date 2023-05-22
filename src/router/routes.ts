import HomePage from '../views/HomePage.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogPage2 from '../views/BlogPage2.vue'
import ArticlePage from '../views/ArticlePage.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,

  },
  {
    path: '/interviews',
    name: 'interview',
    component: BlogPage,
    props: {
      type:'interviews'
    }
  },
  {
    path: '/actualites',
    name: 'actu',
    component: BlogPage2,
     props: {
      type:'actualites'
    }
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: ArticlePage,

  },
]