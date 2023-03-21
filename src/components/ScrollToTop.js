import React from 'react';

function ScrollToTop() {
  React.useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  });

  return null;
}

export default ScrollToTop;
