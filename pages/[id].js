import PromAppBar from '../components/header-title-view2'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { useUser } from '@auth0/nextjs-auth0';

const getquery = () => {

  const router = useRouter()
  return  router.query.id
}

export default function Bar() {

  const { user, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
 
const id = getquery();

if (!user == []){
  const fetcher = () => fetch('https://kakkowarai.herokuapp.com/title/' + id + '/' + user.sub).then(response => response.json());
  var{data,error} = useSWR('https://kakkowarai.herokuapp.com/title/' + id + '/' + user.sub, fetcher);
}
else{
  const fetcher = () => fetch('https://kakkowarai.herokuapp.com/title/' + id).then(response => response.json());
  var{data,error} = useSWR('https://kakkowarai.herokuapp.com/title/' + id , fetcher);
}
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

 
  console.log(data)
  

return (

<div>


<PromAppBar title = {data}/>


</div>

)

}