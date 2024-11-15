import Image from 'next/image';
import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type AuthorSectionProps = HTMLAttributes<HTMLElement>;

export const AuthorSection: FC<AuthorSectionProps> = ({
  className,
  ...props
}) => (
  <section
    className={cn(
      'flex items-center justify-center gap-4 font-medium',
      className,
    )}
    {...props}
  >
    <Image
      width={48}
      height={48}
      className="h-12 w-12 rounded-full"
      src="https://bucket.stepham.com/cdn/stepham-1.png"
      alt="Stepham, Developer of Domain Digger Tools"
    />
    <div>
      <p>Hey there, I am Stepham, the creator of Domain Digger. 👋</p>
      <p>
        You can{' '}
        <a
          className="underline decoration-dotted underline-offset-4"
          href="https://github.com/sponsors/stexpham"
          target="_blank"
        >
          sponsor me to the project
        </a>{' '}
        and{' '}
        <a
          className="underline decoration-dotted underline-offset-4"
          href="https://stepham.com/"
          target="_blank"
        >
          check out my other projects
        </a>
        .
      </p>
    </div>
  </section>
);
