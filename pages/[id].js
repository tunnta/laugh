import PromAppBar from '../components/header-title-view2'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { useUser } from '@auth0/nextjs-auth0';


export default function Bar() {

  const { user, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
 

  const router = useRouter()
  const id = router.query.id
  
  const fetcher = () => fetch('http://localhost:3001/title/' + id + '/' + user.sub).then(response => response.json());
  
  

  const { data, error } = useSWR('http://localhost:3001/title/' + id + '/' + user.sub, fetcher);

  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

 
  console.log(data)
  

return (

<div>


<PromAppBar title = {data}/>


</div>

)

}