//image-gen/client/src/contexts/container.jsx
import { useContext, useState } from 'react';
import { MyContext } from './context';

export default function Container({ children }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('userphotos');

  // Exemplo: Estado do usuário e função de setar usuário
  const [user, setUser] = useState(null);

  const closeModal = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const handleLogout = () => {
    // Adicione lógica aqui para efetuar logout
    // Exemplo: redefinir o estado do usuário para nulo
    setUser(null);
    closeModal();
  };

  const contextValues = {
    showRegister,
    showLogin,
    setShowRegister,
    setShowLogin,
    closeModal,
    selectedComponent,
    setSelectedComponent,
    // Adicionando o estado do usuário e função de logout ao contexto
    user,
    handleLogout,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
