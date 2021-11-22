import Slide from '../components/slide'
import Header from '../components/header'
import PastContent from '../components/past-content'
import AutoGrid from '../components/current-content'
import InteractiveList from '../components/ranklist'

export async function getServerSideProps() {
  // posts を取得するため外部 API endpoint を読み込む
  const res =  await fetch('https://kakkowarai.herokuapp.com/title')
  const posts = await res.json()
  const res2 =  await fetch('http://localhost:3001/title_content0')
  const posts2 = await res2.json()
  // { props: { posts } }を返すことで、
  // Blog コンポーネントはビルド時に`posts`を prop として受け取る
  return {
    props: {
      posts,
      posts2,
    },
  }
}


function Index({posts,posts2}) {


  return (
    <div>
      <Header/>
    <Slide Name1 = "sss"/>

    <InteractiveList/>

    <AutoGrid title = {posts}/>
    <PastContent title = {posts2}/>
        
    </div>

    
    
  )
}

export default Index;

