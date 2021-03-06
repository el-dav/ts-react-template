import { injectGlobal } from 'emotion';

export const injectGlobalStyles = () => {
  // tslint:disable-next-line: no-unused-expression
  injectGlobal`
    body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  body #root {
    width: 100%;
    height: 100%;
  }
`;
};

export const injectGlobalAnimations = () => {
  // tslint:disable-next-line: no-unused-expression
  injectGlobal`
    .fade-enter {
      opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit.fade-exit-active {
      opacity: 0.01;
      transition: opacity 300ms;
    }
  `;
};
