<template>
	<div class="home-scroller">
		<!--:stopPropagation="true" :prevent="true"-->
		<mt-swipe :show-indicators="true" :auto="0" :stopPropagation="ispre" :prevent="ispre" @change="handleChange">
		  <mt-swipe-item v-for="(img,index) in scrolldata" :key="index"><img :src="img"/></mt-swipe-item>
		  <!--<mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>-->
		</mt-swipe>
	</div>
</template>

<script>

import Vue from 'vue'

//引用mint ui
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


export default{
	name:'home-scroller',
	props:["scrolldata"],
	methods:{
		handleChange(){
			this.$emit('scroll-swipe');	
		}
	},
	data(){
		return{
			ispre:true
		}
	}
}
	
</script>

<style>

.home-scroller{
	width: 100%;
	height: 190px;
	background: orange;
}
	
.home-scroller img{
	display: block;
    width: 100%;
    height: 100%;
}	
div.mint-swipe-indicator{
	opacity: 1;
	background: #ffffff;
}
div.mint-swipe-indicator.is-active{
	background: #ff2d47;
}

</style>