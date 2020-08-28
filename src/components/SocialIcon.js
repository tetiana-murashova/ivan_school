import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'


library.add(faFacebookSquare);
library.add(faEnvelopeOpenText, faPhoneSquareAlt);


const SocialIcon = () => {
    return (
        <div >
            <div className="row mb-3 mt-3 ">
                <a href="mailto:info@ivan.school"  className="text-decoration-none text-danger">
                    <FontAwesomeIcon icon={['fas', 'envelope-open-text']} className=" mb-0  h2" />
                    <p className="ml-3 mt-2 d-none  mb-4 d-sm-inline">info@ivan.school</p>

                </a>
            </div>

            <div className="row mb-3">
                <a href="https://www.facebook.com/groups/1387739428198576" className="text-decoration-none text-danger">
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} className=" mb-0  h2" />
                    <p className="ml-3 mb-4 d-sm-inline  text-decoration-none d-none" >Facebook</p>
                </a>
            </div>


            <div className="row mb-3 social-icon text-danger">
                <FontAwesomeIcon icon={['fas', 'phone-square-alt']} className=" mb-0  h2" />
                <p className="ml-3 d-sm-inline  text-decoration-none  d-none">0432 380 274</p>

            </div>
        </div>
    );
};

export default SocialIcon;
