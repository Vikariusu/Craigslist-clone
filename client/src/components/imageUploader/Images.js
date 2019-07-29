import React from 'react';

const Images = (props) => {
    return (
        props.images.map((image, i) =>
            <div key={i} className="img-contained">
                <button
                    onClick={() => props.removeImage(image)}
                    className='delete-img-btn'
                >
                    <i className="fa fa-times" aria-hidden="true" />
                </button>
                <img src={image} alt='' />
            </div>
        )
    )
}

export default Images;