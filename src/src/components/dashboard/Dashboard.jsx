import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (!user) {
    navigate("/", { replace: true });
  } else {
    console.log(user)
    return (
      <div className="border border-black flex h-screen">
        <div className="m-auto">
          <div>
            <p className="text-3xl mx-2 font-mono md:text-4xl lg:text-6xl xl:text-8xl">
              Welcome <span className="text-pink-500">{user.email}</span>
            </p>
          </div>
          <div className="text-center text-2xl">
            <button
              onClick={logout}
              className="bg-blue-600 text-white px-2 py-1 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
