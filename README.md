# Practice Platform

My personal practice website. The start page links to each practice platform.

## Folder structure

```
.
├── index.html            Start page (list of platforms)
├── korean/
│   └── index.html        Korean flashcards
├── css/
│   ├── base.css          Shared styles (colours, fonts, layout)
│   ├── home.css          Start page styles
│   └── flashcards.css    Flashcard app styles
├── js/
│   ├── platforms.js      List of platforms on the start page
│   ├── home.js           Builds the start page cards
│   └── flashcards.js     Flashcard app logic
├── data/
│   └── korean-words.js   Korean vocabulary decks
└── .nojekyll             Tells GitHub Pages to serve files as-is
```

## Adding Korean words

Open `data/korean-words.js`. Each deck looks like this:

```js
{id:"f2", name:"Final consonants 2", words:[["딸기","strawberry"],["물","water"]]},
```

## Adding a new platform

1. Make a new folder, e.g. `japanese/`, with an `index.html`.
2. Put its CSS in `css/` and its JS in `js/`, and link them with `../css/...` and `../js/...`.
3. Add an entry to `js/platforms.js` with `href: "japanese/"`.
