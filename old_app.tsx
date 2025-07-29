import React, { Component, MouseEvent } from 'react';


type appState = {
    b: boolean;
}


export class app extends Component<{}, appState> {

    constructor(props: {}) {
      super(props);
  
      this.state = {b: true};
    }

    render = () : JSX.Element => {
        return <div></div>
    }
}