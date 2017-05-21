<template>
	<div class="strategy-section">
		<strategy-header :title='titleArr[0]'></strategy-header>
		<div class="strategy-scroller" id="strategy-scroller">
			<strategy-column v-if="columnArr" :columndata="columnArr"></strategy-column>
		</div>
		<div class="strategy-others" v-if="otherArr" v-for="(arr,index) in otherArr" :key="index">
			<strategy-header :title='titleArr[index+1]'></strategy-header>
			<strategy-others :otherdata="arr"></strategy-others>
		</div>
		
	</div>
</template>

<script>

import Vue from 'vue'
import http from 'vue-resource'

Vue.use(http);

//引用子组件
import column from './column.vue'
import othersColumn from './othersColumn.vue'
import strategyHeader from './strategyHeader.vue'

export default{
	name:'strategy-section',
	data(){
		return{
			columnArr:[],
			otherArr:[],
			titleArr:['栏目','品类','风格','对象']
		}
	},
	components:{
		'strategy-header':strategyHeader,
		'strategy-column':column,
		'strategy-others':othersColumn
	},
	mounted(){
		var that = this;
		var myScroll = new IScroll('#strategy-scroller', {
		    scrollbars: false,
		    scrollX:true,
		    bounce:false,
		    probeType:3
		});
		myScroll.on('beforeScrollStart', function(){
			that.$emit('scroll-start');
		});
		myScroll.on('scrollEnd', function(){
			that.$emit('scroll-end');
			
		});
		//获取栏目数据
		this.$http.get('./static/json/strategy.json').then(
			function(res){
				var tempArr=[];
				res.data.data.columns.map(function(item,index){
					if(index%3==0&&index!=0){
						this.columnArr.push(tempArr);
						tempArr=[];
					}
					var obj = {
						author:item.author,
						title:item.title,
						id:item.id,
						img:item.cover_webp_url
					};
					tempArr.push(obj);
				}.bind(this));
				this.columnArr.push(tempArr);
				myScroll.refresh();
			},
			function(){
				console.log('columnArr获取数据失败');
			}
		),
		
		//获取栏目数据
		this.$http.get('./static/json/otherStrategy.json').then(
			function(res){
				res.data.data.channel_groups.map(function(item,index){
					var tempArr=[];
					item.channels.map(function(item1,index1){
						var obj = {
							img:item1.cover_image_url,
							id:item1.id,
						};
						tempArr.push(obj);
					});
					this.otherArr.push(tempArr);	
				}.bind(this));
//				console.log(this.otherArr);
			},
			function(){
				console.log('otherArr获取数据失败');
			}
		)
		
		
	}
}

</script>

<style>
.strategy-section{
	width: 100%;
}
.strategy-scroller{
	width: 100%;
	overflow: auto;
}

.strategy-section-wrapper{
	padding: 4px 2% 0;
}

.strategy-others{
	margin-top: 10px;
}

</style>