'use client'
import { Store } from '@/store/Store';
import  { useContext } from 'react'

const Header = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { story: { name, place, mode, profession } } = state;
    return (
        <h1 className="text-center my-6 text-4xl font-bold">
            The &nbsp;
            {mode ? <span>{mode}&nbsp;</span> : null}
            Story
            {name === undefined || !name || name.length < 1 ? '' : name !== 'undefined' ?<span> of {name}</span>:null }
            {profession ? <span> the {profession}</span> : null}
            {place ? <span> in the {place}</span> : null}
        </h1>
    )
}

export default Header