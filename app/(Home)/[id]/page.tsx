// type Params =Promise< {
//   id:string
// }>

type Props = {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{
[key:string]:string
  }>
}

export default async function IdPage({ params,searchParams }: Props) {
  const { id } = await params;
  console.log(await searchParams);

  // searchParams : 현재 url의 검색 매개변수가 포함된 객체 반환
  const ss = await searchParams;
  
  return (<>
    
    <h1>{id}페이지</h1>
    //<h2>{ss.key}{ss.a}</h2>
  
  </>);
}
