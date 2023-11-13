import { useState, useEffect } from "react";
import axios from "axios";
import { Profile } from '../../../utils/interfaces';
import { FaEdit, FaRegTrashAlt, FaEye } from 'react-icons/fa';

export default function UserList() {
  const [users, setUsers] = useState<any>(null);
  const [count, setCount] = useState(0);
  const [authToken, setAuthToken] = useState<String>("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAuthToken();
  }, []);

  const getAuthToken = () => {
    try {
      const storedValue = localStorage.getItem('authToken');
      if (storedValue) {
        setAuthToken(storedValue);

      }
    } catch (error) {
      console.error('Error retrieving value from local storage:', error);
    }
  };

  const getUsers = () => {
    if (authToken.length < 5) return;
    if (count != 0) return;
    
    setCount(1);
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/user/all",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
    };

    axios(config)
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUserHandler = (user: Profile) => {
    var postData = {
      Id: user.id,
    };

    var config = {
      url: process.env.NEXT_PUBLIC_API_USER + "/user",
      method: "delete",
      data: postData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
    };
    
    axios(config)
      .then((result) => {
        setUsers(null);
        getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    // You can add logic here to filter your user list based on the search query.
  };

  getUsers();
  return (
    <div className="p-10">
      <div className="overflow-x-auto">
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">User List</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-500 w-64"
                value={searchQuery}
                onChange={handleSearch}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>
          {/* Render your user list here */}
        </div>

        {users != null && Object.keys(users).length > 0 &&
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Password
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
            {users != null && Object.keys(users).length > 0 ? (
              <>
                {users.map((user: Profile, index: any) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div style={{width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                        <img className="object-cover w-full h-full" src={user.profilePictureUrl} /> 
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {user.firstName + " " + user.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {user.password}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        <FaEdit size={20} color="white" />
                      </button>
                      <button
                        onClick={() => {
                          deleteUserHandler(user);
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        <FaRegTrashAlt size={20} color="white" />
                      </button>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        <FaEye size={20} color="white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <div>Loading</div>
            )}
          </tbody>
        </table>
        }
      </div>
    </div>
  );
}
