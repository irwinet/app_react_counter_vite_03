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

export const FirstApp = () => {
    return (
        <>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <h1>Hola Mundo</h1>
            <h1>{getSaludo('Irwin')}</h1>
            <p>Soy un subtitulo</p>
        </>
    )
}