import DevTools from './DevTools.cmp';

const AppDevTools = process.env.NODE_ENV === 'development' ? DevTools : null;

export default AppDevTools;
