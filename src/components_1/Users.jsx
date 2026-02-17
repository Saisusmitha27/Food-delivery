import React from 'react';

const Users = ({ result }) => {
  return (
    <div className="flex justify-center gap-5 flex-wrap m-20">
      {result.map((item, index) => (
        <p
          className="border-white border-2 rounded-lg w-70 p-7 font-semibold text-white bg-gray-800"
          key={index}
        >
          FirstName is: {item.name.firstname}
          <br />
          LastName is: {item.name.lastname}
          <br />
          UserName is: {item.username}
          <br />
          Email is: {item.email}
          <br />
          Password is: {item.password}
        </p>
      ))}
    </div>
  )
}

export default Users;
