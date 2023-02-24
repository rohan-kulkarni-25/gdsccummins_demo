import React, { useState, useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [userimg, setUserimg] = useState("");
  const [userbio, setUserbio] = useState("");

  // Arrow Function
  // const fun_name = () => {}

  const fetchData = () => {
    return fetch("https://api.github.com/users/isha-73")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsername(data.login);
        setUserimg(data.avatar_url);
        setUserbio(data.bio);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className='bg-black p-8 w-fit flex flex-col justify-center items-center'>
        <img src={userimg} className='rounded h-48 w-48' />
        <div className='bg-white'>
          <p className='text-4xl'>{username}</p>
          <p className='text-4xl'>{userbio}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
