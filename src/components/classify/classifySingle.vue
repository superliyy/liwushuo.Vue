<template>
	<div class="classify-single">
		<div id="single-title-scroll" class="single-title-scroll">
			<div class="single-title-wrapper">
				<h6 class="single-title-t" @click="clickTitle(index)" :class="{'active':index==selectIndex}" v-for="(title,index) in titleArr" :key="index">{{title}}</h6>
			</div>
		</div>
		<div id="single-content-scroll" class="single-content-scroll">
			<div>
			<div class="single-content-title"  v-for="(arr,index) in contentArr" :key="index">
				
				<hr />
				<h6 class="single-title-h">{{titleArr[index]}}</h6>
				<single-content   :contentobj="obj" v-for="(obj,i) in arr" :key="i"></single-content>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import http from 'vue-resource'
Vue.use(http);

//引入子组建
import singleContent from './singleContent.vue'

export default{
	name:'classify-single',
	components:{
		"single-content":singleContent,
	},
	data(){
		return{
			titleArr:[],
			contentArr:[],
			disYArr:[],
			disyArr:[],
			titleScroll:null,
			contentScroll:null,
			selectIndex:0,
			isFirst:true
		}
	},
	methods:{

		clickTitle(index){
			this.selectIndex = index;
			if(this.disYArr.length==0){
				
				var contentEl = document.getElementsByClassName('single-content-title');
				var headerEl = document.getElementsByClassName('single-title-t');
				
				for(var i = 0;i<contentEl.length;i++){
					this.disYArr.push(contentEl[i].offsetTop);
					this.disyArr.push(headerEl[i].offsetTop);						
				}
			}
			var offY = -this.disYArr[index];
			offY = this.contentScroll.maxScrollY>offY? this.contentScroll.maxScrollY : offY;
			this.contentScroll.scrollTo(0,offY );
			if(index>=2&&index<=9){
				
				this.titleScroll.scrollTo(0,-this.disyArr[index-1],200);
			}
		}
		
		
	},
	mounted(){
		this.titleScroll = new IScroll('#single-title-scroll', {
		    scrollbars: false,
		    scrollY:true,
		    bounce:false,
		    probeType:3,
		    click:true
		});
		
		this.contentScroll = new IScroll('#single-content-scroll', {
		    scrollbars: false,
		    scrollY:true,
		    bounce:false,
		    probeType:3,
		    click:true
		});
		
		var that = this;
		this.contentScroll.on('scroll',function(){
			if(that.disYArr.length==0){
				that.titleScroll.refresh();
				var contentEl = document.getElementsByClassName('single-content-title');
				var headerEl = document.getElementsByClassName('single-title-t');
				
				for(var i = 0;i<contentEl.length;i++){
					that.disYArr.push(contentEl[i].offsetTop);
					that.disyArr.push(headerEl[i].offsetTop);						
				}
			}
			for(var i = that.disYArr.length-1;i>=0;i--){
				if(that.contentScroll.y<-that.disYArr[i]){
					
					if(that.selectIndex>=1&&that.selectIndex<7){
						that.titleScroll.scrollTo(0,-that.disyArr[that.selectIndex-1],200);
					}
					that.selectIndex = i;
					break;
				}
			}
			
		});
		
		//获取single数据
		this.$http.get('./static/json/single.json').then(
			function(res){
				res.data.data.categories.map(function(item,index){
					this.titleArr.push(item.name);
					var tempArr = [];
					item.subcategories.map(function(item1,index1){
						var obj = {
							name:item1.name,
							id:item1.id,
							img:item1.icon_url
						};
						tempArr.push(obj);
					}.bind(this));
					this.contentArr.push(tempArr);
				}.bind(this));

				
			},
			function(){
				console.log('single数据获取失败！');
			}
		)
	},
	updated(){
		var that = this;
		document.querySelector('.classify-single').addEventListener('touchstart',function(){
			if(that.isFirst){
				that.contentScroll.refresh();
				that.titleScroll.refresh();
				that.isFirst = false;
			}
		})
	}
}
	
</script>

<style>


.single-title-wrapper{
	overflow: hidden;
}
.single-title-t{
	width: 100%;
	height: 46px;
	font-size: 12px;
	text-align: center;
	line-height: 46px;
	border-left: 3px solid #f6f6f7;
	box-sizing: border-box;
	background-color: #f6f6f7;
}
.single-title-t.active{
	border-left: 3px solid #ff0000;
	background: white;
}
	
	
.single-content-scroll{
	flex: 1;
	overflow: hidden;
	background-color: white;
}

.single-title-scroll{
	width: 75px;
	overflow: hidden;
}
.classify-single{
	width: 100%;
	height: 100%;
	display: flex;
}
/*.single-title{
	width: 75px;
	line-height: 46px;
	text-align: center;
	font-size: 14px;
	color: #333333;
	background-color: #f6f6f7;
}

.single-content{
	flex: 1;
	background-color: #ffffff;
}*/

.single-content-title{
	position: relative;
}
.single-title-h{
	position: absolute;
	font-size: 12px;
	color: #A09696;
	top: 10px;
	left: 0px;
	right: 0;
	width: 60px;
	text-align: center;
	margin: auto;
	background-color: white;
}

	
</style>