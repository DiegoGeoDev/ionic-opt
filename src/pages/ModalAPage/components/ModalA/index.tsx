import { useEffect, useRef } from "react";
import { IonButton, IonContent, IonIcon, IonModal } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";

import { ModalOptions } from "../../@types";

import "./style.css";

type ModalAProps = {
  options: ModalOptions | undefined;
  close: () => void;
} & React.ComponentProps<typeof IonModal>;

const ModalA: React.FC<ModalAProps> = ({
  options,
  close,
  isOpen,
  children,
  ...props
}) => {
  const modal = useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    if (!options) return;

    if (modal.current && options.currentBreakpoint) {
      modal.current.setCurrentBreakpoint(options.currentBreakpoint);
    }
  }, [modal, options]);

  if (!options) return null;

  return (
    <IonModal
      ref={modal}
      isOpen={isOpen}
      initialBreakpoint={options.initialBreakpoint}
      breakpoints={[0.25, 0.5, 0.75, 1]}
      backdropBreakpoint={1}
      {...props}
    >
      <IonContent className="ion-padding">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IonButton onClick={close}>
            <IonIcon icon={closeCircleOutline}>Fechar</IonIcon>
          </IonButton>
        </div>
        {children}
      </IonContent>
    </IonModal>
  );
};

export default ModalA;
