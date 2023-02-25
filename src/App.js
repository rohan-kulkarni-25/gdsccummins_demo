import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [userimg, setUserimg] = useState("");
  const [userbio, setUserbio] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsername(data.login);
        setUserimg(data.avatar_url);
        setUserbio(data.bio);
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className='flex  justify-center h-screen'>
      <div className='flex-col mt-24 '>
        <div className='flex items-center gap-8'>
          <input
            className='p-4 flex-1 border-black border rounded-lg'
            type='search'
            placeholder='Search here'
            onChange={handleChange}
            value={searchInput}
          />
          <p
            className='p-2 hover:cursor-pointer text-2xl border-black border rounded-lg font-bold flex-1 flex justify-center align-middle h-fit'
            onClick={fetchData}
          >
            Search
          </p>
        </div>

        {userbio != "" ? (
          <div className='p-4 rounded-lg w-fit flex flex-col justify-center items-center bg-blue-200 mt-24'>
            <div className='bg-white p-12 rounded'>
              <img src={userimg} className='h-48 w-48 rounded-full' />
              <div className='mt-12'>
                <p className='text-2xl'>{username}</p>
                <p className='text-2xl'>{userbio}</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default App;
