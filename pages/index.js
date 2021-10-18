import Slide from '../components/slide'
import Header from '../components/header'

import AutoGrid from '../components/box2'
import InteractiveList from '../components/ranklist'

export async function getServerSideProps() {
  // posts を取得するため外部 API endpoint を読み込む
  const res =  await fetch('https://kakkowarai.herokuapp.com/title')
  const posts = await res.json()

  // { props: { posts } }を返すことで、
  // Blog コンポーネントはビルド時に`posts`を prop として受け取る
  return {
    props: {
      posts,
    },
  }
}


export default function Bar({posts}) {


  return (
    <div>
      <Header/>
    <Slide Name1 = "sss"/>

    <InteractiveList/>

    <AutoGrid title = {posts}/>
   
        
    </div>

    
    
  )
}

