<template>
	<view class="style-title">
	</view>

	<scroll-view scroll-x class="scroll_view_H" scroll-with-animation="true" enable-passive>
		<view class="style-content" v-for="(item,index) in styleList" :key="index"
			:class="{'select-style':selectIndex==index}">
			<view class="style-list" @click="selectIndex=index">
				<image :src="item.icon" mode="aspectFill"></image>
				<text :style="{'backgroundColor':item.color}">{{item.style}}</text>
			</view>
		</view>
	</scroll-view>
	<view class="keyword-title">
		画面关键词
	</view>
	<view class="textarea-view">
		<textarea placeholder="身穿汉服" :show-confirm-bar="false" class="textarea-style"></textarea>
	</view>
	<view class="creactive-tips">ai绘图中...</view>
	<view class="creactive-image">
		<image src="../../../static/logo.png" mode="widthFix"></image>
	</view>
	<!-- 提交生成 -->
	<button class="submit-creation">生成图片</button>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const selectIndex = ref(0);
	const styleList = ref([{
		icon: "/static/fengge/001.png",
		style: "无风格",
		color: "#1f9be5"
	}, {
		icon: "/static/fengge/002.png",
		style: "动漫风格",
		color: "#4f965e"
	}, {
		icon: "/static/fengge/003.png",
		style: "写实",
		color: "#93726f"
	}, {
		icon: "/static/fengge/004.jpg",
		style: "Q版简绘",
		color: "#204251"
	}, {
		icon: "/static/fengge/005.png",
		style: "治愈男生",
		color: "#656565"
	}, {
		icon: "/static/fengge/006.png",
		style: "治愈女生",
		color: "#d49d7d"
	}, {
		icon: "/static/fengge/007.png",
		style: "卡通手绘",
		color: "#ff9999"
	}, {
		icon: "/static/fengge/008.png",
		style: "复古动漫",
		color: "#ffcc66"
	}, {
		icon: "/static/fengge/009.png",
		style: "港风胶片",
		color: "#cc3300"
	}])
</script>

<style lang="less">
	.style-title {
		padding: 20rpx;
	}

	.scroll_view_H {
		white-space: nowrap;
		height: 130rpx;

		.style-content {
			height: 130rpx;
			width: 130rpx;
			margin-left: 20rpx;
			display: inline-flex;
			align-items: center;
			justify-content: center;

			.style-list {
				position: relative;

				image {
					width: 110rpx;
					height: 110rpx;
					border-radius: 15rpx;
					position: relative;
				}

				text {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					font-size: 22rpx;
					border-bottom-left-radius: 15rpx;
					border-bottom-right-radius: 15rpx;
					text-align: center;
					padding: 5rpx 0;
					color: #ffffff
				}
			}


		}

		.style-content:last-child {
			margin-right: 20rpx;
		}

		// 选中加上边框
		.select-style {
			border: 1px solid #e23256;
			border-radius: 15rpx;
			box-sizing: border-box;
		}
	}

	.keyword-title {
		padding: 50rpx 20rpx 20rpx 20rpx;
	}

	.textarea-view {
		background-color: #fff;
		margin: 0 20rpx;
		border-radius: 20rpx;
		padding: 10rpx;

		.textarea-style {
			width: 100%;
			line-height: 1.4;
		}
	}

	.creactive-tips {
		text-align: center;
		padding: 30rpx 20rpx;
		color: darkorange;
		font-weight: bold;
		line-height: 1.5;
	}

	.creactive-image {
		margin: 0 20rpx;

		image {
			width: 100%;
			border-radius: 5rpx;
		}
	}

	.submit-creation {
		position: fixed;
		bottom: 68rpx;
		left: 20rpx;
		right: 20rpx;
		padding: 20rpx 0;
		border-radius: 40rpx;
		background: linear-gradient(to right, #a2c5fe, #c0f7ed);
	}
</style>