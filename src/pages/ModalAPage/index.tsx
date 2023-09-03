import { ReactNode, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  arrowUpCircleOutline,
  flameOutline,
  flashOutline,
} from "ionicons/icons";

import ModalA from "./components/ModalA";
import Flame from "./components/Flame";
import Flash from "./components/Flash";

import { Breakpoint, ModalOptions } from "./@types";

import "./style.css";

const ModalAPage: React.FC = () => {
  const modals = {
    flame: {
      content: <Flame />,
      options: {
        initialBreakpoint: Breakpoint.b50,
        currentBreakpoint: Breakpoint.b50,
      },
    },
    flash: {
      content: <Flash />,
      options: {
        initialBreakpoint: Breakpoint.b75,
        currentBreakpoint: Breakpoint.b75,
      },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>();
  const [modalOptions, setModalOptions] = useState<ModalOptions>();

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleSetModalContent(modalId: keyof typeof modals) {
    setModalContent(modals[modalId].content);
    setModalOptions(modals[modalId].options);
    handleOpenModal();
  }

  return (
    <IonPage id="modala-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{"Modal A"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Modal A</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="container">
          <strong>Modal A</strong>
        </div>
        <IonFab slot="fixed" vertical="bottom" horizontal="start">
          <IonFabButton size="small">
            <IonIcon icon={arrowUpCircleOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={() => handleSetModalContent("flame")}>
              <IonIcon icon={flameOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => handleSetModalContent("flash")}>
              <IonIcon icon={flashOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>

      <ModalA
        isOpen={isModalOpen}
        options={modalOptions}
        close={handleCloseModal}
      >
        {modalContent}
      </ModalA>
    </IonPage>
  );
};

export default ModalAPage;
