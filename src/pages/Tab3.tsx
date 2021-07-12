import ExploreContainer from "../components/ExploreContainer";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { mail, lockClosed } from "ionicons/icons";
import { Link} from "react-router-dom";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <div id="header">
              <h1>Create Your Account</h1>
            </div>
            <form id="form">
              
              <IonItem class="ion-margin-bottom" color="#cf3c4f"> 
                <IonLabel position="floating">
                  <IonIcon icon={mail} slot="start" ></IonIcon>
                  <span className="text">email</span>
                </IonLabel>
                <IonInput/>
              </IonItem>
              <IonItem class="ion-margin-bottom" color="#cf3c4f">
                <IonLabel position="floating">
                  <IonIcon icon={lockClosed} slot="start"/>password
                </IonLabel>
                <IonInput
                  type="password"
                />
              </IonItem>
           
              <IonButton color = "danger" expand="block" >
                Register
              </IonButton>
            </form>
            <h2 color= "danger">
            Already have an account? <Link to="/Tab1">Login</Link>
            </h2>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

