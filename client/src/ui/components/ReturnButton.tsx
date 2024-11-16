import Link from "next/link";
import { House } from "lucide-react";

export default function ReturnButton() {
  return (
    <Link href={"/"}>
      <div className="flex gap-1">
        <House />
      </div>
    </Link>
  );
}
