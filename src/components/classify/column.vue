
<template>
	<div class="strategy-section-wrapper">
		<div class="strategy-sections" v-for="(arr,index) in columndata" :key="index">
			<div class="strategy-sections02" v-for="(obj,index) in arr" :key="index">
				<div class="strategy-picture">
					<img :src="obj.img" />
				</div>
				<span class="strategy-word">
					<p>{{obj.author}}</p>
					<p>{{obj.title}}</p>
				</span>
			</div>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'



export default{
	name:'strategy-section-wrapper',
	props:['columndata'],
	
}

</script>

<style>
.strategy-section-wrapper{
	/*margin-bottom: 10px;*/
	width:1060px;
	/*overflow: hidden;*/
	background-color: white;
}
.strategy-section-wrapper:after{
	content: "";
	display: block;
	clear: both;
	overflow: hidden;
}

.strategy-sections{
	float: left;
}

.strategy-sections02{
	/*height: 28.5%;*/
	display: flex;
}

.strategy-picture{
	width: 130px;
	height: 70px;
}
.strategy-picture img{
	width: 100%;
	display: block;
}

.strategy-word{
	flex: 1;
	padding: 10px 50px 0 10px;
	font-weight: bold;
	box-sizing: border-box;
}

.strategy-word p:nth-of-type(1){
	font-size: 12px;
	color: #321e1e;
	
}

.strategy-word p:nth-of-type(2){
	font-size: 10px;
	color: #a09696;
	margin-top: 12px;
}

</style>