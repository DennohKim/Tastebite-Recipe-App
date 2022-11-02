import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useNavigate } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const NavbarDashboard = () => {
  const { activeMenu, setActiveMenu, user } = useStateContext();

  const { username, image_url } = user;

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className="flex justify-between">
      <div className="flex justify-between p-2 md:mx-6 relative">
        {
          <NavButton
            title="Menu"
            customFunc={() => setActiveMenu((activeMenu) => !activeMenu)}
            color="primary-color"
            icon={<AiOutlineMenu />}
          />
        }
      </div>

      <div className="flex items-center p-4">
        <div className="pr-6">
          <img
            className="h-14 w-14 self-center rounded-full object-cover"
            src={image_url}
            alt="recipe"
          />
        </div>

        <div className="pr-6">
          <p className="text-base font-bold py-2">Account</p>
          <p className="text-base text-gray-600">
            Welcome: <span className="font-bold"> {username} </span>
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="border-2 border-secondary-color text-white hover:text-white font-semibold bg-secondary-color hover:font-semibold rounded-full hover:shadow-md px-6 py-2 my-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;



