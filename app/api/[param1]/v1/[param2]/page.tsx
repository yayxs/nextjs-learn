interface Params {
  params: {
    params1: string
    params2: string
  }
}

export default function Index({ params }: Params) {
  return (
    <div>
      <div>/api/111/v1/222</div>
      <div>参数 {JSON.stringify(params)} </div>
    </div>
  )
}
