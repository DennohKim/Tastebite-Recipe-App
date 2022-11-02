import { BiFoodMenu } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { RiAccountBoxLine } from "react-icons/ri"





export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'dashboard',
          icon: <MdOutlineDashboard />,
        },
      ],
    },
  
    {
      title: 'Recipes',
      links: [
        {
          name: 'All Recipes',
          icon: <BiFoodMenu  />,
        },
        {
            name: 'My Recipes',
            icon: <GiMeal/>,
        },
      ],
    },

    {
        title: 'Bookmarks',
        links: [
          {
            name: 'favourites',
            icon: <BsBookmark  />,
          },
        ],
      },

      {
        title: 'Profile',
        links: [
          {
            name: 'account',
            icon: <RiAccountBoxLine  />,
          },
        ],
      },

]