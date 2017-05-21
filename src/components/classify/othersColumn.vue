<template>
	<div class="other-column" >
		<div :key="index" v-for='(obj,index) in otherdata'  class="other-column-picture">
			<img v-if="index<6" :src="obj.img" />
		</div>
	</div>
</template>


<script>
import Vue from 'vue'

export default{
	name:'other-column',
	props:['otherdata']
}

</script>

<style>
.other-column{
	overflow: hidden;
	background-color: white;
	padding: 4px 0 10px 0;
}

.other-column-picture{
	float: left;
	width: 47%;
	padding-left:  2%;
	margin-bottom: 4px;
}

.other-column-picture img{
	display: block;
	width: 100%;
}

</style>