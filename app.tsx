import React, { Component, MouseEvent } from 'react';


type appState = {
    page: number;
}


export class app extends Component<{}, appState> {

    constructor(props: {}) {
      super(props);
  
      this.state = {page: 0};
    }

    render = () : JSX.Element => {
        return <div>rendered</div>
    }
}