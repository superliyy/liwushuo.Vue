<template>
	<div id="app">
		
		<!-- 单页面组件的模板容器 -->
		<router-view></router-view>
		
		<!-- tabbar组件 -->
		<mt-tabbar v-model="tabFlag">
			<mt-tab-item v-for="(tabItem, index) in tabItemArr" :id="tabItem.path" :key="index">
				<span slot="icon" class="iconfont" :class="tabItem.icon"></span>
				 {{tabItem.title}}
			</mt-tab-item>
		</mt-tabbar>

	</div>
</template>

<script>
import './css/iconfont.css'

import Vue from 'vue'

//引入router/index.js
import router from './router'

//按需引入mint-ui框架
import { Tabbar, TabItem } from 'mint-ui'
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


export default {
  name: 'app',
  mounted(){
  	
  	//监听tabIndex的变化，让路由进行切换
  	this.$watch('tabFlag', function(newVal, oldVal){
		router.push('/'+newVal);
  	});
  },
  data(){
  	return {
  		tabFlag: 'home',
  		selected:{color:'red'},
  		tabItemArr: [
  			{ title: '首页', path:'home', icon:'icon-shouyeshouye' },
  			{ title: '榜单', path:'top', icon:'icon-huangguan' },
  			{ title: '分类', path:'classify', icon:'icon-fenlei' },
  			{ title: '我的', path:'me', icon:'icon-wode' }
  		]
  	}
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
}

div.mint-tabbar{
	height: 49px;
	background-color: #e6e6e6;
}

div.mint-tab-item-label{
	font-size: 12px;
	color: #786a6a;
	transform: scale(0.9);
}
div.mint-tab-item-icon{
	margin-bottom: 2px;
}
.mint-tabbar > a.mint-tab-item.is-selected,.mint-tabbar > a.mint-tab-item.is-selected .mint-tab-item-label{
	color: #ff4258;
}
.mint-tabbar > a.mint-tab-item{
	color: #b9aaaa;
}


</style>
