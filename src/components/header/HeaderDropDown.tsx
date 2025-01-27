import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "../../__generated__/graphql";
import { Link } from "react-router-dom";

const VITE_SERVER_LOGOUT: string = import.meta.env.VITE_SERVER_LOGOUT as string;

interface HeaderDropDownProps {
  user: User;
}
const HeaderDropDown = ({ user }: HeaderDropDownProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user ? user.image : ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/ticker/compare">Compare Stock</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/portfolios">My Portfolios</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={`${VITE_SERVER_LOGOUT}`}>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropDown;
