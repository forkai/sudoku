import { defineComponent } from '@vue/composition-api'
import Cube from './components/Cube'
import './App.scss'

export default defineComponent({
	name: 'App',
	setup() {
		return () => (
			<div id="app">
				<Cube />
			</div>
		)
	},
})
