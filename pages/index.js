import Slide from '../components/slide'
import Header from '../components/header'
import PastContent from '../components/past-content'
import AutoGrid from '../components/current-content'
import FolderList from '../components/ranklist'


export async function getServerSideProps() {
  // posts を取得するため外部 API endpoint を読み込む
  const res =  await fetch('https://kakkowarai.herokuapp.com/title')
  const posts = await res.json()
  const res2 =  await fetch('https://kakkowarai.herokuapp.com/title_content0')
  const posts2 = await res2.json()
  const res3 =  await fetch('https://kakkowarai.herokuapp.com/title_rank')
  const posts3 = await res3.json()
  // { props: { posts } }を返すことで、
  // Blog コンポーネントはビルド時に`posts`を prop として受け取る
  return {
    props: {
      posts,
      posts2,
      posts3,
    },
  }
}

function Index({posts,posts2,posts3}) {
  return (
    <div>    
      <Header/>
      <Slide/>
      <div style = {{'display':'flex','flexWrap':'wrap'}}>
        <AutoGrid title = {posts}/>
        <FolderList rank = {posts3}/>
        <PastContent title = {posts2}/>
      </div>
    </div>
  )
}

export default Index;

