<template>
	<header class="home-header-top">
	    <h1>礼物说</h1>
	    <div class="search-bar">
	    	<span class="search"><em>选份走心好礼送给ta</em></span>
	    </div>
	    <span class=" iconfont icon-erweimasaomiaohei"></span>
	</header>
</template>

<script>

import Vue from 'vue'

export default {
	name:'sell-header',
	
}
</script>

<style>

.home-header-top{
	width: 100%;
	background-color: #fffefe;
	height: 44px;
	line-height: 34px;
	padding: 5px 10px;
	display: flex;
	box-sizing: border-box;
}

.home-header-top h1{
	font-size: 17px;
	color: #ff2d47;
	width: 64px;
}

.search-bar{
	display: inline-block;
	height: 30px;
	line-height: 30px;
	background-color: #faf5f5;
	width: 74%;
	border-radius: 12px;
	text-align: center;
}
.search-bar em{
	font-size: 12px;
	color: #8d7a7a;
	font-style: normal;
}

.iconfont.icon-erweimasaomiaohei{
	font-size: 20px;
	color: #ff2d47;
	text-align: right;
	margin-left: 5%;
	padding: 3px;
}
.home-header-title{
	height: 38px;
	line-height: 38px;
	font-size: 13px;
	width: 100%;
    margin: 0 auto;
}



/*title*/
.home-header-title div.mint-tab-item-label{
	margin: 0 10px ;
	padding:0px 2px 3px 2px;
	border-bottom: 2px solid #fffefe;
	transform: scale(1);
	color: #321e1e;
}

.home-header-title  .mint-navbar .mint-tab-item {
	padding: 11px 0;
}

div.mint-navbar .mint-tab-item.is-selected{
	
	border-bottom: 2px solid #ff2d47;
    color: #ff2d47;
    margin-bottom: 0px;
}
.mint-tab-item.is-selected .mint-tab-item-label{
	color: #ff2d47;
}
</style>