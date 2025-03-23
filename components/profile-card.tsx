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
    <div>
      <Card
        key={profile.id}
        className="inline-block group w-full border-0 overflow-clip my-2 hover:opacity-80 transition-all duration-300 rounded-none bg-muted p-6 pb-0"
      >
        <Link href={profile.website} target="_blank" rel="noopener noreferrer">
          <img
            src={`/images/${profile.id}.jpg`}
            className="object-cover shadow-xl"
          />
        </Link>
      </Card>
      <div className="flex justify-between pr-2 gap-2 items-start">
        <div>
          <div className="flex gap-1 text-muted-foreground items-start">
            <h2 className="text-sm font-medium text-foreground/80">
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
        <Link
          href={profile.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground"
        >
          <SquareArrowOutUpRight size={16} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
