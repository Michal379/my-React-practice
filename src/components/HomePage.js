import React from 'react';

function HomePage () {
        return( 
            <div className="justify-content center">
           <p> <h3>Understanding on components, state and props  </h3></p>
            </div>
        );
    }

    function ObjList(){
        const objs=['Components', 'State' , 'Props']
        return (
        <div>
            { 
        objs.map(obj => <h2>{obj}</h2>)
            }
         </div>            
        )
    }

    
export default HomePage;
