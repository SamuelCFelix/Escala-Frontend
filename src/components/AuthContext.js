import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showCadastroFeitoPopup, setShowCadastroFeitoPopup] = useState(false);

  const showPopup = () => {
    setShowCadastroFeitoPopup(true);
  };

  const hidePopup = () => {
    setShowCadastroFeitoPopup(false);
  };

  return (
    <AuthContext.Provider
      value={{ showPopup, hidePopup, showCadastroFeitoPopup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
