export interface OwnProps {
  className?: string;
}

export interface StateProps {
  className?: string;
  total: number;
}

export interface DispatchProps {
  increase: () => void;
  decrease: () => void;
  increaseAsync: () => void;
}

export interface Props extends StateProps, DispatchProps {}
