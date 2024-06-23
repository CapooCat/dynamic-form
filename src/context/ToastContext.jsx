import { Toast } from "primereact/toast";
import { createContext, useContext, useRef } from "react";

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export function ToastProvider({ children }) {
  const toast = useRef(null);

  const showToast = (options) => {
    toast.current.show(options);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast
        ref={toast}
        pt={{
          message: "bg-gray-900/50 backdrop-blur-md",
          content: "border-none",
          root: "pt-14",
        }}
      />
      {children}
    </ToastContext.Provider>
  );
}
