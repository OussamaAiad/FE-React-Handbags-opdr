import React from 'react';

const Buttons = ({knopje, waarde, naam}) => {
    return (

        <button type={knopje} disabled={waarde}>{naam}</button>
    );
};

export default Buttons;