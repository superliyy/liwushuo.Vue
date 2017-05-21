<template>
	<transition enter-active-class="slideInRight sell-animated" leave-active-class="slideOutRight sell-animated">
		<div class="top-detail">
			
			<detail-header @back-click="backAction"></detail-header>
			
		
				
		    
	</div>
			

		
		
	</transition>
</template>
 
  

<script>
import Vue from 'vue'
import http from 'vue-resource'	
	
import detailHeader from "./detailHeader.vue"
import router from "./../../router"
Vue.use(http)	
	
export default{
	methods:{
		backAction(){
			router.back();
		}
	},
	components:{
		"detail-header":detailHeader
	}
}	
//	
	
	
</script>








<style>
.top-detail{
  position: absolute;
  top: 0;
  left: 0;
  bottom:0;
  width: 100%;
  z-index: 5;
  background: #faf5f5;
}

	
	
	
	
</style>