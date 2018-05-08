export interface ScreenData {
  xs: boolean;
  gtXs: boolean;
  sm: boolean;
  gtSm: boolean;
  md: boolean;
  gtMd: boolean;
  lg: boolean;
  gtLg: boolean;
  xl: boolean;
  width: number;
  height: number;
}

export interface OwnProps {
  className?: string;
}

export interface StateProps {
  className?: string;
  screenData: ScreenData;
}

export interface DispatchProps {
  screenResize: (width: number, height: number) => void;
}

export interface Props extends StateProps, DispatchProps {}
