
import PromAppBar from '../components/header-user'
import useSWR from 'swr'
import {React} from 'react'
import { useUser } from '@auth0/nextjs-auth0';


export default function userpage() {

  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  const fetcher = () => fetch('https://kakkowarai.herokuapp.com/user_title/' + user.sub).then(response => response.json());
  
  const { data, error } = useSWR('https://kakkowarai.herokuapp.com/user_title/' + user.sub, fetcher);
    
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)

  return (
    <div>
      <PromAppBar title = {data}/>
    
     
    
    </div>

    

    
    
  )
}