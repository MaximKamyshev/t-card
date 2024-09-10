import { SDKProvider } from "@telegram-apps/sdk-react"
import { AppRouter } from "../routers/AppRouter"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18n/i18n"

export const RootProvider: React.FC = () => {

  return (
    <>
      <SDKProvider acceptCustomStyles>
        <I18nextProvider i18n={i18n}>
          <AppRouter />
        </I18nextProvider>
      </SDKProvider>
    </>
  )
}