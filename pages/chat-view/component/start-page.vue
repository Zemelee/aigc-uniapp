<template>
	<view class="start-page-view">
		<text class="greeting-text">你好，我是你的AI智能助手</text>
		<text class="intro-text">22222222</text>
		<view class="question-hint">
			<view class="question-text">你可以试着问问我</view>
			<view class="change-btn" @click="randomData('1')">
				<image src="/static/huanyihuan.png" mode="widthFix"
				:class="{'rotate-animation':isRotating}"></image>
				<text>换一换</text>
			</view>
		</view>
		<view class="default-questions">
			<view class="default-questions-item" v-for="(item,index) in newData" :key="index">
				<image :src="item.icon" mode="widthFix" ></image>
				<view class="">{{item.title}}</view>
				<text class="text-show">{{item.problem}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import m1 from "/static/M/m1.png"
	import m2 from "/static/M/m2.png"
	import m3 from "/static/M/m3.png"
	import m4 from "/static/M/m4.png"
	const problemData = [{
			icon: m1,
			title: "活动方案策划",
			problem: "2222"
		},
		{
			icon: m2,
			title: "用户调研报告来了",
			problem: "轻松看懂当前消费者的大模型认知程度"
		},
		{
			icon: m3,
			title: "泰国出手打击网络诈骗",
			problem: "月内生效！泰国颁布紧急法令打击网络诈骗"
		},
		{
			icon: m4,
			title: "收入与支出分析",
			problem: "根据城镇输入与文化娱乐"
		},{
			icon: m1,
			title: "32323",
			problem: "2222"
		},
		{
			icon: m2,
			title: "5555",
			problem: "轻松看懂当前消费者的大模型认知程度"
		},
		{
			icon: m3,
			title: "6666",
			problem: "月内生效！泰国颁布紧急法令打击网络诈骗"
		},
		{
			icon: m4,
			title: "7777",
			problem: "根据城镇输入与文化娱乐"
		},
	]
	const newData = ref([])	
	const isRotating = ref(false)
	const randomData = (val) => {
		if(isRotating.value) return //防止多次点击
		newData.value = [...problemData].sort(() => Math.random() - 0.5).splice(0, 4)
		console.log(newData.value)
		if(val=="1"){
			isRotating.value = true
			setTimeout(()=>{
				isRotating.value = false
			},1000)
		}
	}
	// onLoad:页面生命周期函数，接收 options 参数，可以用来获取页面跳转时传递的参数，
	// 不依赖于 Uniapp 页面的参数传递传递参数的情况下等同于onMounted
	onLoad(()=>{
		randomData("0")
	})
</script>

<style lang="less" scoped>
	.start-page-view {
		background-color: #fff;
		border-radius: 5rpx;
		margin: 20rpx;
		padding: 20rpx;

		.greeting-text {
			font-size: 40rpx;
			font-weight: bold;
		}

		.intro-text {
			color: #777A8D;
			line-height: 1.5;
			padding: 25rpx 0;
		}

		.question-hint {
			display: flex;
			justify-content: space-between; //左右
			align-items: center; //对齐

			.question-text {
				color: #777A8D;
			}

			.change-btn {
				display: flex;
				align-items: center;

				image {
					width: 30rpx;
					margin: 0 10rpx;
				}

				text {
					color: #5A56D0;
				}
			}
		}
		
		.default-questions{
			display: grid;
			grid-template-columns: repeat(2,1fr);
			gap:20rpx;
			padding-top:25rpx ;
			.default-questions-item{
				background-color: #f7f8fc;
				padding: 20rpx;
				border-radius: 4rpx;
				image{
					width:50rpx;
				}
				view{
					font-size:33rpx;
					font-weight: bold;
					padding: 10rpx 0;
				}
				text{
					color: #777A8D;
					line-height: 1.5;
					-webkit-line-clamp: 2 !important;
				}
				.rotate-animation{
					transition: 1s;
					transform: rotate(360deg);
				}
			}
		}
	}
</style>