<template>
	<view class="menu-view">
		<view class="button-top"></view>
		<view class="menu-style">
			<text v-for="(item,index) in menu" :key="index">{{item}}</text>
		</view>
	</view>
	<!-- 撑开上面的区域 -->
	<view class="menu-view-height"></view>
	<!-- <startPageVue></startPageVue> -->
	<!-- <chatAreaVue></chatAreaVue> -->
	<!-- <inputBoxVue></inputBoxVue> -->
	<personalCenter></personalCenter>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import {
		buttonPosition
	} from "@/api/component-api.js"
	
	import startPageVue from "./component/start-page.vue"
	import chatAreaVue from "./component/chat-area.vue"
	import aiDrawingVue from "./component/ai-drawing.vue"
	import inputBoxVue from "./component/input-box.vue"
	import personalCenter from "@/pages/personal-center/index.vue"
	const {
		but_height,
		but_top,
		but_bottom
	} = buttonPosition()
	const menu = ref(["我的", "对话", "AI绘画"])
</script>

<style lang="less">
	page {
		background-color: #f3f3f3;
	}

	.menu-view {
		height: v-bind(but_bottom);
		background: linear-gradient(#FCE7CC, #f3f3f3);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9999;

		/**/
		.button-top {
			height: v-bind(but_top);
		}

		.menu-style {
			display: flex;
			align-items: center;
			height: v-bind(but_height);
			padding-left: 20rpx;
		}

		.menu-style text {
			color: #9D9486;
			font-weight: bold;
		}

		.menu-style text:nth-child(2) {
			padding: 0 60rpx;
		}
	}

	.menu-view-height {
		height: v-bind(but_bottom);
	}
</style>