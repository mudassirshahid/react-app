import React, { Component } from "react";

//DESTRUCTURING ARGUMENTS

const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');
    return ( 
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar{""}
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </nav>
     );
};

//STATELESS FUNCTIONAL COMPONENT

// const NavBar = (props) => {
//     return ( 
//         <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           Navbar{""}
//           <span className="badge badge-pill badge-secondary m-2">
//             {props.totalCounters}
//           </span>
//         </a>
//       </nav>
//      );
// };
 


// class NavBar extends Component {
//   render() {
//     return (
//       <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.totalCounters}   //THIS.PROPS IS ONLY WORKS IN CLASS COMPONENT BUT IN FUNCTION WE NEED TO PASS PROPS AS A PARAMETER IN FUNCTION AND THEN REMOVE THIS AS ABOVE EXAMPLE 
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
