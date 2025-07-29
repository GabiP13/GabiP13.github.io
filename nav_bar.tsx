import React from 'react'
import Navbox from './nav_box'

export default function Navigation(props) {
    const { setPageIndex, pageIndex } = props

    // const navButtons = [home, map, calendar, message]
    const pageButtons = ['EDUC', 'PROJECTS', 'ABOUTME']

    return (
        <div className='flex flex-col rounded-r-lg border-gray w-20 min-h-screen items-start gap-2 py-3'>
            {/* {navButtons.map((item, index) => {
                return <Navbox key={index} setPageIndex={setPageIndex} pageIndex={pageIndex} index={index}><img src={item} /></Navbox>
            })} */}
            <hr className='min-w-15 my-5 mx-auto bg-gray-200 border-1 dark:bg-gray-700' />
            {pageButtons.map((item, index) => {
                return <Navbox key={index} setPageIndex={setPageIndex} index={0}><p className='text-center text-[13px] leading-tight white'>{item}</p></Navbox>
            })}
        </div>
    )
}
