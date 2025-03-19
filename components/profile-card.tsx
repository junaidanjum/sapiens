import Link from "next/link";
import { Card } from "./ui/card";

const ProfileCard = ({ profile }: any) => {
  return (
    <Card
      key={profile.id}
      className="inline-block group w-full border rounded-xl overflow-clip my-2 hover:opacity-80 transition-all duration-300"
    >
      <Link
        href={`https://${profile.website}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-1 min-w-0">
            <img src={profile.image} className="border-b w-full object-cover" />
            <div className="flex flex-col p-3">
              <p className="text-xs text-muted-foreground tracking-wide">
                {profile.role}
              </p>
              <h2 className="text-base font-medium truncate text-foreground">
                {profile.name}
              </h2>
              <p className="text-sm font-light text-muted-foreground tracking-wide">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProfileCard;
