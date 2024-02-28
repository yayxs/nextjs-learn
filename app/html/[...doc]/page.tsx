export default function Html({ params }) {
  return (
    <div>
      <div>/html/1/2/3/4</div>
      <div>是用来定义任意层级路由的，叫做 catch-all 的路由</div>
      <div>{JSON.stringify(params)}</div>
    </div>
  )
}
