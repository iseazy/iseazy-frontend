import PropTypes from 'prop-types';

export const Section = ({ show, children }) => (
  <div className={`${show ? '' : 'hidden'} grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-7.5 p-4`}>{children}</div>
);

Section.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired
};
