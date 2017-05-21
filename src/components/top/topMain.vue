<template>
	<div class="top-top">
	    <!--头部-->
		<header class="top-header">
			<p class="header-h1">礼物榜</p>
			<span class="header-fenxiang iconfont icon-fenxiang"></span>
		</header>
     
         <!--内容-->
      <div id="top" class="top-main">
      	
      	<div>
		<mt-navbar v-model="selected">
		  <mt-tab-item v-for="(item,index) in toptitle" :key="index" :id="'tab-container'+index">{{item.title}}</mt-tab-item>
		</mt-navbar>
		</div>
		
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected" :swipeable="isswipeable">
		  <mt-tab-container-item v-if="toptitle" v-for="(item,index) in toptitle" :key="index" :id="'tab-container'+index">
		  	<div class="wrapper">
		  	<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
		  		<div class="topImg">
		  			<img :src="item.img"    />
		  		</div>
		  		
		  		<div class="top-content" v-for="(item,index) in topContent" :key=" index" @click="itemTopAction()">
		       	  <img :src="item.img" />
		       	  <p class="biaoti">{{item.header}}</p>
		       	  <p class="jianjie">{{item.content}}</p>
		       	  <p class="jiage"><span class="span1">{{item.jia}}</span> <span class="span2">{{item.money}}</span></p>
		  		</div>  	
		      	
		        
		    </mt-loadmore>   
		    </div>
		  </mt-tab-container-item>
		 
		</mt-tab-container>

	</div>
	
	
	<!--子页面-->
	<router-view></router-view>
	
   </div>
</template>

<script>
import Vue from 'vue'
import http from 'vue-resource'
Vue.use(http)
import { TabContainer, TabContainerItem,Loadmore, Navbar, TabItem ,Cell} from 'mint-ui';
import router from "./../../router"



Vue.component(Loadmore.name, Loadmore);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);

export default{
	name:'top',
	data(){
		return {
			selected:"tab-container0",
			isswipeable:true,
			toptitle:[],
			topContent:[]
		}
	},
	methods:{
		loadTop(){
			console.log("下拉刷新");
		},
		loadBottom(){
			console.log("上拉加载");
		},
		itemTopAction(id){
//			console.log("哈哈"+ this.id);
			router.push("/top/topDetail/"+this.id);
		}
	},
	mounted(){
		var that = this;
		this.$http.get("/static/json/toptitle.json").then(
			function(res){
//				console.log(res.data);
				res.data.map(function(item,index){
					that.toptitle.push(item);
				})
//				console.log(that.toptitle);
				
			},
			function(res){
				
			}
		);
		var that = this;
		this.$http.get("/static/json/topContent.json").then(
			function(res){
				console.log(res.data);
				res.data.map(function(item,index){
					that.id = item.id;
//					console.log(item.id)
					that.topContent.push(item);
				})
			},
			function(res){
				
			}
		);
	}
	
}
</script>

<style>
.top-top{
	width: 100%;
	height: 100%;
}
.top-main .mint-tab-container-wrap{
	height: 100%;
}
.top-header{
	width: 100%;
	height:44px ;
	position: relative;
}	
div.wrapper{
	background: #faf5f5;
	width: 100%;
 	height: 100%;
    /*position: absolute;*/
    position: static;
    overflow: auto;
    top: 0;
    left: 0;
    bottom: 49px;
}
.top-header .header-h1{
	text-align: center;
	font-size: 16px;
	line-height: 44px;
}
.top-header .header-fenxiang{
	position: absolute;
	right: 15px;
	top:0 ;
	font-size: 16px;
	line-height: 44px;
}

/*#top .mint-navbar{
	width: 180px;
    margin: 0 auto;
}*/

#top .mint-navbar .is-selected{
	border-bottom: 3px solid #ff2d47;
	color: #ff2d47;
}
#top .mint-tab-container{
	position: absolute;
    top: 95px;
    left: 0;
    bottom: 49px;
    width: 100%;
}
div.topImg{
	width: 100%;
	height: 100%;
	
}
div.topImg img{
	width: 100%;
}
div .top-content{
   width: 45%;
   height: 240px;
   margin-top: 10px;
   margin-left: 13px;
   float: left;
   background: #fff;
}
div .top-content img{
   width: 100%;

}
div .top-content .biaoti{
	width:140px ;
    height: 14px;
    margin-left: 5px;
    color: #000;
    font-size: 12px;
    margin-top: 10px;
}
div .top-content .jianjie{
   width: 138px;
   margin-left: 5px;
   color: #c6bfbf;
   font-size: 12px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   -webkit-line-clamp: 2;
   margin-top:13px;
}
div .top-content .jiage{
  color: #ff2d47;
  margin-left: 6px;
  margin-top: 20px;
}

</style>