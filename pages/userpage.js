
import PromAppBar from '../components/header-user'
import useSWR from 'swr'
import {React} from 'react'
import { useUser } from '@auth0/nextjs-auth0';

const Getfetch = (user) => {

  const fetcher = () => fetch('http://localhost:3001/user_title/' + user.sub).then(response => response.json());
  return { data, error } = useSWR('http://localhost:3001/user_title/' + user.sub, fetcher);
}

const Getuser = () => {
  return useUser();
}

export default function userpage() {

  const { user, isLoading } = Getuser();

  if (isLoading) return <div>Loading...</div>;

  const { data, error } = Getfetch(user);  
    
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)

  return (
    <div>
      <PromAppBar title = {data}/>
    
     
    
    </div>

    

    
    
  )
}