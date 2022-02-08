import React from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';

function FadeAnim({ children, delay }) {
  return (
    <Spring to={{ opacity: 1 }} from={{ opacity: 0 }} delay={delay}>
      {styles => <animated.div style={styles}>{children}</animated.div>}
    </Spring>
  );
}

FadeAnim.defaultProps = {
  delay: 0,
};

FadeAnim.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default FadeAnim;
