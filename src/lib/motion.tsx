/* eslint-disable @typescript-eslint/no-explicit-any, react-refresh/only-export-components */
import React from 'react';

// Lightweight framer-motion replacement: renders plain DOM elements and
// strips animation-only props so the app builds without the dependency.
const ANIM_PROPS = [
  'initial',
  'animate',
  'exit',
  'transition',
  'variants',
  'whileHover',
  'whileTap',
  'whileInView',
  'whileFocus',
  'viewport',
  'layout',
  'layoutId',
  'drag',
];

function clean(props: Record<string, any>) {
  const out: Record<string, any> = {};
  for (const key in props) {
    if (!ANIM_PROPS.includes(key)) out[key] = props[key];
  }
  return out;
}

type MotionTag = keyof JSX.IntrinsicElements;

export const motion = new Proxy(
  {},
  {
    get: (_t, tag: string) => {
      const Comp = React.forwardRef<any, any>((props, ref) =>
        React.createElement(tag as MotionTag, { ref, ...clean(props) })
      );
      Comp.displayName = `motion.${tag}`;
      return Comp;
    },
  }
) as Record<string, React.FC<any>>;

export const AnimatePresence: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => <>{children}</>;
