import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const { activeMenu, user, setUser } = useStateContext();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [imageUrl, setImageUrl] = useState(user.image_url);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();

  const { id } = user;
 

  function handleUpdateUser(updatedUserObj) {
    if (user.id === updatedUserObj.id) {
      return updatedUserObj;
    } else {
      return user;
    }
  }

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://tastebite.herokuapp.com/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        image_url: imageUrl,
      }),
    })
      .then((r) => r.json())
      .then((updatedUserInfo) => handleUpdateUser(updatedUserInfo));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`https://tastebite.herokuapp.com/me/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setUser(data);

          localStorage.setItem("user", JSON.stringify(data));
        });
      
    }, 2000);
    return () => clearInterval(interval);
  }, [id, setUser]);

  return (
    <>
      <div className="flex relative">
        <div className="fixed" style={{ zIndex: "100000" }}>
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
        </div>

        <div
          className={
            activeMenu
              ? "bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg navbar w-full">
            <NavbarDashboard />

            <div className="px-12 mx-auto my-4 gap-8">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 grid-rows-3 items-center mx-auto w-1/2 shadow-md mt-10">
                    <div className="flex flex-col items-center mx-auto">
                      <img
                        className="h-24 w-24 rounded-full object-cover"
                        src={imageUrl}
                        alt="recipe"
                      /> <br/>
                      <label>Change Image Link</label>
                      <input
                        type="text"
                        name="imageUrl"
                        className="py-2 border-2 w-72 mr-4 rounded-md"
                        autoComplete="off"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mx-auto">
                        <h3 className="font-bold text-lg py-4">
                          Username:
                          </h3>
                          <input
                            type="text"
                            name="username"
                            className="py-2 border-2 w-64 mr-4 rounded-md"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        <div className="flex flex-col items-center">
                          <h3 className="font-bold text-lg">Email:</h3>
                          <input
                            type="text"
                            name="email"
                            autoComplete="off"
                            className="py-2 border-2 w-64 mr-4 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center align-center gap-2 align-items-center  text-secondary-color active:bg-secondary-color text-md px-6 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 w-1/3 h-12 mx-auto border-2 border-secondary-color">
                      <button
                        type="submit"
                        // onClick={() => setIsEditing((isEditing) => !isEditing)}
                      >
                        Save Changes
                      </button>
                      
                    </div>
                   
                      <button
                      className="flex justify-center align-center gap-2 align-items-center  text-secondary-color active:bg-secondary-color text-md px-6 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 w-1/3 h-12 mx-auto border-2 border-secondary-color"
                       
                        onClick={() => setIsEditing((isEditing) => !isEditing)}
                      >
                        Close
                      </button>
                      
                    
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 grid-rows-3 items-center mx-auto w-1/2 shadow-md mt-10">
                  <div className="flex mx-auto">
                    <img
                      className="h-24 w-24 rounded-full object-cover"
                      src={imageUrl}
                      alt="recipe"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col mx-auto">
                      <h3 className="font-bold text-lg py-4">
                        Username:
                        <span className="font-normal pl-2">{username}</span>
                      </h3>

                      <div className="flex items-center">
                        <h3 className="font-bold text-lg">Email:</h3>
                        <h3 className="pl-2">{email}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center align-center gap-2 align-items-center  text-secondary-color active:bg-secondary-color text-md px-6 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 w-1/3 h-12 mx-auto border-2 border-secondary-color">
                    <FiEdit className="self-center" />
                    <button
                      onClick={() => setIsEditing((isEditing) => !isEditing)}
                    >
                      Edit
                    </button>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="border-2 border-secondary-color text-white hover:text-white font-semibold bg-secondary-color hover:font-semibold rounded-full hover:shadow-md w-1/3 mx-auto px-6 py-3 my-6"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
