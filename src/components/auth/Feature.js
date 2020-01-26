import React from 'react';
import requireAuth from '../requireAuth'


class Feature extends React.Component{
    render() {
        return(

            <div>
                Welcome to feature Page
            </div>
        )
        
        
    }
}

export default requireAuth(Feature);