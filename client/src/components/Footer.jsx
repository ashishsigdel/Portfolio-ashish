import { IoBarbellOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="p-5 bordertop flex gap-4 items-center">
      <p className="text-sm text-gray-500">
        &copy; 2024 All rights reserved by Ashish Sigdel.
      </p>
      <IoBarbellOutline className="text-gray-500" />
      <p className="text-sm text-gray-500">I respect your privacy.</p>
    </div>
  );
}
