import { defineComponent } from '@vue/composition-api'
import HelloWorld from './components/HelloWorld'
import logo from './assets/logo.png'
import './App.scss'

export default defineComponent({
	name: 'App',
	setup() {
		return () => (
			<div id="app">
				<img alt="Vue logo" src={logo} />
				<HelloWorld msg="Hello World!"
					eventClick={(e:any) => console.log('click', e.target)}/>
			</div>
		)
	},
})
