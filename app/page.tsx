"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileCard from "@/components/profile-card";
import profiles from "@/lib/profiles";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Home() {
  const [filter, setFilter] = useState("All");

  // Filter profiles based on selected category
  const filteredProfiles =
    filter === "All"
      ? profiles
      : profiles.filter((profile) => profile.role === filter);

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tighter text-foreground">
                sapiens.fyi
              </h1>
              <p className="text-lg font-light text-muted-foreground tracking-normal mt-1">
                Curated list of humans across the internet because everyone
                deserves a chance.
              </p>
            </div>
          </div>
          <div className="flex space-x-1 text-sm justify-between">
            <ToggleGroup
              defaultValue="All"
              onValueChange={(value) => setFilter(value)}
              size="sm"
              type="single"
            >
              <ToggleGroupItem value="All">All</ToggleGroupItem>
              <ToggleGroupItem value="Designer">Designers</ToggleGroupItem>
              <ToggleGroupItem value="Developer">Developers</ToggleGroupItem>
              <ToggleGroupItem value="Writer">Writers</ToggleGroupItem>
            </ToggleGroup>
            <Button variant="secondary">Add Me</Button>
          </div>
          <Separator className="opacity-50 mt-4" />
        </header>

        {/* Profile Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {filteredProfiles.map((profile) => (
            <ProfileCard profile={profile} key={profile.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
