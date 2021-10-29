import PromAppBar from '../components/header-title-view2'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { useUser } from '@auth0/nextjs-auth0';

const Getquery = () => {

  const router = useRouter()
  return  router.query.id
}

const Getfetch = (id,user) => {

  const fetcher = () => fetch('https://kakkowarai.herokuapp.com/title/' +id + '/' + user.sub).then(response => response.json());
  return useSWR('https://kakkowarai.herokuapp.com/title/' + id + '/' + user.sub, fetcher);
}

function Bar() {

  let { user, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
 
const id = Getquery();

if (user == undefined){
  user = {sub:"emp"}
}

  const {data,error} = Getfetch(id,user);
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

 
  console.log(data)
  

return (

<div>


<PromAppBar title = {data}/>


</div>

)

}

export default Bar;