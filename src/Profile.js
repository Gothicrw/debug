import React, { useState } from 'react';

function Profile({ name, age }) {
  const [bio, setBio] = useState("Loves coding and coffee.");


  return (
    <div>
      <h2>Name: {name}</h2> {/* name is undefined */}
      <h3>Age: {age}</h3>   {/* age is undefined */}
      <p>Bio: {bio}</p>     {/* bio is undefined */}
    </div>
  );
}

export default Profile;
