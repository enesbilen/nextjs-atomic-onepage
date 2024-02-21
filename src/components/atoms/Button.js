import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ onClick, children, type, disabled, variant }) => {
    // Determine the className based on the variant prop
    const buttonClassName = `${styles.button} ${styles[variant]}`;

    return (
        <button
            onClick={onClick}
            className={buttonClassName}
            type={type}
            disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['success', 'warning', 'info', 'outline', 'gradient']),
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
    variant: 'success',
};

export default Button;
