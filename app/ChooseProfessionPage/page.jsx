'use client'

import { Store } from '@/store/Store';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

const ChooseProfessionPage=()=> {
  const router = useRouter();
  const { dispatch, state } = useContext(Store)
  const { story: {  name } } = state;

  const handleClick = (test) => {
    // const name = e.target.value;
    const profession =test
    dispatch({
      type: 'SAVE_PROFESSION',
      payload:
        profession
    })
    localStorage.setItem('next-ai-adventure', JSON.stringify({
      profession,name
    }))
    router.push('/ChoosePlacePage')
  }


  return (
    <main className="flex min-h-screen flex-col gap-10 w-1/2 items-center mx-auto">
      <h2 className="start-h2">Choose Your Profession</h2>
        <div onClick={()=>handleClick('TEST1')}>TEST1</div>
        <div onClick={()=>handleClick('TEST2')}>TEST2</div>
        <div onClick={()=>handleClick('TEST3')}>TEST3</div>
        <div onClick={()=>handleClick('TEST4')}>TEST4</div>
        <div onClick={()=>handleClick('TEST5')}>TEST5</div>
    </main>
  )
}


export default ChooseProfessionPage
