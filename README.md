# Retro Football Quiz

## Table of Contents

- [Introduction](#introduction)
- [User-Stories](#user-stories)
- [Design](#design)
- [Features](#features)
- [Languages](#languages)
- [Testing](#testing)
- [Deployment](#deployment)
- [Bugs](#bugs)
- [Credits](#credits)

## Introduction

This website is designed for entertainment purposes. It consists of two different quizzes, which follow similar themes - old football shirts. The quiz has been created on one HTML page, with new features appearing as the user navigates through the site.

## User-Stories

### First-time users

- As a first-time user, I want to easily understand what the site is and offers, so I can decide if I will use it.
- As a first-time user, I want to navigate the website intuitively, so I can find what they are looking for.
- As a first-time user, I want to view the instructions, so I am aware of how to play.
- As a first-time user, I want to see what question I am on and what score I currently have, so I understand my progress.
- As a first-time user, I want to view my results, so I know my final score.
- As a first-time user, I want to be able to retake the quiz easily, so I can beat my score.
- As a first-time user, I want the site to be responsive on a variety of screen sizes so I can play anywhere.

### Returning users

- As a returning user, I want different game modes, so I can have a different experience.

### Website owner 

- As the owner, I want the website to be responsive so that users can use it on any device.
- As the owner, I want the website to be fun and interesting, so the user returns.

## Design

### Theme

The theme of the site is a homage to 1990's/2000's information services such as Ceefax and Teletext. As the content of the site refers to old football shirts, I wanted the design of the site to feel nostalgic and 'retro' for the user.  

### Font and Colours

The font chosen is SilkScreen with a back-up font of Sans-serif in case of a loading error. I wanted to font to simulate early computer system fonts, as this era links with the theme of the site. As mentioned above, the inspiration for the colour scheme was taken from services such as Ceefax and Teletext, therefore a black background was chosen with bright colours used for buttons, borders and titles.

### Images

The images for the quiz were taken from a variety of sporting websites - see credits for more details. All images have been resized before adding to the site to ensure efficient formatting.

### Wireframes

The following wireframes were produced at the start of the design process and have not been altered. These designs show the various screens I wanted to include.

#### Landing page

![Landing-Page](documentation/wireframes/landing-page.png)

#### Game choice screen

![Game-Choice-Screen](documentation/wireframes/game-choice-screen.png)

#### Quiz 1

![Quiz-1](documentation/wireframes/quiz1.png)

#### Quiz 2

![Quiz-2](documentation/wireframes/quiz2.png)

#### Results screen 

![Results](documentation/wireframes/results-screen.png)


## Features 

### Landing page title

- The title at the top of the landing page will take the user back to the begininning if they wish to restart the quiz.
- It is on display at every stage and step of the quiz for easy accessability for the user.
- Icons are used from Font Awesome to make it more appealing.

### Rules section

- On the landing page, the rules are displayed to the user, so they can make a quick decision if the site is of interest to them.
- These rules contain information on what to expect and how to proceed.
- The user must enter a username into the input field in order to continue.
- If the user tries to procedd without a username then an alert will pop up.
- To protect against any potential username crashes, usernames are limited to 20 characters.
- Once the username has passed the validation a button appears, prompting the user to the next screen.

### Game choice selection 

- In this section the user has the option to select a game type.
- One game type is considered the 'easy' mode, where they have to guess the team the shirt belongs to.
- In this section the rules of both modes are explained.
- The other game mode is considered a harder mode, where the user needs to guess the year the photo was taken.
- Once the rules have been read the user may select an option.

### Quiz screen

- This is the main part of the quiz, where the question number, user score, out of how many questions, the question and image, four answer buttons and the next question button appear.
- As the user progress through the question, navigating using the 'next question' button the question number will increment.
- If a user is successful in their answer the userscore is incremented too.
- If a user is unsuccessful then a sentence appears, informing the user of the correct answer.

### Results screen

- In this section a container displays the users final score out of however many questions there are in the dataset.
- A unique written message containing their username appears thanking the user for playing.
- An if statement was written to show different messages depending on the score the user had.
- Once a user has completed the quiz, a button is there to take the user back to the landing page.




