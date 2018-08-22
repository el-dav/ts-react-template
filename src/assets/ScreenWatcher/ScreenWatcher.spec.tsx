import React from 'react';
import renderer from 'react-test-renderer';

import Story from 'assets/Story';
import { SIZES } from 'ducks/screen/config';

import ScreenWatcherCmp from './ScreenWatcher.cmp';
import ScreenWatcherCnt from './ScreenWatcher.cnt';
import { ScreenData } from './ScreenWatcher.typ';

const xsScreenData = {
  width: SIZES.SM - 1,
  height: 500,
  xs: true,
  gtXs: false,
  sm: false,
  gtSm: false,
  md: false,
  gtMd: false,
  lg: false,
  gtLg: false,
  xl: false
};
const smScreenData = {
  ...xsScreenData,
  width: SIZES.MD - 1,
  xs: false,
  gtXs: true,
  sm: true
};
const mdScreenData = {
  ...smScreenData,
  width: SIZES.LG - 1,
  sm: false,
  gtSm: true,
  md: true
};
const lgScreenData = {
  ...mdScreenData,
  width: SIZES.XL - 1,
  md: false,
  gtMd: true,
  lg: true
};
const xlScreenData = {
  ...lgScreenData,
  width: SIZES.XL + 1,
  lg: false,
  gtLg: true,
  xl: true
};

const screenResize = (width: number, height: number) => undefined;

const testSize = (size: string, screenData: ScreenData) => {
  it(`renders the Component correctly for ${size} size`, () => {
    const tree = renderer
      .create(
        <Story isConnected>
          <ScreenWatcherCmp
            screenData={screenData}
            screenResize={screenResize}
          />
        </Story>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
};

describe('ScreenWatcher', () => {
  testSize('xs', xsScreenData);
  testSize('sm', smScreenData);
  testSize('md', mdScreenData);
  testSize('lg', lgScreenData);
  testSize('xl', xlScreenData);

  it('renders the Container correctly', () => {
    const tree = renderer
      .create(
        <Story isConnected>
          <ScreenWatcherCnt />
        </Story>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
