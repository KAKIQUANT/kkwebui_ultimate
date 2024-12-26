import React from 'react';
import PropTypes from 'prop-types';

const CallToAction = ({ onRegister }) => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h2>准备好开始您的量化交易之旅了吗？</h2>
        <p>立即注册，获取免费试用机会</p>
        <button className="cta-button" onClick={onRegister}>
          免费注册
        </button>
      </div>
    </div>
  );
};

CallToAction.propTypes = {
  onRegister: PropTypes.func.isRequired
};

export default CallToAction; 