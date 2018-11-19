import { selectScreenData } from '~/ducks/screen/selectors';

export type ScreenData = ReturnType<typeof selectScreenData>;

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
