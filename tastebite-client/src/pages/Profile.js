import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  const { activeMenu, user } = useStateContext();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [imageUrl, setImageUrl] = useState(user.image_url);
  const [email, setEmail] = useState(user.email);

  const { id } = user;

  function handleUpdateUser(updatedUserObj) {
    if (user.id === updatedUserObj.id) {
      return updatedUserObj;
    } else {
      return user;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://127.0.0.1:5000/users/${id}`, {
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
                  <div className="flex">
                    <div>
                      <h3 className="font-bold text-lg py-4">
                        Recipe Creator: {username}
                      </h3>
                      <input
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <div className="">
                        <img
                          className="h-24 w-24 rounded-full object-cover"
                          src={imageUrl}
                          alt="recipe"
                        />
                        <label>Change Image Link</label>
                        <input
                          type="text"
                          name="imageUrl"
                          autoComplete="off"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                        />
                      </div>
                      <div className="px-10">
                        <div className="flex justify-between py-4 ">
                          <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <input
                              type="text"
                              name="peopleServed"
                              autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-center align-center">
                          <button
                            className="flex gap-2 align-items-center  text-white bg-secondary-color text-md px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 grid-rows-3 mx-auto">
                <div className="flex">
                    <img
                      className="h-24 w-24 rounded-full object-cover"
                      src={imageUrl}
                      alt="recipe"
                    />
                  </div>
                  <div className="flex">
                  
                  <div>
                    <h3 className="font-bold text-lg py-4">
                      Recipe Creator:
                      <span className="font-normal">{username}</span>
                    </h3>

                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <h3 className="">{email}</h3>
                    </div>
                  </div>
                </div>
                  

                  <div className="flex justify-center align-center gap-2 align-items-center  text-secondary-color active:bg-secondary-color text-md px-6 rounded-md shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                    <FiEdit className="self-center" />
                    <button
                      onClick={() => setIsEditing((isEditing) => !isEditing)}
                    >
                      Edit
                    </button>
                  </div>
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
