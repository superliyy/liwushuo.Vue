<template>
	<div class="home-banner">
		<div class="home-banner-img" v-for="(str,index) in bannerdata" :key="index"><img :src="str"/></div>
	</div>
</template>

<script>
export default{
	name:'home-banner',
	props:["bannerdata"]
}
</script>

<style>

.home-banner{
	width: 100%;
	height: 140px;
	margin: 12px 0;
	background: #ffffff;
	overflow: hidden;
}

.home-banner-img{
	width: 33.333%;
	height: 50%;
	float: left;
}

.home-banner-img img{
	height: 100%;
	display: block;
}

</style>