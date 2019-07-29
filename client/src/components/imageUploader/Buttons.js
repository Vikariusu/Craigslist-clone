import React from 'react';

const Buttons = (props) => {
    return (
        <div className='buttons fadein'>
            <div className='button'>
                <label htmlFor='multi'>
                    <p>Pictures</p>
                    <p className="secondary-text">Remember, attaching pictures increases your chances to sell the item!</p>
                </label>
                <input type='file' id='multi' onChange={props.onChange} multiple />
            </div>
        </div>
    )
}

export default Buttons;