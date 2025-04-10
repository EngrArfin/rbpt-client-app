import {
  Navbar,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";

type SearchIconProps = {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  [x: string]: any;
};

const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}: SearchIconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
export default function App() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start"></NavbarContent>

      <NavbarContent as="div" className="items-center mt-2 mb-2" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[18rem] h-12",
            mainWrapper: "h-full",
            input:
              "text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500",
            inputWrapper:
              "h-full bg-white/30 dark:bg-gray-700/30 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-full px-4 shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-primary transition-all duration-300 ease-in-out",
          }}
          placeholder="Search products, orders, customers..."
          size="sm"
          startContent={
            <SearchIcon
              size={20}
              className="text-gray-600 dark:text-gray-300"
            />
          }
          type="search"
        />

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="bg-gray-600 p-3 rounded-lg shadow-lg text-white"
          >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
