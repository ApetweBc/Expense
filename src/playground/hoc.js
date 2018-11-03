console.log('running hoc');
// Higher order componenebts(HOC) is a a component taht renders another component
// To reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// const Info =(props)=>{
//     return(

//         <div>
//         <h1>Info</h1>
//         <p>The info is: {props.info}</p>
//         </div>
//         )
//     };

// const withAdminWarning = (WrappedComponent) => {
//      return (props)=>{
//          return (

//              <div>
//              {props.isAdmin && <p>This is private info. Please dont share</p>}
//              <WrappedComponent {...props} />
//              </div>
//              )
//      };
// };
// // We getting info the content from the info. Then pass it to the variable AdminInfo
// const AdminInfo = withAdminWarning(Info);

const details = (props)=>{
    
    return (
        <div> 
        <h1>The things you do</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum velit est, tempora aut culpa expedita quis amet perspiciatis quo omnis inventore laudantium doloribus labore architecto repudiandae deserunt distinctio, a delectus?</p>
        <p>You are: {props.logIn}</p>
        </div>
    )

};

const requireAuthentication =(WrappedComponent)=>{
    return (props)=>{

        return (
            <div>
             {props.isAuthenticated ? (
                <WrappedComponent {...props} />
             ) : (<h1>Login in to Access the info</h1>
             )}
            </div>
        )   
        };
};
const AuthInfo = requireAuthentication(details);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} logIn="login Peter" />, document.getElementById('app'));