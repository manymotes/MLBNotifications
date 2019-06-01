// // import React from "react";
// // import ReactDom from 'react-dom';
//
// // import '../resources/scss/style.scss';
// //
// const domContainer = document.querySelector('#container');
// ReactDOM.render("hello world!", document.getElementById("container"));
// // console.log("react file");
// //
// //
// // const Greetings = ({ firstName, lastName }) => (
// //     <div>
// //         Hey you! {firstName} {lastName}!
// //     </div>
// // );
//
// // const name = 'Josh Perez';
// // const element = <h1>Hello, {name}</h1>;
// //
// // ReactDOM.render(
// //     element,
// //     document.getElementById('root')
// // );

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

// var HelloWorld extends React.createClass {
//     render() {
//         return (
//             <div>
//                 Hello, React!
//             </div>
//         )
//     }
// };
//
// debugger;
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));