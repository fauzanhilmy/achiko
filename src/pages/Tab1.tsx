import ExploreContainer from "../components/ExploreContainer";
import React from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonButtons,
  IonLoading,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { key, mail } from "ionicons/icons";
import { Link} from "react-router-dom";
import "./Tab1.css";

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <div id="header">
              <h1>Powered By</h1>
            </div>
            <div>
              <img src= "https://res.cloudinary.com/hlsr7ls49/image/upload/c_pad,h_314,q_80,w_600/v1591338554/efx8ccprj5estvickxdd.png" />
              </div>
            <form id="form">
              <IonItem class="ion-margin-bottom" color="#cf3c4f">
                <IonLabel position="floating" >
                  <IonIcon icon={mail} slot="start" /> email
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem class="ion-margin-bottom" color="#cf3c4f">
                <IonLabel position="floating">
                  <IonIcon icon={key} slot="start" /> password
                </IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
              <IonButton color = "danger" type="submit" expand="block" >
                Login
              </IonButton>
            <h2 color= "danger">
            Sign Up 
                <Link to="/tab3"> Here</Link>
            </h2>
            </form>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;

