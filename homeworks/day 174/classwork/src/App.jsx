import React, { useState, useEffect } from "react";

function Profile({ userId }) {
  if (!userId) {
    return <p>Please log in.</p>;
  }

  if (userId) {
    useEffect(() => {
      fetchData(userId).then((data) => console.log(data));
    }, [userId]);
  }

  return <div>Profile Component</div>;
}
export default Profile