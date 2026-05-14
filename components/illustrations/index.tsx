/**
 * Illustration registry.
 *
 * Per-item hand-authored SVG illustrations. Page components consult this
 * registry when an Item doesn't have a real /public/illustrations/... asset
 * yet. When real artwork lands, set `heroIllustration` / per-step
 * `illustration` on the item and the page components prefer the asset.
 *
 * Adding a new item: import its illustrations module and add a case to
 * each switch helper below.
 */

import type { ReactElement } from "react";
import { ChocolateStepIllustration, CocoaPodHero } from "./chocolate";
import { MilkBottleHero, MilkStepIllustration } from "./milk";
import { BreadLoafHero, BreadStepIllustration } from "./bread";
import { HoneyJarHero, HoneyStepIllustration } from "./honey";
import { BananaBunchHero, BananaStepIllustration } from "./banana";
import { TeacupHero, TeaStepIllustration } from "./tea";
import { YogurtPotHero, YogurtStepIllustration } from "./yogurt";
import { ButterBlockHero, ButterStepIllustration } from "./butter";
import { EggHero, EggsStepIllustration } from "./eggs";
import { JamJarHero, JamStepIllustration } from "./jam";
import { OrangeJuiceHero, OrangeJuiceStepIllustration } from "./orange-juice";
import { CerealBowlHero, CerealStepIllustration } from "./cereal";

interface CommonProps {
  size?: number;
  className?: string;
  title?: string;
}

/** Hero illustration for an item, or `null` if none is authored. */
export function getHeroIllustration(
  itemSlug: string,
  props: CommonProps = {},
): ReactElement | null {
  switch (itemSlug) {
    case "chocolate":
      return <CocoaPodHero {...props} />;
    case "milk":
      return <MilkBottleHero {...props} />;
    case "bread":
      return <BreadLoafHero {...props} />;
    case "honey":
      return <HoneyJarHero {...props} />;
    case "banana":
      return <BananaBunchHero {...props} />;
    case "tea":
      return <TeacupHero {...props} />;
    case "yogurt":
      return <YogurtPotHero {...props} />;
    case "butter":
      return <ButterBlockHero {...props} />;
    case "eggs":
      return <EggHero {...props} />;
    case "jam":
      return <JamJarHero {...props} />;
    case "orange-juice":
      return <OrangeJuiceHero {...props} />;
    case "cereal":
      return <CerealBowlHero {...props} />;
    default:
      return null;
  }
}

/** Flow-step illustration for an item+step, or `null` if none is authored. */
export function getStepIllustration(
  itemSlug: string,
  stepId: string,
  props: CommonProps = {},
): ReactElement | null {
  switch (itemSlug) {
    case "chocolate":
      return <ChocolateStepIllustration stepId={stepId} {...props} />;
    case "milk":
      return <MilkStepIllustration stepId={stepId} {...props} />;
    case "bread":
      return <BreadStepIllustration stepId={stepId} {...props} />;
    case "honey":
      return <HoneyStepIllustration stepId={stepId} {...props} />;
    case "banana":
      return <BananaStepIllustration stepId={stepId} {...props} />;
    case "tea":
      return <TeaStepIllustration stepId={stepId} {...props} />;
    case "yogurt":
      return <YogurtStepIllustration stepId={stepId} {...props} />;
    case "butter":
      return <ButterStepIllustration stepId={stepId} {...props} />;
    case "eggs":
      return <EggsStepIllustration stepId={stepId} {...props} />;
    case "jam":
      return <JamStepIllustration stepId={stepId} {...props} />;
    case "orange-juice":
      return <OrangeJuiceStepIllustration stepId={stepId} {...props} />;
    case "cereal":
      return <CerealStepIllustration stepId={stepId} {...props} />;
    default:
      return null;
  }
}
