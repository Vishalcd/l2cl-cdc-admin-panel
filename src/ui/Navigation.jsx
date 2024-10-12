import {
  IconAward,
  IconBriefcase,
  IconFileCertificate,
  IconLayoutDashboard,
  IconNotes,
  IconPhotoStar,
  IconSettings,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const allLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <IconLayoutDashboard width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Students",
      href: "/students",
      icon: <IconUsers width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Employees",
      href: "/employees",
      icon: <IconBriefcase width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Faculty",
      href: "/faculty",
      icon: <IconSparkles width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Work & Certificates",
      href: "/certificates",
      icon: <IconFileCertificate width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Notes",
      href: "/notes",
      icon: <IconNotes width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Placements",
      href: "/placements",
      icon: <IconAward width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Gallery",
      href: "/gallery",
      icon: <IconPhotoStar width={22} height={22} stroke={1.2} />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <IconSettings width={22} height={22} stroke={1.2} />,
    },
  ];

  return (
    <div className="w-full mt-2">
      <ul className="flex flex-col">
        {allLinks.map((link, i) => {
          return (
            <li key={i}>
              <NavLink
                to={link.href}
                className="flex hover:bg-violet-50 dark:hover:bg-violet-950 items-center transition-colors gap-3 px-12 py-[0.75rem] dark:hover:text-stone-400 ">
                <span className=" text-zinc-500"> {link.icon}</span>
                <span className={`font-medium text-[15px]`}>{link.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
