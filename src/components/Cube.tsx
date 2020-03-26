import { defineComponent } from '@vue/composition-api'
import '../utils'

const Cube = defineComponent({
	name: 'Cube',
	setup() {
		console.time('label')
		const arr1: number[] = [],
			arr2: number[] = [],
			arr3: number[] = [],
			arr4: number[] = [],
			arr5: number[] = [],
			arr6: number[] = [],
			arr7: number[] = [],
			arr8: number[] = [],
			arr9: number[] = []

		const bigArr = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9]
		const b: any = generateArray()
		bigArr.forEach((el, idx) => {
			if (idx in [0, 1, 3, 4, 6, 7]) {
				console.log(b)
				b[idx] = getArr()
			} else {
				console.log(b[idx - 1], b[idx - 2])
				do {
					b[idx] = getArr()
				} while (legal(b[idx - 1], b[idx - 2], b[idx]))
			}
		})
		console.log(b)
		console.timeEnd('label')
		return <div></div>
	},
})

export default Cube
