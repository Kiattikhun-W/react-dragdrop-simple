import {useEffect, useRef} from 'react'
import logo from '../src/assets/logo.jpg'

import './App.css'
import dragElement from './lib/dragElem.js'


function App() {
    const dragRef = useRef(null)
    useEffect(() => {
        dragElement(dragRef.current)
    }, [])

    return (
        <main className={'grid place-content-center gap-2  overflow-hidden '}>
            <h1 className={'text-center text-6xl text-red-300 text-transparent'}>Dra</h1>

            <div className={'border mt-4  relative border-red-400 h-[500px] w-[800px] overflow-hidden'}>
                <div ref={dragRef} className={'w-[100px] absolute'}>
                    <div className={' bg-[#f1f1f1] cursor-pointer'}>
                        <img src={logo}/>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default App
