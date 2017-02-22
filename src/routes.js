import Home from './components/Home.vue'
import Stocks from './components/stocks/stocks.vue'
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
    {
        path: '', name: 'home', components: {
        default: Home,
      }
    },
    {
      path:'/stocks', name:'stocks', components: {
        default: Stocks,
      }
    },
    {
      path:'/portfolio', name:'portfolio', components: {
        default: Portfolio,
      }
    }
  ];
