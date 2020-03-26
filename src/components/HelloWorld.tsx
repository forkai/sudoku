import style from './HelloWorld.module.scss'
const HelloWorld = (ctx: object) => (
	<h1 class={style.text} onClick={(ctx as any).props.eventClick}>{(ctx as any).props.msg}</h1>
)

export default HelloWorld
