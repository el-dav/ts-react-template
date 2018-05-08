export interface OwnProps {
  className?: string;
}

export interface StateProps {
  className?: string;
}

export interface DispatchProps {
  checkAuth: () => void;
}

export interface Props extends StateProps, DispatchProps {}
