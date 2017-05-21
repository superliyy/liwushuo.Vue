import Vue from 'vue'
import Router from 'vue-router'

//首页
import HomeMain from './../components/home/homeMain.vue'
//榜单
import TopMain from './../components/top/topMain.vue'
import TopDetail from './../components/top/topDetail.vue'

//分类
import ClassifyMain from './../components/classify/classifyMain.vue'
//我的
import MeMain from './../components/me/meMain.vue'


Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
    	path: '/home',
    	component: HomeMain
    },
    //榜单
    {
    	path: '/top',
    	component: TopMain,
    	children:[
    	  //商品详情
    	    {
    	    	path:"topDetail/:id",
    	    	component:TopDetail
    	    }
    	]
    },
    //分类
    {
    	path: '/classify',
    	component: ClassifyMain
    },
    //我的
    {
    	path: '/me',
    	component: MeMain
    },
    {
    	path: '*',
    	redirect: '/home'
    }
  ]
})
