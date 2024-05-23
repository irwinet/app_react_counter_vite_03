/* eslint-disable react/prop-types */
// import { Fragment } from 'react'

// export const FirstApp = () => {
//   return (
//     <Fragment>
//         <h1>Irwin</h1>
//         <p>Soy un subtitulo</p>
//     </Fragment>
//   )
// }

// const newMessage = { key: 'hola' };

const getSaludo = (name) => 'Hola: ' + name;

export const FirstApp = ({ title = 'Hola Soy Irwin', subTitle }) => {
    // console.log(props);

    return (
        <>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <h1>{ title }</h1>
            <h1>{getSaludo('Irwin')}</h1>
            <p>{subTitle + 1}</p>
        </>
    )
}