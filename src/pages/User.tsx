import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

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
    </div>
  );
}