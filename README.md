# HartJN.github.io

---

## Site Planning:

### What is my site's primary purpose?

#### What it is:

- Create Blog posts for Dev Academy Foundations.
- Provide a home for assignments and reflections.
- Practice HTML, CSS and JS.
- A place to demonstrate my skills in problem-solving.
- A place to document my growth while attending Dev Academy.

#### What its not:

- A fancy looking, perfectly put together interface.

### Who is my audience? (is it kids, adults, academics)?

- Facilitators & Staff members of Enspiral Dev Academy.
- Students of Enspiral Dev Academy.
- People interested in Web Development.

### How will I build my site to support their user experience?

- I will follow HTML & CSS best practices.
- I will design my site with accessability in mind by using labels, aria attributes, High contrast ratios, ect.
- I will keep my posts user friendly and related to the briefs given in each sprint.

---

## File Structure

```
HartJN.github.io
.
├── blog
│   ├── blog-pages-go-here.html
│   └── imgs
│       └── images-go-here.webp
│      
│ 
├── index.html
├── LICENSE
├── read-me-imgs
│   └── read-me-images-go-here.png
│  
├── README.md
└── styles
    ├── main.css
    └── queries.css

```

---

## Wireframe

![Home page wireframe](/read-me-imgs/home-page-wireframe.png)

![Blog page wireframe](/read-me-imgs/blog-page-wireframe.png)

---

## TYPOGRAPHY SYSTEM

```
Font-family:

Roboto Mono, monospace

Font weights:

Default: 400

Medium - 500

Bold - 700
```

---

## COLOURS

Color theme is inspired by Githubs Dark-mode.

```
- Accent: #69afff

- Accent-Shade: #4f95e6

- Background: #0d1117

- Background-Alt: #161b22

- Text: #c9d1d9

- Text-Sub: #b7b8c5

- Text-Alt: #7a7a85
```

---

## CSS Class-Naming convention

I will be using a modified version of BEM.

### BEM follows the following standards:

```
Naming rule:

  block-name__element-name--mod-name--mod-value

- names are written in lowercase
- words are separated by a hyphen
- block name defines the namespace for its elements & modifiers
- element name separated from block name by double underscores
- modifier name separated from block / element name with single underscore
- modifier value separated from modifier name by single underscore
- If the modifier is a Boolean, the value is not shown in the name.

```

```
Block:

- a functionally independent page component that can be reused.
- block name describes its purpose:
  - This -> What is it? - menu or button ✅
  - Not this -> What does it look like? - red or big ❌
- No CSS ID selectors or CSS tags
- Block should not influence its environment. It should not set the margin or positioning for the block. This is to ensure reusability.

```

```
Element:

- a composite part of a block that can't be used separately.
- The element name describes its purpose:
  - This -> What is this? - item, text ✅
  - Not this -> What type or What it looks like - red, big ❌

Structure of an elements full name
  block-name__element-name
- the element name is separated from the block name with double underscores.

```

You can find out more about BEM here: [BEM quick start](https://en.bem.info/methodology/quick-start/#introduction)

# [TO-DO]

- Add event delegation to mobile nav
- Add Projects Page
- Create global CSS classes to reduce repetition.
- Add Themes
- Add Simple JavaScript functions; Lazy Loading, smooth scrolling, pagination on blog section.

# [Known Issues]

- Clicking on space around mobile menu links will disable contacts class.

# changelog

## [1.0.0] - 09-09-22

### Added

- Mobile Nav
