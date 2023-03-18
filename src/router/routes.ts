import HomePage from '../views/HomePage.vue'
import BlogPage from '../views/BlogPage.vue'
import ArticlePage from '../views/ArticlePage.vue'
export default [
    
    {
    path: '/',
    name: 'home',
    component: HomePage,
    
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage,
    
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: ArticlePage,
    
  },
]