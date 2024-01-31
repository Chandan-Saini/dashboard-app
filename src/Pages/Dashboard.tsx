import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from './auth.selectors'
import { signOut } from "./auth.slice";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { avatar, firstName, lastName, email } = user;

  const handleSignOut = () => {
    dispatch(signOut())
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full flex items-center justify-center">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border border-gray-300 inline-block"
            />
          </div>
          <div className="mb-2 text-gray-500">
            <p className="text-lg font-semibold">{firstName} {lastName}</p>
            <p>{email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
