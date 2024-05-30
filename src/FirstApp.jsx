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

import PropTypes from 'prop-types';

const getSaludo = (name) => 'Hola: ' + name;

export const FirstApp = ({title, subTitle, name}) => {
    // console.log(props);

    return (
        <>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <h1 data-testid="test-title">{ title }</h1>
            <h1>{getSaludo('Irwin')}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,    
    subTitle: PropTypes.number.isRequired,    
}

FirstApp.defaultProps = {
    name: 'Irwin',
    subTitle: 1,
    title: 'Titulo Default',
}