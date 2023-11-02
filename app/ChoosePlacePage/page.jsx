'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

import { Store } from '@/store/Store';
import { places } from '../data/data';

const ChoosePlacePage = () => {
  const router = useRouter();
  const { dispatch, state } = useContext(Store)
  const { story: { name, profession } } = state;

  const handleClick = (p) => {
    // const name = e.target.value;
    const place = p
    dispatch({
      type: 'SAVE_SAVE_PLACE',
      payload:
        place
    })
    localStorage.setItem('next-ai-adventure', JSON.stringify({
      profession, name, place
    }))
    router.push('/')
  }


  return (
    <main className="flex min-h-screen flex-col gap-10 w-4/5 items-center mx-auto mb-10">
      <h2 className="start-h2">Where Your Story Begins?</h2>
      <div className='flex gap-4 w-[100%] flex-wrap text-center justify-center'>

        {
          places.map((p) => (
            <div key={p.id} className="cursor-pointer w-40 border border-green-400" onClick={() => handleClick(p.profession)}>
              <Image src={p.img} alt='Arik Alexandrov' width={100} height={100} className='mx-auto w-full' />
              {p.profession}
            </div>
          ))
        }
      </div>
    </main>
  )
}


export default ChoosePlacePage
