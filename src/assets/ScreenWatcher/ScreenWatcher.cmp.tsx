import React, { Component } from 'react';
import _forEach from 'lodash/forEach';
import _kebabCase from 'lodash/kebabCase';
import _memoize from 'lodash/memoize';
import _throttle from 'lodash/throttle';
import styled from 'react-emotion';

import { Props, ScreenData } from './ScreenWatcher.typ';

const getScreenClassFunc = (screenData: ScreenData) => {
  let className = '';

  _forEach(screenData, (value, key) => {
    if (value && key !== 'width' && key !== 'height') {
      const formattedKey = _kebabCase(key);
      className += ` screen-${formattedKey}`;
    }
  });

  return className.trim();
};
const getScreenClass = _memoize(getScreenClassFunc);

const Wrapper = styled('div')`
  width: 100%, auto;
  height: 100%;
`;

interface ResizeEvent {
  target: {
    innerWidth: number;
    innerHeight: number;
  };
}

class ScreenWatcher extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  public componentDidMount() {
    window.addEventListener(
      'resize',
      _throttle(this.updateDimensions.bind(this), 100)
    );
    this.props.screenResize(window.innerWidth, window.innerHeight);
  }

  public componentWillUnmount() {
    window.removeEventListener(
      'resize',
      _throttle(this.updateDimensions.bind(this), 100)
    );
  }

  public updateDimensions(e: ResizeEvent) {
    this.props.screenResize(e.target.innerWidth, e.target.innerHeight);
  }

  public render() {
    const { children, screenData, className, ...rest } = this.props;
    return (
      <Wrapper
        {...rest}
        className={`screen-watcher ${this.props.className ||
          ''} ${getScreenClass(screenData)}`}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

export default ScreenWatcher;
