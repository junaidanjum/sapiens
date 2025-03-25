import Link from "next/link";
import { Card } from "./ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import { profileIcon } from "@/lib/profile.icons";

export interface ProfileProps {
  id: string;
  name: string;
  role: keyof typeof profileIcon;
  website: string;
  // image: string;
  bio: string;
}

const ProfileCard = ({ profile }: { profile: ProfileProps }) => {
  return (
    <Link
      href={`${profile.website}?ref=sapiens.website`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Card
        key={profile.id}
        className="inline-block group w-full border-0 overflow-clip mb-2 hover:opacity-80 transition-all duration-300 rounded-none bg-muted p-6 pb-0"
      >
        <div className="relative w-full h-40">
          <img
            src={`/images/${profile.id}.jpg`}
            className="object-cover object-top shadow-xl w-full h-full"
            loading="lazy"
          />
        </div>
      </Card>
      <div className="flex justify-between pr-2 gap-2 items-start">
        <div>
          <div className="flex gap-1 text-muted-foreground items-start">
            <h2 className="text-sm font-medium text-foreground/80 group-hover:underline">
              {profile.name}
            </h2>
            {profileIcon[profile.role]}
          </div>
          <div>
            <p className="text-sm font-light text-muted-foreground mt-0.5 tracking-wide">
              {profile.bio}
            </p>
          </div>
        </div>
        {/* <Link
          href={profile.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground"
        > */}
        <div>
          <SquareArrowOutUpRight
            size={14}
            strokeWidth={1.5}
            className="text-muted-foreground"
          />
        </div>
        {/* </Link> */}
      </div>
    </Link>
  );
};

export default ProfileCard;
