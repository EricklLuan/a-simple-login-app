import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase"
import { signOut } from "firebase/auth";

import { Extra } from "../components/extra/Extra"
import { ExtraElement } from "../components/extra/ExtraElement";
import { Options } from "../components/extra/Options";

import { CreditModal } from "../components/modals/CreditModal/CreditModal"
import { WarningModal } from "../components/modals/WarningModal/WarningModal"
import { EditModal } from "../components/modals/EditModal/EditModal"

import logoutIcon from '../assets/logout.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/delete.svg'
import creditsIcon from '../assets/notes.svg'

import "../styles/user.scss"

export function User() {

  const navigate = useNavigate();

  const [user, setUser] = useState(auth.currentUser);
  const [creditModalIsVisible, setCreditModalVisibility] = useState(false);
  const [deleteModalIsIvsivle, setDeleteModalVisibility] = useState(false);
  const [logoutModalIsIvsivle, setLogoutModalVisibility] = useState(false);
  const [editModalIsIvsivle, setEditModalVisibility] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    })

    return () => unsubscribe();
  }, [])

  function handleUserLogout() {
    signOut(auth).then(() => {
      navigate("/");
    });
  }

  function handleDeleteUser() {
    user?.delete().then(() => {
      navigate("/");
    });
  }

  return(
    <>
      <div id="User" className="fill-page flex centralized">
        <div id="user-content" className="flex centralized">
          <section className="content flex centralized">
            <div id="user-icon"></div>
            <h3>{user?.displayName}</h3>
            <p className="p-sma">{user?.email}</p>
          </section>
        </div>
        <Extra>
          <Options src={logoutIcon} onClick={() => setLogoutModalVisibility(true)}>Logout</Options>
          <Options src={editIcon}>Edit account</Options>
          <Options src={deleteIcon} onClick={() => setDeleteModalVisibility(true)}>Delete account</Options>
          <hr />
          <ExtraElement src={creditsIcon} onClick={() => setCreditModalVisibility(true)}>Credits</ExtraElement>
        </Extra>
      </div>

      <WarningModal message="After confirm, you only be able to see your user again after login. You have sure?" 
        visible={logoutModalIsIvsivle} 
        setVisibility={setLogoutModalVisibility}
        onConfrim={handleUserLogout}
      />

      <EditModal visible={editModalIsIvsivle} setVisibility={setEditModalVisibility}/>

      <WarningModal message="After confirm, you will be not able to access your account anymore. You have sure?" 
        visible={deleteModalIsIvsivle} 
        setVisibility={setDeleteModalVisibility} 
        onConfrim={handleDeleteUser}
      />
      
      <CreditModal visible={creditModalIsVisible} setVisibility={setCreditModalVisibility} />

    </>
  );
}