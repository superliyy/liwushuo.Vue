<template>
<div class="detail-content">
	<header class="detail-header">
		<mt-button icon="back" class="back" @click="backAction()"></mt-button>
		<div class="tab-item" v-for="(tabTitle,index) in tabArr" :key="index" :class="{'active': selectIndex==index}" @click="tabAction(index)">
			{{tabTitle}}
		</div>
	</header>
	
	<div v-if="selectIndex==0" class="item danpin">
		<!--<div class="banner">
			<img src="http://img01.liwushuo.com/image/160930/dls2xqobj.jpg-w720"/>
		</div>-->
		
		<mt-swipe :auto="0" class="banner">
		  <mt-swipe-item>
		  	<img src="http://img01.liwushuo.com/image/160930/dls2xqobj.jpg-w720"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="http://img02.liwushuo.com/image/160930/wkowm0xg8.jpg-w720"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="http://img03.liwushuo.com/image/160930/rl3mha890.jpg-w720"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="http://img02.liwushuo.com/image/160930/wkowm0xg8.jpg-w720"/>
		  </mt-swipe-item>
		   <mt-swipe-item>
		  	<img src="http://img01.liwushuo.com/image/160930/dls2xqobj.jpg-w720"/>
		  </mt-swipe-item>
		</mt-swipe>
		
	</div>
	
	
	<div v-if="selectIndex==1" class="item">详情</div>
	<div v-if="selectIndex==2" class="item">评论</div>
	
	
	
 </div>
	
	
	
	
	
	
</template>



<script>
import Vue from 'vue'
import http from 'vue-resource'	
import { Button,Swipe, SwipeItem } from 'mint-ui';


import router from "./../../router"
Vue.use(http)	

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default{
	data(){
		return {
			selectIndex:0,
			tabArr:["单品","详情","评论"]
		}
	},
	methods:{
		backAction(){
			this.$emit("back-click");
		},
		tabAction(index){
			this.selectIndex = index;
		}
	}
}
	
	
</script>


<style>
.detail-content{
	width: 100%;
	height: 100%;
    background: #faf5f5;
}
.detail-header{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 44px;
	background: #fff;
}
.detail-header .back{
	width: 40px;
	height: 44px;
	color: #000;
    float: left;
    line-height: 44px;
    margin-left: 10px;
    background: #fff;
    box-shadow:none;
}
.detail-header .tab-item{
	float: left;
	line-height: 44px;
	margin-left: 35px;
	color: #000;
}	
.detail-header .tab-item.active{
	color:  #ff2d47;
	border-bottom: 2px solid  #ff2d47;
}
.item{
	width: 100%;
	position: absolute;
	top: 47px;
	left: 0;
	bottom: 49px;
	z-index: 7;
	background: green;
	overflow: auto;
}
.danpin .banner{
	width: 100%;
	height: 320px;
}	
.danpin .banner img{
	width: 100%;
	height: 100%;
}
div.mint-swipe-indicator{
	background: #fff;
	opacity: 0.8;
}
div.mint-swipe-indicator.is-active{
	background:red ;
}
	
	
</style>