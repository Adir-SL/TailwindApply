# TailwindApply
Implementing 'apply' function for Tailwind CSS without build, preprocessors or PostCSS.

# Getting started
Add this script to your page:
```
<script src="https://adir-sl.github.io/TailwindApply/tailwindApply.js"></script>
```

Now you just need to add some Tailwind CSS to your CSS file and/ or your style tag, just like this:

```
button {
  --apply: bg-blue-500 text-white px-5 py-2 m-4 rounded-md hover:bg-blue-600;
}
```
If you copy the style above now your HTML buttons should be blue and rounded, congrats!

# How does it work
The script takes your --apply CSS Variable and apply it to your page, that's why you can't write @apply as you would when building Tailwind CSS using PostCSS, but the upside of writing it with CSS Variable is that you can use the public CDN of the Tailwind CSS styles, just like so:
```
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<script src="https://adir-sl.github.io/TailwindApply/tailwindApply.js"></script>
```
Since it uses the public links and requires no build process, you can even use it with Codepen or any other online code editor.