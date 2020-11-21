# Exquisite Corps-y Time

Exquisite Corps-y Time is a game built off a little creative writing activity one might have played with friends at a coffee shop or bar in olden times. Originally, a paper napkin or back of recipt became manuscript; each participant took their turn to write a few lines of prose or poetry, folding the paper over to leave only the last few words of their brilliance visible to the next participant, whose task is to build off the text left to them. At the end, the paper is unfolded to reveal the entire wacky or surprisingly logical collaborative work. Call it advanced Mad Libs if you like.

This project aims to emulate the pieced together surprise of a story by allowing up to four participants to join a story, each taking turns to build off the previous author's last few words. However, in this case, the text submissions are collected and analyzed by GCP Natural Speech to locate key words for an image search, such that the story text is paired with a (pseudo) relevant image. When participants are satisfied, they can end the story and retrieve their saved story for playback as a slideshow/storybook.

The delight, absurdity and surprisingly salient combinations of the photos and series of text submissions can be as simple as humorous bonding over wordplay, while also creating an opportunity to explore notions of narrative and meaning-making.

# Setup

(All of this is specific to Mac)

First, install Xcode:
  > xcode-select --install

You'll also need Mongo. The latest installation docs are here: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

Short version, using brew:
  > brew tap mongodb/brew # Add the Mongo cask to brew
  > brew install mongodb-community@4.4

Start up Mongo
  > brew services start mongodb/brew/mongodb-community

Install required Node packages:
  > npm install

You will need to create a config.js file (via `touch config.js` in the root directory), and copy the config.example.js into it, adding your own API keys for Google Cloud Products Natural Language and Unsplash:
  > https://unsplash.com/developers
  > https://cloud.google.com/docs/authentication/api-keys

# Commands

Build for prod deployment:
  > npm run build

Compile for local dev:
  > npm run react-dev

Start the app:

In the root dir:
  > npm start
