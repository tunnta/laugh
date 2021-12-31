import PromAppBar from '../components/TopFrame'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { useUser } from '@auth0/nextjs-auth0';

const Getquery = () => {

  const router = useRouter()
  return  router.query.id
}

const GetqueryContent = () => {

  const router2 = useRouter()
  return  router2.query.content
}

const Getfetch = (id,user,contentNumber) => {

  const fetcher = () => fetch('https://kakkowarai.herokuapp.com/title/' +id + '/' + user.sub+ '/' + contentNumber).then(response => response.json());
  return useSWR('https://kakkowarai.herokuapp.com/title/' + id + '/' + user.sub+ '/' + contentNumber, fetcher, {revalidateOnReconnect	: false,revalidateOnFocus: false});
}

function Bar() {

  let { user, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
 
const id = Getquery();
const contentNumber = GetqueryContent();

if (user == undefined){
  user = {sub:"emp"}
}

  const {data,error} = Getfetch(id,user,contentNumber);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  

  if (contentNumber==1) return (

<div>


<PromAppBar title = {data} count = {1}/>


</div>

)

if (contentNumber==0) return (

  <div>
  
  
  <PromAppBar title = {data} count = {0}/>
  
  
  </div>
  
  )

}

export default Bar;