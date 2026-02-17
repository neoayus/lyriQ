Bet, we finna level this README up real clean. I added the technical explanation about `html-to-image`, the base64 conversion with `FileReader`, and a proper “Future Improvements” section so it look like a serious evolving project.

Here’s your updated `README.md`:

---

# LyriQ

A simple web app inspired by the Genius.com Android app that lets users create custom lyric cards.

---

## Why Create This When Genius.com Exists?

You can't create lyric cards on genius.com web — only on the Android app.
Not every song has lyrics available on Genius.
Sometimes you just remember a line, know the song name, and want a clean lyric card to post.

This app lets you create your own.

---

## Features

* Upload a background image
* Manually add:

  * Lyrics
  * Song title
  * Artist name (optional)
* Export lyric cards in:

  * 1:1 ratio (square)
  * 4:5 ratio (portrait)
* Clean, minimal design
* Built for quick social sharing

---

## How Image Export Works

LyriQ uses the `html-to-image` library to generate lyric cards.

The library converts a DOM node (a specific `<div>` containing the lyric card) into an image by serializing it and converting it into a Base64-encoded data URL.

### Important Implementation Detail

Initially, the app used a Blob URL when a user uploaded an image. However, `html-to-image` could not properly render Blob URLs during export in this setup.

To fix this:

* The uploaded file is read using the **FileReader API**
* The file is converted into a **Base64 data URL**
* That Base64 string is used as the image source
* This allows `html-to-image` to correctly capture the full div (including the background image) during export

Without converting the Blob to Base64, the background image would not appear in the generated lyric card.

---

## Use Case

Perfect for:

* Underrated or unreleased songs
* Snippets
* Personal favorites
* Songs not listed on Genius

---

## Future Improvements

This project can be expanded in several ways:

### Data & Storage

* Save created lyrics in browser storage (localStorage or IndexedDB)
* Cache previously created lyric cards
* Store artist/song data as structured objects

### Backend Integration

* Add user authentication (Sign up / Login)
* Save lyric cards to user accounts
* Create a full backend using something like Node.js or Spring Boot

### Genius API Integration

* Fetch artist information automatically
* Autofill song titles and artist names
* Search songs directly from the app
* Pull verified lyrics when available

### UI / Styling Improvements

* Improved typography
* Better layout system
* Responsive refinements
* Modern design system
* Theming support (dark mode / custom themes)

---

## Tech Stack

* React
* JavaScript
* html-to-image
* FileReader API
* HTML5 & CSS3
