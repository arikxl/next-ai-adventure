'use client'

import { Store } from '@/store/Store';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { professions } from '../data/data';
import Image from 'next/image';

const ChooseProfessionPage=()=> {
  const router = useRouter();
  const { dispatch, state } = useContext(Store)
  const { story: {  name } } = state;

  const handleClick = (p) => {
    // const name = e.target.value;
    const profession = p
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
    <main className="flex min-h-screen flex-col gap-10 w-4/5 items-center mx-auto mb-10">
      <h2 className="start-h2">Choose Your Profession</h2>
      <div className='flex gap-4 w-[100%] flex-wrap text-center justify-center'>

      {
        professions.map((p) => (
          <div key={p.id} className="cursor-pointer w-40 border border-green-400" onClick={() => handleClick(p.profession)}>
            <Image src={p.img} alt='Arik Alexandrov' width={100} height={100} className='mx-auto w-full' />
            { p.profession}
          </div>
        ))
      }
      </div>
    </main>
  )
}


export default ChooseProfessionPage
