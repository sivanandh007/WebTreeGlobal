import React, { useState, useEffect } from 'react';
import UserProfile from '../src/components/UserProfile';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      {userData ? <UserProfile user={userData} /> : <p className="text-white">Loading...</p>}
    </div>
  );
}

export default App;
