import { Modal } from "antd"
import Lottie from "react-lottie";
import { PopupProps } from "./types";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useModalStore } from "../../../app/stores/modal/modal.store";
import close from "../../invites-modal/images/close.svg";

export const Popup: React.FC<PopupProps> = ({ text, subscription, buttonText, animationData, modalName, methodName, handleCLick, isCloseButton }) => {
  const [isModalOpen, updateModalOpen] = useModalStore((state: any) => [state[modalName], state[methodName]]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handlePress = () => {
    handleCLick && handleCLick();
    updateModalOpen(false);
  }

  return (
    <Modal 
      open={isModalOpen}
      closeIcon={isCloseButton ? <span {...stylex.props(styles.clsoeButton(close))} /> : <></>}
      maskClosable={false}
      onCancel={() => updateModalOpen(false)}
      width={348}
      centered
      footer={null}
      styles={{content: {padding: 20, height: 375, display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}}>
      <div {...stylex.props(styles.container)}>
        <Lottie
          isClickToPauseDisabled={true}
          options={defaultOptions}
          height={128}
          width={128}
        />
        <p {...stylex.props(styles.text)}>{text}</p>
        <p {...stylex.props(styles.subscription)}>{subscription}</p>
        <button onClick={handlePress} {...stylex.props(styles.button)}>{buttonText}</button>
      </div>
    </Modal>
  )
}