import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/atoms/Button';

const LogoutButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} variant="outline">Logout</Button>
    );
};

LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LogoutButton;