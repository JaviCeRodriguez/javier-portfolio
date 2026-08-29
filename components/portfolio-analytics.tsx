"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const sectionIds = ["about", "skills", "experience", "contact"];
const scrollMilestones = [25, 50, 75, 100];

export function PortfolioAnalytics() {
  useEffect(() => {
    const viewedSections = new Set<string>();
    const reachedMilestones = new Set<number>();
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || viewedSections.has(entry.target.id)) return;

          viewedSections.add(entry.target.id);
          trackEvent("portfolio_section_view", { section_id: entry.target.id });
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    const trackScrollDepth = () => {
      const maximumScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maximumScroll <= 0) return;

      const progress = (window.scrollY / maximumScroll) * 100;
      scrollMilestones.forEach((milestone) => {
        if (progress < milestone || reachedMilestones.has(milestone)) return;

        reachedMilestones.add(milestone);
        trackEvent("portfolio_scroll_depth", { percent: milestone });
      });
    };

    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    trackScrollDepth();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", trackScrollDepth);
    };
  }, []);

  return null;
}
