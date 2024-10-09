import {
  IconAward,
  IconHome,
  IconNotes,
  IconPhotoStar,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const allLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <IconHome width={24} height={24} stroke={1.2} />,
    },
    {
      name: "Students",
      href: "/students",
      icon: <IconUsers width={24} height={24} stroke={1.2} />,
    },
    {
      name: "Placements",
      href: "/placements",
      icon: <IconAward width={24} height={24} stroke={1.2} />,
    },
    {
      name: "Notes",
      href: "/notes",
      icon: <IconNotes width={24} height={24} stroke={1.2} />,
    },
    {
      name: "Gallery",
      href: "/gallery",
      icon: <IconPhotoStar width={24} height={24} stroke={1.2} />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <IconSettings width={24} height={24} stroke={1.2} />,
    },
  ];

  return (
    <div className="w-full mt-3">
      <ul className="flex flex-col">
        {allLinks.map((link, i) => {
          return (
            <li key={i}>
              <NavLink
                to={link.href}
                className="flex items-center transition-colors gap-3 px-12 py-[0.80rem] text-base dark:hover:text-stone-400 hover:text-zinc-600">
                <span className=" text-zinc-500"> {link.icon}</span>
                <span className={`font-medium text-base`}>{link.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
