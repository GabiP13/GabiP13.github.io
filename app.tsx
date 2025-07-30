import React, { Component, MouseEvent } from 'react';
import Navigation from './nav_bar'
import Education from './main_pages/education'
import Projects from './main_pages/project_list'
import Intro from './main_pages/introduction'

type appState = {
    page: number;
}


export class app extends Component<{}, appState> {

    // constructor(props: {nav: JSX.Element}) {
    constructor(props: {}) {
      super(props);
  
      this.state = {page: 0};
    //   props.nav = <Navigation setPageIndex={useState()} pageIndex={this.state.page} />
    }

    render = () : JSX.Element => {
        return <div>
            <div className="grid grid-cols-[max-content_4fr]">
        		<Navigation setPageIndex={useState()} pageIndex={this.state.page} />
        		<div className='switch'>
                    <script type='javascript'>
                        switch (this.state.page) {
                            case 0:
                                <Intro></Intro>
                                break;
                            case 1:
                                <Education></Education>
                                break;
                            case 2:
                                <Projects></Projects>
                                break;
                        
                            default:
                                <Intro></Intro>
                                break;
                        }
                    </script>
                </div>
        	</div>
        </div>
    }
}


import { useState } from 'react'
// import Login from './components/Login'

// import Navigation from './components/homeComponents/Navigation'
// import NearMe from './components/NearMe'
// import Calendar from './components/Calendar'
// import Messages from './components/Messages'

function App() {
    const [pageIndex, setPageIndex] = useState(0)

    

    
}