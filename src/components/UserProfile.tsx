import React from "react";

import styles from "./UserProfile.module.css";

type UserProfileProps = {};

const UserProfile = function (props: UserProfileProps): JSX.Element {
  return (
    <main className={styles.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
