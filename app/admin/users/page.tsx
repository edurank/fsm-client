"use client";

import { useState } from "react";
import AdminSidebar from '../components/sidebar';

import UserList from './components/userList';
import NewUser from './components/newUser';

export default function Users() {

  const [page, setPage] = useState(0);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full p-20">
        {page == 0 &&
          <>
            <button onClick={() => { setPage(1) }} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">New User +</button>
            <UserList />
          </>
        }
        {page == 1 &&
          <>
            <button onClick={() => { setPage(0) }} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">Back</button>
            <NewUser onSuccess={() => { setPage(0) }} />
          </>
        }
      </div>
    </div>
  );
}