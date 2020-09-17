import React, { useEffect, useRef } from 'react';

import connect from '../store/connect';
import ChartTypeControl from './charttypecontrol';

const Views = props => {
  const { viewArray } = props;
  const container = useRef(null);

  const minwidth = 300;
  const minheight = 100;

  const getContainerDims = node => {
    return {
      width: Math.max(node.getBoundingClientRect()['width'] - 175, minwidth),
      height: Math.max(node.getBoundingClientRect()['height'] - 75, minheight)
    };
  };

  // get initial dims after mount
  useEffect(() => {
    let dims = getContainerDims(container.current);
    props.actions.setContainerDims(dims);
  }, []);

  // get dims on window resize
  useEffect(() => {
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        let dims = getContainerDims(container.current);
        props.actions.setContainerDims(dims);
      }, 250);
    }
    let resizeTimer;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const mappedViews = Object.values(viewArray).map(id => {
    return <ChartTypeControl key={id} viewID={id} />;
  });
  return <div ref={container}>{mappedViews}</div>;
};

const mapStateToProps = state => {
  return {
    viewArray: state.session.viewArray,
    containerDims: state.session.containerDims
  };
};

export default connect(mapStateToProps)(Views);
