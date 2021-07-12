import './Tab2.css';
import {
  IonContent,
  IonPage,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonAvatar,

} from "@ionic/react";
import { calendarNumber, mailOpen, person, call } from "ionicons/icons";


const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center vertical-center">
        <div className="header">
          <h2>Profile</h2>
        </div>

        <div className="avatar">
          <IonAvatar ion-padding className="item-avatar">
            <img src="data:image/jpeg;base64,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" />
          </IonAvatar>
        </div>
        <IonItem className="ion-activated" color="#cf3c4f">
          <IonIcon icon={mailOpen} slot="start" />
          <IonLabel>contact@achiko.com</IonLabel>
        </IonItem>

        <IonItem className="ion-activated" color="#cf3c4f">
          <IonIcon icon={person} slot="start" />
          <IonLabel>Achiko</IonLabel>

        </IonItem>

        <IonItem className="ion-activated" color="#cf3c4f">
          <IonIcon icon={calendarNumber} slot="start"></IonIcon>
          <IonLabel>10-10-2010</IonLabel>
        </IonItem>

        <IonItem className="ion-activated" color="#cf3c4f">
          <IonIcon icon={call} slot="start"></IonIcon>
          <IonLabel>0812-8489-8855</IonLabel>
        </IonItem>
        <IonButton
          className="edit-button"
          expand= "block"
          style={{marginTop: "20px"}}
          shape="round"
          color = "danger"
        >
          Update Profile
        </IonButton>
        <IonButton
          expand= "block"
          style={{marginTop: "20px"}}
          shape="round"
          color = "danger"
        >
Sign Out        
</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
