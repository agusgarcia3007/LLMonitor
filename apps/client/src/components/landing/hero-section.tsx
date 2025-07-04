import { useGlobalStatsQuery } from "@/services/analytics/query";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { useTranslation } from "react-i18next";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import { NumberTicker } from "../magicui/number-ticker";
import { ShineBorder } from "../magicui/shine-border";
import { HeroHeader } from "./header";
import { useTheme } from "../layout/theme-provider";

export function HeroSection() {
  const { t } = useTranslation();
  const { data: globalStats } = useGlobalStatsQuery();
  const { theme } = useTheme();

  return (
    <>
      <HeroHeader />
      <main>
        <section className="before:bg-gradient-to-b before:from-primary/20 before:to-muted/50 border-e-foreground relative overflow-hidden before:absolute before:inset-1 before:h-[calc(100%-8rem)] before:rounded-2xl sm:before:inset-2 md:before:rounded-[2rem] lg:before:h-[calc(100%-14rem)]">
          <div className="py-20 md:py-36">
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 1.5 }}
                />

                <Link
                  to={"/"}
                  className="hover:bg-foreground/5 mx-auto flex w-fit items-center justify-center gap-2 rounded-md py-0.5 pl-1 pr-3 transition-colors duration-150 mb-8"
                >
                  <div
                    aria-hidden
                    className="border-background bg-linear-to-b dark:inset-shadow-2xs to-foreground from-primary relative flex size-5 items-center justify-center rounded border shadow-md shadow-black/20 ring-1 ring-black/10"
                  >
                    <div className="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/25"></div>
                    <div className="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/25"></div>
                    <Sparkle className="size-3 fill-white stroke-white drop-shadow" />
                  </div>
                  <span className="font-medium">{t("landing.badge")}</span>
                </Link>

                <motion.h1
                  className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="text-primary font-black">
                    {t("landing.title.highlight")}
                  </span>{" "}
                  {t("landing.title.suffix")}
                </motion.h1>

                <motion.p
                  className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {t("landing.subtitle")}
                </motion.p>

                {globalStats?.totalEvents ? (
                  <motion.div
                    className="mx-auto mb-8 flex gap-2 items-center justify-center text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                  >
                    <div className="text-xl font-bold">
                      <NumberTicker
                        value={globalStats.totalEvents}
                        startValue={globalStats.totalEvents / 2}
                        className="text-primary"
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("landing.eventsAndCounting")}
                    </div>
                  </motion.div>
                ) : null}
              </motion.div>
            </div>
            <div className="relative">
              <div className="relative z-10 mx-auto max-w-5xl px-6">
                <motion.div
                  className="mt-12 md:mt-16 relative rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <ShineBorder shineColor={"var(--color-primary)"} />
                  <HeroVideoDialog
                    className="block rounded-xl"
                    animationStyle="from-bottom"
                    videoSrc="https://www.youtube.com/embed/HdWpsnDOpKk?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc={
                      theme === "dark"
                        ? "/dashboard-dark.png"
                        : "/dashboard-light.png"
                    }
                    thumbnailAlt="Hero Video"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
