import React from "react";

import styles from "./UserProfile.module.css";

type UserProfileProps = {};

const UserProfile: React.FunctionComponent<UserProfileProps> = (props) => {
  return (
    <main className={styles.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
