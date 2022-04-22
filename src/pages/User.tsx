import { useEffect, useState } from "react"
import { auth } from "../services/firebase"

import { Extra } from "../components/extra/Extra"
import { ExtraElement } from "../components/extra/ExtraElement";
import { Options } from "../components/extra/Options";

import logoutIcon from '../assets/logout.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/delete.svg'
import creditsIcon from '../assets/notes.svg'

import "../styles/user.scss"

export function User() {

  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    })

    return () => unsubscribe();
  }, [])

  return(
    <div id="User" className="fill-page flex centralized">
      <div id="user-content" className="flex centralized">
        <section className="content flex centralized">
          <div id="user-icon"></div>
          <h3>{user?.displayName}</h3>
          <p className="p-sma">{user?.email}</p>
        </section>
      </div>
      <Extra>
        <Options src={logoutIcon}>Logout</Options>
        <Options src={editIcon}>Edit account</Options>
        <Options src={deleteIcon}>Delete account</Options>
        <hr />
        <ExtraElement src={creditsIcon}>Credits</ExtraElement>
      </Extra>
    </div>
  );
}