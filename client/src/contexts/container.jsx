//image-gen/client/src/contexts/container.jsx
import { useContext, useState } from 'react'; // Importe 'useContext' e 'useState' do React
import { MyContext } from './context';

export default function Container({ children }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('userphotos');
  const closeModal = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const contextValues = {
    showRegister,
    showLogin,
    setShowRegister,
    setShowLogin,
    closeModal,
    selectedComponent,
    setSelectedComponent,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
