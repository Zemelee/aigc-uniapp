import {
	reactive
} from "vue"
export const buttonPosition = () => {
	const buttonData = reactive({
		but_height: "0px",
		but_top: "0px",
		but_bottom: "0px"
	})
	const {
		height,
		top,
		bottom
	} = uni.getStorageSync("buttonPosition")
	buttonData.but_height = height + "px";
	buttonData.but_top = top + "px";
	buttonData.but_bottom = bottom + 10 + "px";
	return {
		but_height: buttonData.but_height,
		but_top: buttonData.but_top,
		but_bottom: buttonData.but_bottom
	}
}