<template>
	<view class="modal-backdrop"></view>
	<view class="personal-center">
		<view class="user-info">
			<image src="/static/logo.png" mode="aspectFill"></image>
			<text>昵称</text>
		</view>
		<text class="new-dialog">开启新对话</text>
		<text class="history">对话历史</text>
		<scroll-view scroll-y="true" type="list" enhanced enable-passive class="scroll-height">
			<view class="history-list">
				<text class="text-show">消息</text>
				<text>2023</text>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		buttonPosition
	} from "@/api/component-api.js"
	const {
		but_height,
		but_top,
		but_bottom
	} = buttonPosition()
</script>

<style lang="less" scoped>
	.modal-backdrop {
		position: fixed;
		left: 0;
		top: v-bind('but_bottom');
		bottom: 0;
		right: 0;
		background: rbga(0, 0, 0, 0.8);
	}

	.personal-center {
		background-color: #f8f8f8;
		position: fixed;
		left: -80%;
		top: v-bind('but_bottom');
		bottom: 0;
		width: 80%;
		animation: slideInFromLeft 0.5s forwards;
		@keyframes slideInFromLeft {
			
		}
		.user-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 30rpx 0;

			image {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
			}

			text {
				font-size: 35rpx;
				font-weight: bold;
				padding-top: 10rpx;
			}
		}

		.new-dialog {
			margin: 45rpx 20rpx;

		}

		.history {
			margin: 30rpx 20rpx;
			border-bottom: 1rpx solid rgba(218, 218, 218, 0.6);
		}

		.scroll-height {
			height: 800rpx;
			.history-list{
				background-color: #fff;
				border-radius: 20rpx;
				margin: 20rpx;
				padding: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.history-list text:nth-child(1){
				flex:1
			}
			.history-list text:nth-child(2){
				color:#9d9eab;
				font-size:26rpx;
				padding-left: 20rpx;
				
			}
		}
	}
</style>