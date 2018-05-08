import { ThemedStyledFunction } from 'styled-components';

export const withProps = <TProps, U extends HTMLElement = HTMLElement>(
  styledFunction: ThemedStyledFunction<any, any>
): ThemedStyledFunction<TProps & React.HTMLProps<U>, any> => {
  return styledFunction;
};
