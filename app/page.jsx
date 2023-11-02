'use client'

import { Store } from '@/store/Store';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function Home() {
  const router = useRouter();
  const {  dispatch, state } = useContext(Store)
  const { story: { name } } = state;

  const handleChange = (e) => {
    const name = e.target.value;
    const capital = name[0]?.toUpperCase() + e.target.value.slice(1);
      dispatch({
        type: 'SAVE_CHARACTER',
        payload: 
        capital         
      })
    
    localStorage.setItem('next-ai-adventure', JSON.stringify({
      name: capital
    }))
  }

  const handleClick = () => {
    if (name&& name.length > 2 && name !== "" && name !== 'undefined') router.push('/ChooseProfessionPage')
    else window.alert('Choose your Name!')
  }

  return (
    <main className="flex min-h-screen flex-col gap-10 w-1/2 items-center mx-auto">
      <input onChange={handleChange} className='start-input' placeholder="What's Your Name?"/>
      {
        name?.length > 2 && name !== 'undefined'
          ? ( <button onClick={handleClick} className='start-btn'>Choose Your Profession</button>)
          : null
      }
       
    </main>
  )
}
