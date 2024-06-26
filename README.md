<img src="assets/images/btm-logo.webp" width='100px'>

# BEYOND THE MOOD

This Positive Affirmation and Colour Wheel app is designed to uplift your mood and bring positivity into your day. By seamlessly integrating the API Ninjas, it fetches and displays inspiring affirmations to motivate and encourage you. The app also features an interactive colour wheel, that resonates with your current mood. The chosen colour updates the card, creating a personalised and visually appealing experience. Additionally, with a built-in screenshot functionality powered by the `html2canvas` library, you can capture and save these moments of positivity, making it easy to revisit or share them with others. Whether you're looking for daily motivation or a splash of colour to brighten your day, this app combines the power of positive words and colour therapy into a simple, user-friendly tool.

Navigate to the website: [Beyond The Mood](https://terryloc.github.io/positive-affirmation-colour-wheel/)


<img src="assets/images/readme-images/responsive-design.png" alt="appearance" width="500px" margin=" 0 auto"/>

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
    <li><a href="#affirmation--screenshot">Affirmation & Screenshot</a></li>
    <li><a href="#json-files">Json Files</a></li>
    <li><a href="#page-404">Page 404</a></li>
  </ul>
</details>

<details>
  <summary>4. <a href="#technologies">Technologies</a></summary>
</details>

<details>
  <summary>5. <a href="#testing">Testing</a></summary>
  <ul>
    <li><a href="#lighthouse-testing">Lighthouse Testing</a></li>
    <li><a href="#manual-testing">Manual Testing</a></li>
    <li><a href="#unfixed-bugs">Unfixed Bugs</a></li>
  </ul>
</details>

<details>
  <summary>6. <a href="#deployment">Deployment</a></summary>
</details>

<details>
  <summary>7. <a href="#author">Author</a></summary>
</details>

## [User Stories](#user-stories)

### A SHORT BRIEF

Sometimes we dream to have a companion who personally uplifts our mood. Well, that idea is what my app/website is all about – a fun filled and inspiring corner of the interweb where sadness is shaken off and happiness sought. By incorporating loads of bright colours, plus a dose of positive energy, I intend to help the user smile away their clouding mood.

#### [USER VIEW](#user-view)

| User Story                                                                                                                                                                                             | Acceptance Criteria                                                                                                                   | Scenario         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| As a person, I want to receive uplifting and galvanising colourings to help me shift my mood and attitude, so I can feel fine and empowered during the day.                                            | The user can select a mood from the six options available and receive a colour and affirmation that resonates with their chosen mood. | Passed           |
| As a consumer struggling with anxiety or depression, I need to get admission to a secure and supportive website wherein I can discover consolation and reassurance, so I can sense much less isolated. | The user can access the site and receive positive affirmations that help them feel supported and less alone.                          | Working Progress |
| As a user I am seeking out an every day series of amusing and uplifting content material, along with wonderful colours so I can begin my day on a high note.                                           | The user can visit the site daily to receive a new affirmation and colour that uplifts their mood and energizes them for the day.     | Passed           |

## [Visual Design](#visual-design)

#### [FLOW CHART](#flow-chart)

This is a simple flow chart that outlines the orientation of the site and what way the user will navigate from section to section.

<img src="assets/images/readme-images/flow-chat.png" alt="Flow chart" width="500px"/>

#### [WIREFRAMES](#wireframes)

|                                           Desktop                                            |    Pages    |                                           Mobile                                            |
| :------------------------------------------------------------------------------------------: | :---------: | :-----------------------------------------------------------------------------------------: |
|    <img src="assets/images/wireframes/home-desktop.jpg" alt="appearance" width="300px"/>     |   Landing   |    <img src="assets/images/wireframes/home-mobile.jpg" alt="appearance" width="200px"/>     |
|    <img src="assets/images/wireframes/mood-desktop.jpg" alt="appearance" width="300px"/>     |    Mood     |    <img src="assets/images/wireframes/mood-mobile.jpg" alt="appearance" width="200px"/>     |
| <img src="assets/images/wireframes/affirmation-desktop.jpg" alt="appearance" width="300px"/> | Affirmation | <img src="assets/images/wireframes/affirmation-mobile.jpg" alt="appearance" width="200px"/> |

#### [FONT](#font)

I decided on the font Nunito for its mild, rounded corners, which I believe will create a experience of warmth and approachability upon arrival. By choosing a font with a softer side, I propose to bring a sense of comfort and ease, making users feel extra comfortable as they navigate the website.

[Google Fonts - Nunito](https://fonts.google.com/specimen/Nunito?preview.text=Beyong&query=Nunito)

<img src="assets/images/readme-images/nunito-font-family.jpg" alt="Website Font" width="500px"/>

#### [ICONS](#icons)

The icons I used are from the [Fontawesome](https://fontawesome.com/) Icon library using the <<i>i</i>> tag. They are utilized in the footer.

- X / Twitter
- Instagram
- TikTok

<img src="assets/images/readme-images/social-links.png" alt="Site links" width="500px"/>

#### [COLOURS](#colours)

I utilized the colouration palette generator [coolors](https://coolors.co) to create a harmonious colour scheme for the site. I aimed to create a welcoming surroundings via restricting the palette to a few key colours, warding off overwhelming visual stimuli. To attain the deeper blue tone <code>#2A495F</code>, I integrated the usage of a transparent <code>rgba(3, 3, 3, 0.2)</code> to obtain the desired impact.

<img src="assets/images/readme-images/new-btm-colours.png" alt="Website colours" width="500px"/>

#### [LOGO](#logo)

The logo was created with the help of [deep AI](https://deepai.org/machine-learning-model/text2img) image generator. I wanted the user to be greeted with a grounding picture as their first impression of the site. The colour tones and tree give the calming grounding feeling I was looking for. My goal is to make the user have trust in the site and I am confident that the logo will set that tone.

<img src="assets/images/btm-logo.webp" width='200px'>

## [Features](#features)

### Existing Features

#### [HOME PAGE](#home-page)

On the landing page I decided to greet the user with an upbeat message that explains what the app/ site will offer. I hope for the user to be feeling a little bit more positive and intrigued before they navigate to the application part of the site.

<img src="assets/images/readme-images/home-page.png" alt="landing page" width="500px"/>

<br>

When they hover over the 'Lets Get Started' button it has an effect of lighting up. This is to give the impression of lighting the way for the user to follow. The navigation for the button is controlled by <code>addEventListener('click' function {})</code>

<img src="assets/images/readme-images/lgs-button.png" alt="Button to navigate to mood page" width="300px"/>

<br>

#### [COLOUR WHEEL AREA](#colour-wheel-area)

This is the colour wheel area of the <code>mood.html</code> page where the user is greeted with a small message asking them what mood is affecting their day.

<table "width=100%; table-layout: fixed;">
  <tr>
    <th style="width: 30%;">Image</th>
    <th style="width: 15%;">Feature</th>
    <th style="width: 55%;">Info</th>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/colour-wheel-area.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Wheel page</td>
    <td>The colour wheel area is set out with the mood buttons wheel section and the return message area.</td>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/mood-selection.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Mood Selection</td>
    <td>The user picks from six different moods that can affect us all every day. Here we use <code>fetch('coloursAndFeelings.json')</code> to get the info from the JSON. The mood button corresponds to the same mood in the JSON.</td>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/colour-wheel.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Colour Wheel</td>
    <td>After the user selects a mood, the wheel applies <code>applyColours(Object.values(coloursAndFeelings[mood]));</code> Each mood has 6 different colours.</td>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/message-reply.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Message & colour display</td>
    <td>When the spin class finishes with the <code>setTimeout(() => {})</code> function, the user is presented with a message relating to the random colour. This is achieved with the <code>moodColourMsg()</code> function.</td>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/onwards-button.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Onwards Button</td>
    <td>The onwards button takes the user to the affirmation section of the mood app. This is controlled with an <code>onwardsBtn.addEventListener('click', function () {})</code>. It also gives the user a feel of lighting the way, the same as the button on the home page.</td>
  </tr>
</table>

#### [AFFIRMATION & SCREENSHOT](#affirmation--screenshot)

This section is accessed through the Onwards Button where the mood container is replaced by container2. This is archived with

      mood.style.display = 'none';
      affirmation.style.display = 'flex';

within an <code>addEventListener('click', function () {});</code>.

This section also allows the user to take a screenshot of the affirmation and colour, so they can keep it with them.

<table "width=100%; table-layout: fixed;">
  <tr>
    <th style="width: 30%;">Image</th>
    <th style="width: 15%;">Feature</th>
    <th style="width: 55%;">Info</th>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/affirmaion-section.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Affirmation greeting</td>
    <td>The user is encouraged to click the button we use the <code>fetchAffirmation()</code> function to generate the card.</td>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/screenshot-section.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Final card preview</td>
    <td>The user then receives their card with the quote, colour and positive word. They click the screenshot button which saves their card to keep with them. This is achieved with the built in function <code> html2canvas</code>.</td>
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/thank-you-message.png" style="width: 100%; max-width: 250px;"/></td>
    <td>Thank you message</td>
    <td>After the user has taken the screenshot they are thanked for using the app. This is controlled with <code>affirmationBtn.addEventListener('click', function () {});</code> function. From there the user can return to the home screen.</td>
    
  </tr>
  <tr>
    <td><img src="assets/images/readme-images/mood-card.jpg" style="width: 100%; max-width: 250px;"/></td>
    <td>Mood card screenshot</td>
    <td>This is an example of the screenshot card that is saved to the users download folder in either their mobile device or computer.</td>
  </tr>
</table>

#### [Json Files](#json-files)

The json folder contains two files. One that is used to generate the positive words and colours for the site depending on the mood the user selects. Two is the backup file that is used if the API fails to fetch the affirmations.

  - <code>coloursAndFeelings.json</code> - This file contains the colours and positive words that are used to create the colour wheel and then return the random colour and corresponding word relating to the mood selected. They are then returned in a message below the wheel. After the user moves on to the affirmation section the colour and word are displayed on the card with the affirmation/quote.
  
  - <code>backupQuotes.json</code> - This file contains the backup affirmations/quotes that are used if the API fails to fetch the affirmations. This is a random selection of quotes that are displayed on the card with the colour and positive word.

#### [PAGE 404](#page-404)

On the 404 page the user is greeted with a message that the page they are looking for is not available. The user is encouraged to return to the home page.

<img src="assets/images/readme-images/404-page.png" alt="404 page" width="500px"/>

<br>

### Other Features that I would like to Implement:

- <b>Idea 1:</b> I would like to add a feature that allows the user to share their card on social media. This would be a great way to spread the positivity and share the app with others.
  <br><br>
- <b>Idea 2:</b> A feature that allows the user to save their favourite cards to a gallery. This would be a great way for the user to keep track of their favourite cards.
  <br><br>
- <b>Idea 3:</b> Allow the user to keep track of their mood and affirmations. This would be a great way for the user to see how their mood has changed over time.

## [Technologies](#technologies)

- ### Languages

  [HTML](https://www.w3schools.com/html/) - The markup language used to create the structure of the site.<br>
  [CSS](https://www.w3schools.com/css/) - The styling language I used to style the site.<br>
  [JavaScript](https://www.w3schools.com/js/) - The programming language to make the site interactive.

- ### Platforms

  [GitPod](https://www.gitpod.io/) - The platform I used to write the code and deployment.<br>
  [Github](https://github.com/) - The platform I used to store the code and deploy the site.<br>
  [VS Code](https://code.visualstudio.com/) - IDE for code editing / project development.

- ### Other Tools

  [Font Awesome](https://fontawesome.com/) - The icon library I used to add icons to the site.<br>
  [DeepAI](https://deepai.org/chat) - The image generator I used to create the logo.<br>
  [Favicon Generator](https://favicon.io) - Create favicons needed.<br>
  [Coolors](https://coolors.co/) - The colour palette generator I used to create the colour scheme.<br>
  [API Ninjas](https://api-ninjas.com/api/quotes) - The API I used to fetch the affirmations/ quotes.<br>
  [html2canvas](https://html2canvas.hertzen.com/) - The library I used to add the screenshot functionality to the site.<br>
  [bytes.dev](https://bytes.dev/?s=amiresponsive) - The site I used to check the responsiveness of the site.<br>
  [Google Fonts](https://fonts.google.com/) - The font library I used to add the font to the site.<br>
  [ChatGPT](https://chatgpt.com/) - I used chatGPT to generate the backup json file with the positive affirmations.
## [Testing](#testing)

### Validator Testing

##### HTML & CSS Validation
- [W3C HTML Validator](https://validator.w3.org/) -- No errors or warnings shown on index or mood HTML.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) -- There where no errors on either style or mood CSS.<br><br><img src="assets/images/readme-images/css-result.png"/><br><br>
### JavaScript Validation 
- [JSHint](https://jshint.com/) -- No errors. All warnings shown are in regards to available in ES6.

<B>On applying the JSHint to the JavaScript file, I realised that two of my functions where too big and I needed to break them down:</B>

#### REFACTORING OF TWO FUNCTIONS

- My Original `handleMoodClick` Function:
```javascript
function handleMoodClick(button, colourWheel) {
  fetch('assets/json/coloursAndFeelings.json')
    .then((response) => response.json())
    .then((coloursAndFeelings) => {
      const mood = button.getAttribute('data-mood');
      localStorage.setItem('mood', mood);
      const message = document.getElementById('colourChoice');
      message.innerHTML = '';
      applyColours(Object.values(coloursAndFeelings[mood]));
      colourWheel.classList.add('spin');
      setTimeout(() => {
        const colorsKeys = Object.entries(coloursAndFeelings[mood]);
        const randomEntry = colorsKeys[Math.floor(Math.random() * 6)];
        const randomColourName = randomEntry[0];
        const randomColour = randomEntry[1];
        colourWheel.classList.remove('spin');
        colourWheel.style.background = randomColour.hex;
        localStorage.setItem('colourName', randomColourName);
        localStorage.setItem('colour', randomColour.hex);
        localStorage.setItem('feeling', randomColour.feeling);
        moodColourMsg();
      }, 3000);
    });
}
```
- CHANGES MADE TO THE FUNCTION
1. **`handleMoodClick`**: Fetches the JSON data and calls `processMoodClick` with the necessary parameters.
2. **`processMoodClick`**: Processes the mood click event by setting the mood, clearing any existing message, applying colours and starting the colour wheel spin.
3. **`clearMessage`**: Clears the message element's inner HTML.
4. **`spinColourWheel`**: Adds the spin class to the colour wheel, and after 3 seconds, it stops the spin, selects a random colour, saves the selected colour, and displays the mood colour message.
5. **`getRandomColour`**: Selects a random colour from the mood colors.
6. **`saveSelectedColour`**: Saves the selected colour's name, hex value, and associated feeling to local storage.

<hr>
<br>

- My Original `fetchAffirmation` Function:
  ````javascript
  async function fetchAffirmation() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  // Get the colour and mood from local storage
  const colour = localStorage.getItem('colour');
  const feeling = localStorage.getItem('feeling');
  // Get the selected colour and mood elements from the DOM
  const selectedColour = document.getElementById('selectedColour');
  const selectedFeeling = document.getElementById('selectedFeeling');
  // Get the card and line area elements from the DOM
  const card = document.getElementById('innerCard');
  const lineArea = document.getElementById('lineArea');

  // Set the colour of the card to the random colour
  card.style.backgroundColor = colour;
  lineArea.style.backgroundColor = colour;

  // Display the selected mood and colour on the card
  selectedColour.innerHTML = `Colour Code: ${colour}`;
  selectedFeeling.innerHTML = `Positive Word: ${feeling}`;

  let result;
  // Fetch the affirmation from the API
  try {
    // Get the URL for the selected mood
    const url = getQuotesByMood(localStorage.getItem('mood'));
    const response = await fetch(url, options);

    if (!response.ok) {
      debugger;
      // If the response is not ok, throw an error with the status
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      // Parse the response into a JavaScript object and store it in the result variable
      result = await response.json();
      // Display the affirmation and author to DOM
      quote.innerHTML = result[0].quote;
      author.innerHTML = result[0].author;
    }
  } catch (error) {
    // Backup affirmations in case the API fails
    fetch('assets/json/backupQuotes.json')
      .then((response) => response.json())
      .then((backupQuotes) => {
        console.log(backupQuotes);
        // Display the affirmation and author to the console
        console.error(`Failed to fetch affirmation: ${error.message}`);
        // Backup affirmations in case the API fails
        const result =
          backupQuotes[Math.floor(Math.random() * backupQuotes.length)];
        // Display the affirmation and author to DOM
        quote.innerHTML = result.quote;
        author.innerHTML = result.author;
      });
  }

  // Change button text to 'Screenshot' & h1 text to 'Screen Shot Your Card'
  const affirmationBtn = document.getElementById('affirmationBtn');
  const cardH1 = document.getElementById('cardH1');
  affirmationBtn.innerHTML = 'Screenshot';
  cardH1.innerHTML = 'Screen Shot Your Card';

  // Add event listener to the button
  affirmationBtn.addEventListener('click', function () {
    const card = document.getElementById('card');
    html2canvas(card).then((canvas) => {
      // Convert the canvas to a data URL
      const imgData = canvas.toDataURL('image/jpg');

      // Create a link element
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'mood-card.jpg';

      // Download the image
      link.click();
    });
    // Hide the card and display the final container
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    container2.style.display = 'none';
    container3.style.display = 'flex';
  });
  }
  ````
- CHANGES MADE TO THE FUNCTION
1. **Separation of Concerns**: The main function `fetchAffirmation` now delegates specific tasks to smaller functions, each responsible for one aspect of the operation.
   - `setCardColours`: Sets the background colour of the card and line area.
   - `displaySelectedMoodAndColour`: Displays the selected mood and colour on the card.
   - `handleApiResponse`: Handles the API response and updates the DOM.
   - `fetchBackupAffirmation`: Fetches affirmation from a backup JSON file if the API call fails.
   - `updateButtonAndHeader`: Updates the button and header text.
   - `addScreenshotListener`: Adds an event listener to the screenshot button.

2. **Error Handling**: The `try...catch` block in `fetchAffirmation` handles errors gracefully, using `fetchBackupAffirmation` if the API request fails.


#### OVERALL BENEFITS OF REFACTORING

  By breaking down the original TWO BIG FUNCTIONS into smaller helper functions, I achieve more readability, maintainability, and reusable code. The refactored code is easier to understand and debug and it follows the single responsibility principle, with each function handling a specific task.

  <hr>

### [Lighthouse Testing](#lighthouse-testing)

On the lighthouse testing I received a score of close to 100% on all the pages. This was surprising as I was expecting a lower score because of the movement between containers and the use of the API. I was very happy with the results and I am confident that the site is user friendly and accessible.

| Page         | Size    | Screenshot                                                   | Notes           |
| ------------ | ------- | ------------------------------------------------------------ | --------------- |
| Home         | Mobile  | ![screenshot](assets/images/testing-images/home-mobile.png)  | No warnings     |
| Home         | Desktop | ![screenshot](assets/images/testing-images/home-desktop.png) | 100% all around |
| Mood section | Mobile  | ![screenshot](assets/images/testing-images/mood-mobile.png)  | No warnings     |
| Mood section | Desktop | ![screenshot](assets/images/testing-images/mood-desktop.png) | No warnings     |
| 404 page     | Mobile  | ![screenshot](assets/images/testing-images/404-mobile.png)   | No warnings     |
| 404 page     | Desktop | ![screenshot](assets/images/testing-images/404-desktop.png)  | 100% all around |

### [Manual Testing](#manual-testing)

  After testing the site on multiple devices and browsers, I found that the site was responsive and worked well on all devices. The site was tested on the following devices and browsers:

  - **Desktop**: Chrome, Brave, Safari
  - **Tablet**: iPad
  - **Mobile**: iPhone 12, Samsung Galaxy s10, Realme GT 2
  
  Testing was done on the following features:

| Page                | Button              | Notes                                 | Result   |
| ------------------- | ------------------- | ------------------------------------- | -------- |
| Home                | Lets Get Started    | Brings user to mood page              | Pass     |
| Mood Section        | Six different moods | Activates the wheel & colour function | All Pass |
| Mood section        | Onwards             | Navigates to Mood card                | Pass     |
| Affirmation section | Affirmation         | Call API function                     | Pass     |
| Affirmation section | Screenshot          | Downloads screenshot of card          | Pass     |
| Thank you           | Home                | Navigates to home page                | Pass     |
| 404 Page            | Home Page           | Returns user to home page             | Pass     |


### [Unfixed Bugs](#unfixed-bugs)

The only two bugs that I was unable to fix are an issue with the final screenshot and the <code>window.scrollTo</code> function.

- HERE IS AN EXAMPLE OF BUG ONE:

 | Before Screenshot                                     | After Screenshot                                   |
 | ----------------------------------------------------- | -------------------------------------------------- |
 | ![Before](assets/images/testing-images/site-card.png) | ![After](assets/images/testing-images/ss-card.jpg) |

  The issue was that the screenshot was not saving the card with the correct styling. I tried to fix this by adding the `useCORS: true` to the `html2canvas` function, but this did not work. I also tried to add the `allowTaint: true` to the function, but this also did not work.

- HERE IS BUG TWO:

  The <code>window.scrollTo</code> function was not working as expected. I tried to fix this by adding the <code>scrollTo(0, 0)</code> to the function, but this did not work. It will not scroll to the bottom of the page as expected on desktop and only work sometimes on mobile.



## [Deployment](#deployment)

This project is deployed using GitHub Pages. This section provides information on how to deploy & as a reference for future deployments.

### Accessing the Deployed Website

To access click on the link and visit [Beyond The Mood](https://terryloc.github.io/positive-affirmation-colour-wheel/).

### How to clone a repository

1. Fork the repository by clicking the "Fork" button at the top of the repository page.
2. Clone the forked repository to your local machine using the `git clone` command.
   ```
   git clone https://github.com/your-username/positive-affirmation-colour-wheel.git
   ```
3. Make any necessary changes or updates to the project.
4. Commit your changes and push them to your GitHub repository.
   ```
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
5. Navigate to the repository settings on GitHub.
6. Under the GitHub Pages section, choose the main branch as the source and save the changes.
7. Your site will be published and accessible at `https://github.com/TerryLoc/positive-affirmation-colour-wheel.git`.

### How to deploy locally

To deploy a GitHub repository to your local computer by downloading it, follow these steps:

1. Go to the GitHub repository that you want to deploy.
2. Click on the green "Code" button located on the right side of the repository.
3. In the dropdown menu, select the "Download ZIP" option.
4. Once the ZIP file is downloaded, extract its contents to a location on your local computer.
5. Open your preferred code editor and navigate to the folder where you extracted the repository.
6. You can now make changes to the code and work on the project locally.

Please note that this method will not allow you to easily sync changes between your local repository and the GitHub repository. If you want to push changes back to the GitHub repository, it is recommended to use git commands and set up a local git repository for the project.

## [Author](#author)

### Terry Loughran
- GitHub: [TerryLoc](https://github.com/TerryLoc)
- LinkedIn: [Terence (Terry) Loughran](https://www.linkedin.com/in/terryloughran/)

### A Small Wrap-up Summary

Good vibes all round! The affirmations come from API Ninjas, which provides a extensive type of nice and motivational messages to inspire clients. Affirmations are displayed in an smooth, uncluttered format that makes it clean for users to acquire uplifting content material. Quotes are randomly generated every time a person clicks the "Get Affirmation" button, ensuring a clean and unique experience with each visit. Designed to inspire users to embrace positivity.