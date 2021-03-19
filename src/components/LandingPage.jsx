import PropTypes from 'prop-types';

import { Button } from './common/Button';

import { ReactComponent as Logo } from '../assets/Logo.svg';

export function LandingPage({ onClick }) {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-50 w-33 h-33 rounded-full shadow-logo mb-4.5">
        <Logo />
      </div>
      <span className="mb-20">MeMemory</span>
      <Button width="w-60" onClick={onClick}>
        Comenzar
      </Button>
    </>
  );
}

LandingPage.propTypes = {
  onClick: PropTypes.func
};
