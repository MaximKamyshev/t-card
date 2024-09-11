import { BottomSheet } from "react-spring-bottom-sheet";
import { useModalStore } from "../../../app/stores/modal/modal.store";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useInitDataStore } from "../../../app/stores/init-data/init-data.store";
import close from "../../invites-modal/images/close.svg";
import { SelectItem } from "../../../shared/ui/select-item";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { initCloudStorage } from "@telegram-apps/sdk-react";
export const LanguageModal: React.FC = () => {
  const languages = [
    {
      id: 'en',
      value: 'English',
      disabled: false
    },
    {
      id: 'ru',
      value: 'Russian',
      disabled: false
    },
    {
      id: 'fr',
      value: 'French - Not available yet',
      disabled: true
    },
    {
      id: 'es',
      value: 'Spain - Not available yet',
      disabled: true
    }
  ]
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'onboardPage' });
  const user = useInitDataStore((state: any) => state.user);
  const[checkedValue, setCheckedValue] = useState(user.languageCode)
  const [isLanguageModalOpen, updateIsLanguageModalOpen] = useModalStore((state: any) => [state.isLanguageModalOpen, state.updateIsLanguageModalOpen]);
  const platform = useInitDataStore((state: any) => state.platform);
  const cloudStorage = initCloudStorage();
  const handleChangeLanguage = (id: string) => {
    cloudStorage.set('language', id)
    setCheckedValue(id)
    i18n.changeLanguage(id)
    updateIsLanguageModalOpen(false);
  }

  useEffect(() => {
    if (user) {
      cloudStorage.get('language')
        .then((value) => {
          if (value) {
            setCheckedValue(user.languageCode)
          }
          else {
            setCheckedValue(user.languageCode)
          }

        })
      
    }
  }, [user])
  
  return (
    <BottomSheet onDismiss={() => updateIsLanguageModalOpen(false)} open={isLanguageModalOpen}>
      <section {...stylex.props(platform === 'ios' && styles.iosWrapper)}>
        <div {...stylex.props(styles.container)}>
          <p {...stylex.props(styles.bottomSheetTitle)}>{t('languageText')}</p>
          <button {...stylex.props(styles.button(close))} onClick={() => updateIsLanguageModalOpen(false)} />
        </div>
        <div {...stylex.props(styles.listContainer)}>
          {languages.map((language, index) => (
            <SelectItem handlePress={() => handleChangeLanguage(language.id)} key={index} text={language.value} checked={checkedValue === language.id} disabled={language.disabled} />
          ))}
        </div>
      </section>
    </BottomSheet>
  )
}