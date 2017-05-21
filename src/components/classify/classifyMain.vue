<template>
	<div class="classify-main">
		<div class="classify-main-header">
		<mt-navbar v-model="selected">
		  <mt-tab-item id="nav1">攻略</mt-tab-item>
		  <mt-tab-item id="nav2">单品</mt-tab-item>
		</mt-navbar>
		</div>
		<form class="classify-search">
			<input type="search" placeholder="选份走心好礼送给ta"/>
		</form>
		
	
		<mt-tab-container v-model="selected" :swipeable="isswipeable">
		  <mt-tab-container-item id="nav1">
		  	<div class="classify-main-wrapper">
		  	<!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
				<strategy-section></strategy-section>		
		    </mt-loadmore>-->
				<strategy-section v-on:scroll-start="stopSwipe" v-on:scroll-end="startSwipe"></strategy-section>		
		    
		    </div>
		  </mt-tab-container-item>
		  
		  <mt-tab-container-item id="nav2">
		  	<div class="classify-main-wrapper">
		  	<!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
		    	<classify-single></classify-single>
		    </mt-loadmore>-->
		    	<classify-single></classify-single>
		    
		    </div>
		  </mt-tab-container-item>
		</mt-tab-container>
		
	</div>
</template>

<script>

import Vue from 'vue'
import { TabContainer, TabContainerItem,Loadmore, Navbar, TabItem } from 'mint-ui';


Vue.component(Loadmore.name, Loadmore);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

//引用子组件
import strategySection from './strategySection.vue'
import classifySingle from './classifySingle.vue'


export default{
	name:'classify-main',
	components:{
		'strategy-section':strategySection,	
		'classify-single':classifySingle
	},
	data(){
		return{
			selected:'nav1',
			isswipeable:true,

		}
	},
	methods:{
		startSwipe(){
			this.isswipeable = true;
		},
		stopSwipe(){
			this.isswipeable = false;
		}
	}
}
</script>

<style>
.classify-main{
	width: 100%;
	height: 100%;
}
.classify-main-wrapper{
	width: 100%;
 	height: 100%;
    position: static;
    overflow: auto;
    top: 0;
    left: 0;
    bottom: 49px;
}
.classify-main .mint-tab-container{
	position: absolute;
	top: 79px;
    left: 0;
    bottom: 49px;
    width: 100%;
    /*background: red;*/
}
.classify-main .mint-tab-container-wrap{
	height: 100%;
}

/**/
.classify-main-header{
	background-color: white;
	
}
.classify-main .mint-navbar{
	height: 44px;
	width: 60px;
	margin: 0 auto;
}
.classify-search{
	width: 100%;
	background-color: white;
	padding: 5px 0 6px 0;
}

.classify-search input{
	width: 90%;
	height: 25px;
	border-radius: 16px;
	background-color: #faf5f5;
	padding: 5px 0;
	margin: 0 auto;
	display: block;
	border: none;
	outline: none;
	text-align: center;
}

</style>