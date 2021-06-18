import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/utils/button.sass';

export const ButtonLink = ({ children, className, link, ...rest }) => {
    return (
        <div className={className}>
            <Link to={link} {...rest}>
                {children}
            </Link>
        </div>
    );
};

const Button = ({ children, type, className, ...rest }) => {
    switch (type) {
        case 'link':
            return (
                <ButtonLink className={className} {...rest}>
                    {children}
                </ButtonLink>
            );

        default:
            break;
    }
};

export default Button;
