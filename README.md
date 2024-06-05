<img src="assets/images/btm-logo.webp" width='100px'>

# BEYOND THE MOOD

This Positive Affirmation and Color Wheel app is designed to uplift your mood and bring positivity into your day. By seamlessly integrating the ZenQuotes API, it fetches and displays inspiring affirmations to motivate and encourage you. The app also features an interactive color wheel, allowing you to select colors that resonate with your current mood. The chosen color updates the background, creating a personalized and visually appealing experience. Additionally, with a built-in screenshot functionality powered by the `html2canvas` library, you can capture and save these moments of positivity, making it easy to revisit or share them with others. Whether you're looking for daily motivation or a splash of color to brighten your day, this app combines the power of positive words and color therapy into a simple, user-friendly tool.

<img src="a" alt="appearance" width="500px" margin=" 0 auto"/>

## Table of Content

<details>
  <summary>1. <a href="#user-stories">User Stories</a></summary>
  <ul>
    <li><a href="#user-view">User View</a></li>
  </ul>
</details>

<details>
  <summary>2. <a href="#visual-design">Visual Design</a></summary>
  <ul>
    <li><a href="#flow-chart">Flow Chart</a></li>
    <li><a href="#wireframes">Wireframes</a></li>
    <li><a href="#font">Font</a></li>
    <li><a href="#icons">Icons</a></li>
    <li><a href="#colours">Colours</a></li>
    <li><a href="#logo">Logo</a></li>
  </ul>
</details>

<details>
  <summary>3. <a href="#features">Features</a></summary>
  <ul>
    <li><a href="#home-page">Home Page</a></li>
    <li><a href="#colour-wheel-area">Colour Wheel Area</a></li>
    <li><a href="#affirmation-section">Affirmation Section</a></li>
    <li><a href="#screenshot-button">Screenshot Button</a></li>
  </ul>
</details>

<details>
  <summary>4. <a href="#technologies">Technologies</a></summary>
  <ul>
    <li><a href="#technology-1">Technology 1</a></li>
    <li><a href="#technology-2">Technology 2</a></li>
    <!-- Add more technologies as needed -->
  </ul>
</details>

<details>
  <summary>5. <a href="#testing">Testing</a></summary>
  <ul>
    <li><a href="#unit-tests">Unit Tests</a></li>
    <li><a href="#integration-tests">Integration Tests</a></li>
    <!-- Add more testing items as needed -->
  </ul>
</details>

<details>
  <summary>6. <a href="#deployment">Deployment</a></summary>
  <ul>
    <li><a href="#deployment-steps">Deployment Steps</a></li>
    <li><a href="#environment-setup">Environment Setup</a></li>
    <!-- Add more deployment items as needed -->
  </ul>
</details>

<details>
  <summary>7. <a href="#credits">Credits</a></summary>
  <ul>
    <li><a href="#contributor-1">Contributor 1</a></li>
    <li><a href="#contributor-2">Contributor 2</a></li>
    <!-- Add more credits as needed -->
  </ul>
</details>

<details>
  <summary>8. <a href="#author">Author</a></summary>
  <ul>
    <li><a href="#author-name">Author Name</a></li>
    <li><a href="#author-bio">Author Bio</a></li>
    <!-- Add more author items as needed -->
  </ul>
</details>

## [User Stories](#user-stories)

### A SHORT BRIEF

Sometimes we dream to have a companion who personally uplifts our moods? Well, that idea is what my app/website is all about – a fun filled and inspiring corner of the interweb where sadness is shaken off, and happiness sought. By incorporating little-comedic touches here and there, loads of bright colors, plus a dose of positive energy, I intend to help the user smile away there clouding mood.

#### [USER VIEW](#user-view)

1.  As a person, I want to receive uplifting and galvanising colourings to help me shift my mood and attitude, so I can feel more fine and empowered during the day.

2.  As a consumer struggling with anxiety or depression, I need to get admission to a secure and supportive website wherein I can discover consolation and reassurance, so I can sense much less isolated.

3.  As a user seeking out a every day select-me-up, I want to discover a curated series of amusing and uplifting content material, along with wonderful affirmations so I can begin my day on a high word and experience extra energised and influenced.

## [Visual Design](#visual-design)

#### [FLOW CHART](#flow-chart)

This is a simple flow chart that outlines the orientation of the site and what way the user will navigate from section to section.

<img src="assets/images/positive affirmation colour wheel  flow chat.png" alt="Flow chart" width="500px"/>

#### [WIREFRAMES]()

#### [FONT](#font)

I decided on the font Nunito for its mild, rounded corners, which I believe will create a experience of warmth and approachability upon arrival. By choosing a font with a softer side, I purpose to bring a sense of comfort and ease, making users feel extra comfortable as they navigate the website.

[Google Fonts - Nunito](https://fonts.google.com/specimen/Nunito?preview.text=Beyong&query=Nunito)

<img src="assets/images/Nunito-Font-Family.jpg" alt="Website Font" width="500px"/>

#### [ICONS](#icons)

The icons I used are from the [Fontawesome](https://fontawesome.com/) Icon library using the <<i>i</i>> tag. They are utalised in the footer.

- X / Twitter
- Instagram
- TikTok

<img src="assets/images/social-links.png" alt="Site links" width="500px"/>

#### [COLOURS](#colours)

I utilised the colouration palette generator [coolors](https://coolors.co) to create a harmonious colour scheme for the site. I aimed to create a welcoming surroundings via restricting the palette to a few key colours, warding off overwhelming visual stimuli. To attain the deeper blue tone <code>#2A495F</code>, I integrated the usage of a transparent <code>rgba(3, 3, 3, 0.2)</code> to obtain the desired impact.

<img src="assets/images/new-btm-colours.png" alt="Website colours" width="500px"/>

#### [LOGO](#logo)

The logo was created with the help of [deep AI](https://deepai.org/machine-learning-model/text2img) image generator. I wanted the user to be greeted with a grounding picture as their first impression of of the site. The colour tones and tree give the calming grounding feeling I was looking for. My goal is to make the user have trust in the site, and I am confident that the logo will set that tone.

<img src="assets/images/btm-logo.webp" width='200px'>

## [Features](#features)

### Existing Features

#### [HOME PAGE](#home-page)

On the landing page I decided to greet the user with an upbeat message that explains what the app/ site will offer. I hope for the user to be feeling a little bit more positive and intrigued before they navigate to the application part of the site.

<img src="assets/images/home-page.png" alt="landing page" width="500px"/>

<br>

When they hover over the 'Lets Get Started' button it has an effect of lighting up. This is to give the impression of lighting the way for the user to follow. The navigation for the button is controlled by <code>addEventListener('click' function {})</code>

<img src="assets/images/lgs-button.png" alt="Button to navigate to mood page" width="300px"/>

<br>

#### [COLOUR WHEEL AREA](#colour-wheel-area)

This is the colour wheel area of the <code>mood.html</code> page where the user is greeted with a small message asking them what mood is affecting their day.

<table style="width:100%; table-layout: fixed;">
  <tr>
    <th style="width: 35%;">Image</th>
    <th style="width: 15%;">Feature</th>
    <th style="width: 50%;">Info</th>
  </tr>
  <tr>
    <td><img src="assets/images/colour-wheel-area.png" width="250"/></td>
    <td>Wheel page</td>
    <td>The colour wheel area is set out with the mood buttons wheel section and the return message area.</td>
  </tr>
  <tr>
    <td><img src="assets/images/mood-selection.png" width="250"/></td>
    <td>Mood Selection</td>
    <td >The user picks from six different moods that can effect us all everyday. Here we use <code>fetch('coloursAndFeelings.json')</code> to get the info from the json. The mood button corresponds to the same mood in the json.</td>
  </tr>
  <tr>
    <td><img src="assets/images/colour-wheel.png" width="250"/></td>
    <td>Colour Wheel</td>
    <td>After the user selects a mood the wheel applies <code>applyColours(Object.values(coloursAndFeelings[mood]));</code> each mood has 6 different colours.</td>
  </tr>
  <tr>
    <td><img src="assets/images/message-reply.png" width="250"/></td>
    <td>Message & colour display</td>
    <td>When the spin class finishes with the <code>setTimeout(() => {})</code> function the user is presented with a message relating to the random colour. This is achieved with <code>moodColourMsg()</code> function.</td>
  </tr>
  <tr>
    <td><img src="assets/images/onwards-button.png" width="250"/></td>
    <td>Onwards Button</td>
    <td>The onwards button takes the user to the affirmation section of the mood app. This is controlled with an <code>onwardsBtn.addEventListener('click', function () {})</code>. It also gives the user a feel of lighting the way the same as the button on the home page.</td>
  </tr>
</table>

#### [AFFIRMATION SECTION](#affirmation-section)

![Generator]()

#### [SCREENSHOT BUTTON](#screenshot-button)

This section will allow the user to take a screenshot of the affirmation and colour, so they can keep it with them.

![Screenshot]()

### Features Left to Implement

- Another feature idea:

## [Technologies](#technologies)

## [Testing](#testing)

### Validator Testing

### Unfixed Bugs

## Deployment

## Credits

### Content

### Media

## Other General Project Advice
