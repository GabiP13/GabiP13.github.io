import React from 'react'
import Header from './Header'
// import Search from './homeComponents/Search'
// import HomeButton from './homeComponents/HomeButton'

export default function Education() {
    return (
        <div className='grid grid-cols-2 px-10 bg-gradient-to-b from-red-200 via-red-100 to-white'>
            <div>
                <Header title='Study.Sesh' subtitle='EDUCATION' style_h1='text-center transform -translate-x-20 mx-10' style_h2='transform translate-x-10' />
                {/* <Search /> */}
                {/* <HomeButton text='' /> */}
                {/* <HomeButton /> */}
            </div>
        </div>
    )
}
