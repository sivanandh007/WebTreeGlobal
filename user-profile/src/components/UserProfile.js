import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl flex">
      {/* Left side: Profile Image */}
      <img
        className="w-48 h-full object-cover rounded-l-lg"
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      
      {/* Right side: User Details */}
      <div className="p-6 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Location:</strong> {user.location.city}, {user.location.country}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Gender:</strong> {user.gender}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Age:</strong> {user.dob.age}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
