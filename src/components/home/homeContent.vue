<template>
	<div class="home-content">
		<!--title-->
		<mt-navbar v-model="selected" class="home-header-title">
		  <mt-tab-item  v-for="(obj,index) in titledata" :key="index" :id="'nav'+index">{{obj.title}}</mt-tab-item>
		</mt-navbar>
		
		<!--content-->
		<mt-tab-container v-model="selected" :swipeable="isswipeable">
		  <mt-tab-container-item v-if="listArr.length"  v-for="(data,index) in listArr" :key="index" :id="'nav'+index">
		  	<div class="home-content-wrapper">
		  	<mt-loadmore :top-method="loadTop" :bottom-method="loadMore" :autoFill="false" :bottom-all-loaded="allLoaded"  :top-all-loaded="allLoaded"  ref="loadmore">
		    	
		    	<home-scroller v-if="index==0&&scrollArr" :scrolldata="scrollArr"  v-on:scroll-swipe="stopLoad"></home-scroller>
		    	<home-banner v-if="index==0&&bannerArr" :bannerdata="bannerArr"></home-banner>
		  		
		  		<home-list  :listdata="data"></home-list>
		  		
		  	</mt-loadmore>
		    </div>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>

import Vue from 'vue'

import http from 'vue-resource'
Vue.use(http)

//引用mint ui
import { TabContainer, TabContainerItem,Loadmore, Navbar, TabItem ,Cell} from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);

//引用子组件
import homeScroller from './homeScroller.vue'
import homeBanner from './homeBanner.vue'
import homeList from './homeList.vue'

export default{
	name:'home-content',
	props:["titledata"],
	data(){
		return{
			isswipeable:true,
			selected:'nav0',
			scrollArr:[],
			bannerArr:[],
			listArr:[],
			allLoaded:false
		}
	},
	components:{
		'home-scroller':homeScroller,
		'home-banner':homeBanner,
		'home-list':homeList
	},
	methods:{
		loadTop(){
			console.log("下拉刷新");
			var that = this;
			this.loadList(that.selected,'top');
		},
		loadmore(){
			
		},
		loadMore(){
			console.log("上拉加载");
			var that = this;
			this.loadList(that.selected,'bottom');
		},
		stopLoad(){
			
		},
		loadList(select,str){
			var that = this;
			var numIndex = select[select.length-1]; 
			var urlStr = './static/json/homeList'+that.titledata[numIndex].id+'.json';  
			
			if('top'==str){
				that.listArr[numIndex]=[];
			}
			that.$http.get(urlStr).then(
				function(res){
					res.data.data.items.map(function(item,index){
						var obj = {
							title:item.title,
							content:item.introduction,
							imgstr:item.cover_image_url,
							count:item.likes_count
						};
				        that.listArr[numIndex].push(obj);
					})
					console.log(that.listArr);
					if('bottom'==str){
						that.$refs.loadmore[numIndex].onBottomLoaded();
					}else{
						that.$refs.loadmore[numIndex].onTopLoaded();
					}
				},function(){
					console.log("获取数据失败！");
					if('bottom'==str){
						that.$refs.loadmore[numIndex].onBottomLoaded();
					}else{
						that.$refs.loadmore[numIndex].onTopLoaded();
					}
				}
			)
		}
	},
	mounted(){
		//获取轮播图的数据 
		var that = this;
		this.$http.get("./static/json/homeScroll.json").then(
			function(res){
				res.data.data.banners.map(function(item,index){
					that.scrollArr.push(item.webp_url);
				})
			},function(){
				console.log("homeScroll获取数据失败！");
			}
		);
		//获取banner的数据
		this.$http.get("./static/json/homeBanner.json").then(
			function(res){
				res.data.data.secondary_banners.map(function(item,index){
					that.bannerArr.push(item.webp_url);
				})
			},function(){
				console.log("homeBanner获取数据失败！");
			}
		);
		
		this.titledata.map(function(item1,index1){
			var str = './static/json/homeList'+item1.id+'.json';
			that.$http.get(str).then(
				function(res){
					var list = [];
					res.data.data.items.map(function(item,index){
						var obj = {
							title:item.title,
							content:item.introduction,
							imgstr:item.cover_image_url,
							count:item.likes_count
						};
						list.push(obj);
					})
					console.log(item1.title+'获取数据成功');
					that.listArr.push(list);
				},function(){
					console.log("获取数据失败！");
				}
			)
		})
	}
}
</script>

<style>
.home-content{
	width: 100%;
	height: 100%;
}

.home-header-title{
	position: relative;
}

.home-header-title:after{
	content: '';
	display: block;
	left: 0;
	bottom: -1px;
	height: 1px;
	width: 100%;
	position: absolute;
	border-top: 1px solid #f0e6e6;
	transform: scaleY(0.5);
}

.home-content-wrapper{
	width: 100%;
 	height: 100%;
    position: static;
    overflow: auto;
    top: 0;
    left: 0;
    bottom: 49px;
}
.home-content .mint-tab-container{
	position: absolute;
	top: 82px;
    left: 0;
    bottom: 49px;
    width: 100%;
}
div.home-content .mint-tab-container-wrap{
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0;
}
/*.mint-tab-container-wrap{
	transform: translate3d(0px, 0px, 0px)!important;
}*/

</style>