"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProfileCard from "@/components/profile-card";
import profiles from "@/lib/profiles";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { switchTheme } from "@/hooks/switch-theme";
import { profileIcon } from "@/lib/profile.icons";

export default function Home() {
  const [filter, setFilter] = useState("All");
  // Filter profiles based on selected category
  const filteredProfiles =
    filter === "All"
      ? profiles
      : profiles.filter((profile) => profile.role === filter);

  const filterGroups = [
    "All",
    ...new Set(profiles.map((profile) => profile.role)),
  ];

  switchTheme();
  return (
    <div className={`min-h-screen bg-background text-foreground font-sans`}>
      <div className=" max-w-[1500px] mx-auto px-4 md:px-10 py-12">
        {/* Header */}
        <header className="mb-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-6xl font-bold tracking-tighter text-foreground">
                sapiens
              </h1>
              <p className="text-lg font-light text-muted-foreground tracking-normal mt-1">
                A curated collection of unique individuals across the internet,
                giving everyone a chance to be seen, appreciated, and connected.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-sm justify-between">
            <ToggleGroup
              defaultValue="All"
              onValueChange={(value) => setFilter(value)}
              size="sm"
              type="single"
            >
              {filterGroups.map((group) => (
                <ToggleGroupItem value={group} key={group}>
                  {profileIcon[group as keyof typeof profileIcon]} {group}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            {/* //todo: add actual form for adding new profiles */}
            <Button variant="secondary">
              <a href="mailto:junaidanjum@live.com?subject=Add%20Me%20On%20Sapiens&body=Name:%0ARole (Designer/ Developer/Writer):%0AOne%20Line%20Description:%0AWebsite%20Link:%0A">
                Add Me
              </a>
            </Button>
          </div>
          <Separator className="opacity-50 mt-4" />
        </header>

        {/* Profile Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard profile={profile} key={profile.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
