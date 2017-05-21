
<template>
	<header class="strategy-header">
		<h6>{{title}}</h6>
		<div class="strategy-all">查看全部<em class="iconfont icon-sanjiaoxing"></em></div>
	</header>
</template>

<script>

import Vue from 'vue'

export default{
	name:'strategy-header',
	props:['title']
}

</script>

<style>
.strategy-header{
	height: 20px;
	background-color: white;
	line-height: 20px;
	overflow: hidden;
	padding: 0 2%;
	font-size: 12px;
}	
.strategy-header h6{
	float: left;
	color: #baaeae;
	font-weight: normal;
}

.strategy-all{
	float: right;
	color: #5f4c4c;
}

.icon-sanjiaoxing{
	color: #8c7878;
	font-size: 8px;
	margin-left: 4px;
}

</style>