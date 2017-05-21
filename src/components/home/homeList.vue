<template>
	<div class="home-list">
		<div class="home-list-item" v-for="(obj,index) in listdata">
			<div class="home-list-item-top">
				<div class="icon"><img src="../../../static/img/icon.jpg"></div>
				<div class="icon-word">
					<h6>美物娘</h6>
					<p>恋各种美好事物的女汉子</p>
				</div>
			</div>
			<div class="big-picture"><img :src="obj.imgstr" /></div>
			<div class="home-list-content">
				<h3 class="home-list-title">{{obj.title}}</h3>
				<p>{{obj.content}}</p>
			</div>
			<div class="home-list-item-bottom">
				<span>栏目</span>
				<b>美物收割机</b>
				<em>{{obj.count}}</em>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:"home-list",
	props:["listdata"]
}
</script>

<style>

.home-list{
	width: 100%;
}

.home-list-item{
	padding: 0 5%;
	width: 90%;
	margin-bottom: 12px;
	background: white;
}


.home-list-item-top{
	width: 100%;
	display: flex;
	padding-top: 15px;
}

.icon{
	width: 37px;
	height: 37px;
	border-radius: 50%;
	overflow: hidden;
}

.icon img{
	width: 100%;
}

.icon-word{
	margin-left: 10px;
	flex: 1;
}

.icon-word h6{
	height: 23px;
	font-size: 12px;
	color: #372424;
	line-height: 18px;
}

.icon-word p{
	font-size: 12px;
	transform: scale(0.8);
	transform-origin: left;
	color: #a29898;
}

.big-picture{
	width: 100%;
	height: 190px;
	overflow: hidden;
	padding: 15px 0 24px 0;
	box-sizing: border-box;
}

.big-picture img{
	width: 100%;
	display: block;
}

.home-list-title{
	font-size: 16px;
	color: #503c3c;
	height:50px;
	line-height: 25px;
}
.home-list-content p{
	font-size: 12px;
	color: #a19797;
	line-height: 21px;
	width: 100%;
	display: -webkit-box!important;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-all;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	position: relative;

}

.home-list-content{
	position: relative;
	padding-bottom: 15px;
	
}
.home-list-content:after{
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

.home-list-item-bottom{
	width: 100%;
	padding: 15px 0;
	overflow: hidden;
}

.home-list-item-bottom span{
	font-size: 12px;
	transform: scale(0.8);
	transform-origin: left;
	color: #a19797;
	float: left;
}

.home-list-item-bottom b{
	font-size: 12px;
	transform: scale(0.8);
	transform-origin: left;
	color: #a19797;
	float: left;
	padding: 0 5px;
}

.home-list-item-bottom em{
	font-size: 12px;
	transform: scale(0.8);
	transform-origin: left;
	color: #a19797;
	font-style: normal;
	float: right;
}
</style>