import { PrimeReactProvider } from "primereact/api";
import { FormProvider, useForm } from "react-hook-form";
import { Card } from "primereact/card";

import { ToastProvider } from "./context/ToastContext";
import { FormArrayProvider } from "./context/FormArrayContext";
import PrimeReactConfig from "./config/primeReact.config";
import buildProviderTree from "./utils/buildProviderTree";
import FormHeader from "./components/FormHeader";
import FormBody from "./components/FormBody";
import FormFooter from "./components/FormFooter";

function App() {
  const methods = useForm({
    defaultValues: {
      fieldArray: [{ field: null, operator: null, value: null }],
    },
  });

  const Providers = buildProviderTree([
    <PrimeReactProvider value={PrimeReactConfig} />,
    <FormProvider {...methods} />,
    <ToastProvider />,
    <Card />,
    <FormArrayProvider name="fieldArray" />,
  ]);

  return (
    <Providers>
      <FormHeader />
      <FormBody />
      <FormFooter />
    </Providers>
  );
}

export default App;
