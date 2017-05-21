<template>
	<div id="home" class="home-main">
		
		<!--头 -->
		<home-header></home-header>
		
		<!--标题-->
		<home-content :titledata="homeTitle" v-if="homeTitle.length"></home-content>
		
	
	</div>
</template>

<script>

import Vue from 'vue'
import http from 'vue-resource'

import homeHeader from './homeHeader.vue'
import homeContent from './homeContent.vue'
Vue.use(http);



export default{
	name:'home-main',
	data(){
		return{
			homeTitle:[],
			model:{
				selected:'0'
			},
		}
	},
	mounted(){
		//获取头部的精选等数据
		var that = this;
		this.$http.get("./static/json/homeTitle.json").then(
			function(res){
				res.data.data.channels.map(function(item,index){
					var obj = {
						title:item.name,
						id:item.id
					}
					that.homeTitle.push(obj);
				});
			},function(){
				console.log("homeTitle获取数据失败");
			}
		)
		
		
	},
	components:{
		'home-header':homeHeader,
		'home-content':homeContent
	}
}


</script>

<style>
</style>