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
import { delay, motion } from "framer-motion";
import { Github, UserRoundPlus } from "lucide-react";

const pageVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
    filter: "blur(0px)",
  },
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
                  <img src="/logo.png" className="w-14 h-14" loading="lazy" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                  sapiens.
                  <span className="text-xl md:text-2xl font-light tracking-tight text-muted-foreground">
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
              <div className="flex gap-2">
                <Link
                  href="https://forms.gle/HAgbhqRSaxymyayZA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <UserRoundPlus />
                    Add Me
                  </Button>
                </Link>
                <Link
                  href="https://github.com/junaidanjum/sapiens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Github />
                  </Button>
                </Link>
              </div>
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
