//image-gen/client/src/contexts/container.jsx

import { MyContext } from './context';

export default function Container({ children }) {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}
