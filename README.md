# The #LifeGOALS Project

The #LifeGOALS Project is a lightweight, game-inspired web app designed to help users complete meaningful goals and unlock real-life rewards.

This project was built as a proof of concept MVP (and a Christmas give for my wife) MVP with a focus on making goal-setting feel, well, more rewarding.

---

## How It Works

1. **Add goals**
   - Users can add up to 20 active goals at a time.
   - Goals can be edited or removed before completion.

2. **Select and complete a goal**
   - Select a single goal using the checkbox.
   - Click **Mark as Completed** to confirm completion.

3. **Unlock a reward**
   - Completing a goal triggers a random reward reveal.
   - A tile flips on the board to reveal the unlocked reward.

4. **Make it happen**
   - Clicking **Make it happen →** opens the user’s email client.
   - The email is pre-filled with:
     - the completed goal
     - the unlocked reward
   - The user sends the email to request fulfillment.

5. **Track progress**
   - Completed goals are counted and persist across refreshes.
   - Completed goals can be exported as a CSV file.
   - A reset option is available for testing.

---

## Game Board

- The board contains 21 tiles.
- Tiles display placeholder icons until revealed.
- Each reward reveal is paired with a subtle animation and confirmation overlay.

---

## Exporting Completed Goals

Users can export all completed goals as a CSV file containing:
- Goal text
- Completion timestamp

This is intended for review, reflection, or record-keeping.

---

## Tech Stack

- **React** (Vite)
- **CSS** (custom, no frameworks)
- **LocalStorage** for persistence
- **mailto:** for reward fulfillment (no backend)

This MVP intentionally avoids backend services to keep the implementation simple, secure, and beginner-friendly.

---

## Deployment

The app is deployed as a static site using **Vercel**.

No API keys or sensitive data are required.

---

## Project Goals

- Build a complete web app as a first non-RStudio project
- Focus on UX, polish, and real-world interaction
- Ship a usable MVP within a short timeline

---

## Notes

This project is an MVP and a foundation for future enhancements, such as:
- Automated email fulfillment
- User accounts
- Reward customization
- Analytics and history views

---

## Author

Built with intention, curiosity, and lots of code I'll probably cringe at some point in the near future. 

Sincerely, Jelicia
