<template>
	<div class="single-content">
		<div class="single-content-section" >
			<div class="single-picture">
				<img :src=" contentobj.img " />
			</div>
			<p>{{contentobj.name}}</p>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

export default{
	name:'single-content',
	props:['contentobj'],
}
	
</script>

<style>



.single-content1{
	overflow: hidden;
}
.single-content-title{
	overflow: hidden;
	padding-bottom: 40px;
}
.single-content-section{
	width: 33.33%;
	float: left;
	height: 140px;
}
.single-picture{
	width: 100%;
	height: 110px;
	color: #333333;
	
}
.single-picture img{
	display: block;
	width: 100%;
	height: 100%;
}
.single-content-section p{
	font-size: 12px;
	text-align: center;
	transform: scale(0.9);
}

</style>