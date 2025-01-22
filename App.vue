<script setup>
	// onLaunch只能在这里用
	import {
		onLaunch
	} from "@dcloudio/uni-app"
	console.log("ing")
	onLaunch(() => {
		// 获取胶囊按钮位置
		const buttonPosition = uni.getStorageSync("buttonPosition")
		if (!buttonPosition) {
			const res = uni.getMenuButtonBoundingClientRect()
			uni.setStorageSync("buttonPosition", res)
		}

	})
</script>

<style>
	/*每个页面公共css */
	view,
	text {
		display: block;
		font-size: 33rpx;
	}

	image {
		display: block;
	}

	button::after {
		border: none;
	}

	button {
		padding: 0;
		margin: 0;
		line-height: inherit;
		/*去掉行高*/
	}
	.text-show{
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>