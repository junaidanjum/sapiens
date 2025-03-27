"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProfileCard from "@/components/profile-card";
import profiles from "@/lib/profiles";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { switchTheme } from "@/hooks/switch-theme";
import { profileIcon } from "@/lib/profile.icons";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [filter, setFilter] = useState<"All" | keyof typeof profileIcon>("All");
  // Filter profiles based on selected category
  const filteredProfiles =
    filter === "All"
      ? profiles
      : profiles.filter((profile) => profile.roles.includes(filter));

  const filterGroups = [
    "All",
    ...new Set(profiles.map((profile) => profile.roles).flat()),
  ];

  switchTheme();
  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      <div className={`min-h-screen bg-background text-foreground font-sans`}>
        <div className=" max-w-[1500px] mx-auto px-4 md:px-10 py-12">
          {/* Header */}
          <header className="mb-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <div>
                  <img src="/logo.png" className="w-10 h-10" loading="lazy" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                  sapiens.
                  <span className="text-xl md:text-2xl font-light tracking-tighter text-muted-foreground">
                    website
                  </span>
                </h1>
                <p className="text-base md:text-lg font-light text-muted-foreground tracking-normal mt-2 md:w-2/3">
                  A curated collection of unique individuals across the
                  internet, giving everyone a chance to be seen, appreciated,
                  and connected.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-sm justify-between">
              <ToggleGroup
                defaultValue="All"
                value={filter}
                onValueChange={(value: "All" | keyof typeof profileIcon) =>
                  setFilter(value || "All")
                }
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
                <Link href="mailto:junaidanjum@live.com?subject=Add%20Me%20On%20Sapiens&body=Name:%0ARole (Designer/ Developer/Writer):%0AOne%20Line%20Description:%0AWebsite%20Link:%0A">
                  Add Me
                </Link>
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
        <Footer />
      </div>
    </motion.div>
  );
}
