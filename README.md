# AI Playground — Square Mover

A minimal HTML5 canvas game: a square you move around with the arrow keys.

## Running it

No build step or dependencies are needed.

- **Quickest:** open `index.html` directly in your browser (double-click it, or `open index.html` on macOS).
- **Local server (optional):** from the project folder, run

  ```sh
  python3 -m http.server 8000
  ```

  then visit http://localhost:8000.

## Controls

| Key | Action |
| --- | --- |
| ← ↑ → ↓ | Move the square |

The square stays inside the canvas edges.

## Files

- `index.html` — page and canvas
- `game.js` — input handling, update loop and drawing
