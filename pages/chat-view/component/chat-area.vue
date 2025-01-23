<template>
	<view class="user-message">
		用户消息
	</view>
	<view class="zhipu-message">
		<text>ai回复</text>
		<loadingVue></loadingVue>
		<view>
			<view class="recommend-tips">我还为你推荐以下内容</view>
			<view class="recommend-content">
				<text class="recommend-items">123456</text>
				<text class="recommend-items">123456</text>
				<text class="recommend-items">123456</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import loadingVue from "./loading.vue"
</script>

<style lang="less">
	.user-message {
		background-color: #20c57d;
		border-radius: 4rpx;
		color: #fff;
		padding: 15rpx;
		margin: 30rpx 20rpx 0 20rpx;
		display: inline-block;
	}

	.zhipu-message {
		background-color: #fff;
		border-radius: 4rpx;
		color: #333;
		padding: 15rpx;
		margin: 30rpx 20rpx 0 20rpx;

		.recommend-tips {
			background-color: #f3f3f3;
			border-radius: 10rpx;
			margin: 20rpx 0;
			padding: 15rpx;
			font-weight: bold;
		}

		.recommend-content {	
			background-color: #f3f3f3;
			border-radius: 10rpx;
			padding: 15rpx;

			.recommend-items {
				margin-bottom: 15rpx;
				color: #006c45;
			}

			.recommend-items:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>