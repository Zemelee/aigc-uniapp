<template>
	<view class="input-box-area">
		<image @click="show=!show" :src="show ? '/static/yuyin.png' : '/static/jianpan.png'" mode="widthFix"></image>
		<view class="input-content" v-show="show">
			<textarea class="textarea-box" placeholder="快来问我!" :show-confirm-bar="false" maxlength="500"
				cursor-spacing="20" fixed auto-height @linechange="lineChange">

			</textarea>
		</view>
		<view class="speech-sound" v-show="!show"> 按住 说话</view>
		<image src="/static/fasong.png" mode="widthFix"></image>
	</view>
	<!-- 语音弹窗 -->
	<view class="mask-view">
		<view class="record-text">
			语音转文字
		</view>
		<view class="recording-pop-up">
			<text class="release">松开 发送</text>
			<text class="in-recongnition">正在识别...</text>
			<view class="audio-wave">
				<text class="audio-wave-text" v-for="(item,index) in barData" :key="index" :style="{'animationDelay':item}">
					
				</text>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		reactive,
		ref,
		onMounted,
		getCurrentInstance
	} from "vue";

	const show = ref(false);
	const instance = getCurrentInstance()
	const textareaValue = reactive({
		alignItems: 'center',
		autoHeight: true,
		height: '0px'
	})
	const lineChange = (e) => {
		const {
			height,
			lineCount
		} = e.detail
		textareaValue.alignItems = lineCount > 2 ? 'flex-end' : 'center'
		// 大于6行不自动增高
		if (lineCount > 6) {
			textareaValue.autoHeight = false
			textareaValue.height = height
		} else {
			textareaValue.autoHeight = true
		}
	}
	const textareaHeight = ref('');
	onMounted(() => {
		const query = uni.createSelectorQuery().in(instance)
		query.select('.input-content').boundingClientRect(res => {
			textareaHeight.value = res.height
		}).exec()
	})
	const barData = ref(['1s','0.9s','0.8s','0.7s','0.6s','0.5s','0.4s','0.3s','0.2s','0.1s'])
</script>

<style lang="less" scoped>
	.input-box-area {
		background-color: #f8f8f8;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: v-bind('textareaValue.alignItems');
		padding-top: 20rpx;
		padding-bottom: 48rpx;

		image {
			width: 47rpx;
			margin: 0 20rpx;
		}

		.input-content {
			background-color: #fff;
			flex: 1;
			width: 100%;
			border-radius: 15rpx;
			padding: 10rpx;

			.textarea-box {
				width: 100%;
				height: v-bind('textareaValue.height');
			}
		}

		.speech-sound {
			flex: 1;
			background: linear-gradient(to right, #a2c5fe, #c0e7fd);
			text-align: center;
			color: #fff;
			border-radius: 15rpx;
			height: v-bind('textareaHeight');
			line-height: v-bind('textareaHeight');
		}
	}

	.mask-view {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 9999;

		.record-text {
			position: fixed;
			bottom: 500rpx;
			left: 10rpx;
			right: 10rpx;
			color: #fff;
			height: 300rpx;
			line-height: 1.4;
			overflow: auto;
			padding: 10rpx;
			z-index: 10000
		}
	}

	.recording-pop-up {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to right, #07d280, #16cbdc);
		height: 500rpx;
		z-index: 10000;
		display: flex;
		flex-direction: column;
		align-items: center;

		.release {
			color: #fff;
			font-size: 33rpx;
			padding: 30rpx 0;
			font-weight: bold;
		}

		.in-recongnition {
			color: #fff;
			font-size: 20px;
			padding: 30rpx 0;
			font-weight: bold;
		}
		.audio-wave{
			padding: 50rpx 0;
			.audio-wave-text{
				background-color: #fff;
				width: 7rpx;
				height: 10rpx;
				margin: 0 5rpx;
				border-radius: 5rpx;
				display: inline-block;
				border: none;
				animation: wave 0.2s ease-in-out;
				animation-iteration-count: infinite;
				animation-direction: alternate;
			}
			@keyframes wave {
				from{
					transform: scaleY(1);
				}
				to{
					transform: scaleY(4);
				}
				
			}
		}

	}
</style>