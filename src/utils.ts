// 生成数组
const generateArray = () => Array.from({ length: 9 }, (el, idx) => idx + 1)

// 数组乱序
const randomSort = (arr: number[]) => arr.sort(() => 0.5 - Math.random())

// 获取1-9数组乱序
const getArr = () => randomSort(generateArray())

// 数组累加
const sum = (arr: number[]) =>
	arr.reduce((prev: number, curr: number) => prev + curr)

// 判断是否符合数独每行1-9的规则
const legal = (first: number[], second: number[], third: number[]) => {
	const one =
		sum(first.slice(0, 2)) +
		sum(second.slice(0, 2)) +
		sum(third.slice(0, 2))
	const two =
		sum(first.slice(3, 5)) +
		sum(second.slice(3, 5)) +
		sum(third.slice(3, 5))
	const three =
		sum(first.slice(6, 9)) +
		sum(second.slice(6, 9)) +
		sum(third.slice(6, 9))
	return one && two && three
}

// 找出数组的不同项
const getArrDifference = (arr1: number[], arr2: number[]) =>
	arr1
		.concat(arr2)
		.filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v))
