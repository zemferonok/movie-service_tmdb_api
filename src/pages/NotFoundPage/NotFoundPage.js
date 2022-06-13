import React from 'react';
import {images} from "../../constants/urls";

const NotFoundPage = () => {
    return (
        <div>
            _not_found_page
            <img src={images.mouse} alt="Gadget Hack-wrench"/>
        </div>
    );
};

// export default NotFoundPage;
export {NotFoundPage};