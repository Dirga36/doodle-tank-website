'use client';

import {
  GithubStars,
  GithubStarsIcon,
  GithubStarsLogo,
  GithubStarsNumber,
  GithubStarsParticles,
} from '@/components/animate-ui/primitives/animate/github-stars';
import { StarIcon } from 'lucide-react';

export default function GithubStarsUsable() {
  return (
    <GithubStars
      className="flex gap-2 items-center"
      username="Dirga36"
      repo="Doodle-Tank"
    >
      <GithubStarsLogo className="text-muted-foreground size-6" />
      <div className="p-1 bg-muted flex items-center gap-1">
        <GithubStarsNumber className="text-muted-foreground font-medium" />
        <GithubStarsParticles>
          <GithubStarsIcon
            icon={StarIcon}
            className="fill-neutral-300 stroke-neutral-300 dark:fill-neutral-700 dark:stroke-neutral-700"
            activeClassName="text-muted-foreground"
            size={18}
          />
        </GithubStarsParticles>
      </div>
    </GithubStars>
  );
};