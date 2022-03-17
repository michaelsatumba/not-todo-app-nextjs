<!-- # Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. -->

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<!-- **Note: Delete this note and update the table of contents based on what sections you keep.** -->

## Overview

### The challenge

Users should be able to:

- Add items to list.
- Delete items to list.
- Cross-Off item on list.
- Change to dark mode.

### Screenshot

![]()

<!-- Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above. -->

<!-- **Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.** -->

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- Live Site URL: [Live Site]()

## My process

TSX, then Tailwind, then JS logic.

### Built with

- Next.js
- Tailwind 

### What I learned

I learned how to use React Hooks such as useState and useEffect.

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge. -->

<!-- To see how you can add code snippets, see below: -->

```html
<div className="h-56 w-screen relative">
				<Image
					src={image}
					alt="background-dark"
					objectFit="cover"
					layout="fill"
				/>
			</div>

```

```css

```

```js
	const hello = (props) => {
		// alert('Hello');
		if (image == '/bg-mobile-dark.jpg') {
			setImage('/bg-mobile-light.jpg');
		} else {
			setImage('/bg-mobile-dark.jpg');
		}

		if (icon == '/icon-sun.svg') {
			setIcon('/icon-moon.svg');
		} else {
			setIcon('/icon-sun.svg');
		}

		if (bgColor == 'bg-blue-900') {
			props.setBgColor('bg-white');
		} else {
			props.setBgColor('bg-blue-900');
		}
	};
```

<!-- If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more. -->

<!-- **Note: Delete this note and the content within this section and replace with your own learnings.** -->

### Continued development

<!-- Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect. -->

I still need to implement the cross-off per item logic and dark mode.

<!-- **Note: Delete this note and the content within this section and replace with your own plans for continued development.** -->

### Useful resources

- [React](https://reactjs.org/docs/getting-started.html) - This helped me for understanding react hooks.
<!-- - [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.** -->

## Author

- Website - [Michael Satumba](https://mkeport.vercel.app/)
<!-- - Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername) -->

<!-- **Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.** -->

## Acknowledgments

<!-- This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit. -->

Thank you for Erik and Pizza for helping me with this project.

<!-- **Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.** -->
