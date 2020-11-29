import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HomeIcon = (props) => {
  return (
    <i className={props.className}>
      <svg
        className={classNames('fill-current', props.svgClassName)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <title>Home</title>
        <path
          d="M12 5.561L5 11.161V19H10V15H14V19H19V11.642C19.0001 11.492 18.9664 11.344 18.9015 11.2088C18.8366 11.0736 18.7421 10.9547 18.625 10.861L12 5.561ZM12 3L19.874 9.3C20.2251 9.58088 20.5086 9.93709 20.7035 10.3423C20.8984 10.7475 20.9997 11.1914 21 11.641V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V11.161C3.00004 10.8612 3.06746 10.5653 3.19728 10.2951C3.3271 10.0249 3.51599 9.78735 3.75 9.6L12 3Z"
          fill="currentColor"
        />
      </svg>
    </i>
  );
};

HomeIcon.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
};

export default HomeIcon;
