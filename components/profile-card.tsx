import Link from "next/link";
import { Card } from "./ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import { profileIcon } from "@/lib/profile.icons";

export interface ProfileProps {
  id: string;
  name: string;
  roles: Array<keyof typeof profileIcon>;
  website: string;
  // image: string;
  bio: string;
  video?: string;
  image?: string;
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
        className="inline-block group w-full border-0 overflow-clip mb-2 rounded-none bg-muted p-6 pb-0"
      >
        <div className="relative w-full h-52 sm:h-40">
          {profile.video ? (
            <video
              src={profile.video}
              loop
              muted
              autoPlay
              onMouseEnter={(e) => {
                e.currentTarget.play();
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          ) : (
            <img
              src={profile.image || `/images/${profile.id}.jpg`}
              className="object-cover object-top shadow-xl w-full h-full hover:opacity-80 transition-all duration-300"
              loading="lazy"
            />
          )}
        </div>
      </Card>
      <div className="flex justify-between pr-2 gap-2 items-start">
        <div>
          <div className="flex gap-1 text-muted-foreground items-start">
            <h2 className="text-sm font-medium text-foreground/80 group-hover:underline">
              {profile.name}
            </h2>
            {profile.roles.map((role) => profileIcon[role])}
          </div>
          <div>
            <p className="text-sm font-light text-muted-foreground mt-0.5 tracking-wide line-clamp-2">
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
