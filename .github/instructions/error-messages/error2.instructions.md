## Error Type
Runtime TypeError

## Error Message
Cannot read properties of undefined (reading 'displayName')


    at Slot.useMemo[Base] (components/animate-ui/primitives/animate/slot.tsx:75:18)
    at Slot (components/animate-ui/primitives/animate/slot.tsx:71:29)
    at GithubStars (components/animate-ui/primitives/animate/github-stars.tsx:109:9)
    at GitHubStarsButton (components\animate-ui\components\buttons\github-stars.tsx:83:5)
    at Home (app\page.tsx:23:13)

## Code Frame
  73 |       isAlreadyMotion
  74 |         ? (children.type as React.ElementType)
> 75 |         : motion.create(children.type as React.ElementType),
     |                  ^
  76 |     [isAlreadyMotion, children.type],
  77 |   );
  78 |

Next.js version: 16.2.6 (Turbopack)
