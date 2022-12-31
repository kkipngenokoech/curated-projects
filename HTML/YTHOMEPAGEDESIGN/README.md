# HOME PAGE DESIGN

## CSS

setting the

```css
* {
    padding: 0%;
    margin: 0%;
}
```

this sets the page to start from the far top left end.

```css
background-image: url();
background-position: center;
background-size: cover;
```

the above properties sets the background image of a website, center-positions it and the size property then ensures that the background image fits/covers the frame/size of the screen.

```css
display: flex;
```

this property will display all child-divs in a flex position...that is side-by-side

```css
cursor: pointer;
```

this property changes the type of cursor to a pointer cursor when one hovers over the div class being assigned this property.

## to display images links, texts side by side

you write a overall div for the child element divs i.e

```html
<div class = "parent">
    <div class = "first child">

    </div>
    <div class = "second child">

    </div>
    <div class = "third child">

    </div>
</div>
```

then for the css, you write the following:

for the parent div you:

```css
.parent{
    flex: 1;
}
```

then for the child divs you:

```css
.child {
    display: inline-block
}
```

this will display all the child divs in one line.

## Border Radius

this property makes the borders of our div round, and so the higher the radius the more round the corners of our divs are.
