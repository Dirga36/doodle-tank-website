## Error Type
Console Error

## Error Message
Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.
  <... icon={{$$typeof: ..., render: ...}} data-variant=... className=... activeClassName=... size=...>
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


    at stringify (<anonymous>:1:18)
    at stringify (<anonymous>:1:18)
    at stringify (<anonymous>:1:18)
    at GitHubStarsButton (components\animate-ui\components\buttons\github-stars.tsx:100:11)
    at Home (app\page.tsx:23:13)

## Code Frame
   98 |         <GithubStarsNumber />
   99 |         <GithubStarsParticles className="text-yellow-500">
> 100 |           <GithubStarsIcon
      |           ^
  101 |             icon={StarIcon}
  102 |             data-variant={variant}
  103 |             className={cn(buttonStarVariants({ variant }))}

Next.js version: 16.2.6 (Turbopack)
