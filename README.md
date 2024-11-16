# Open with Bricks - Chrome Extension

A simple Chrome extension that adds an "Open with Bricks" option to the right-click context menu. When clicked, it opens the current page or clicked link in a new tab with "?bricks=run" appended to the URL.

## Features

- Adds "Open with Bricks" to Chrome's right-click context menu
- Works when right-clicking anywhere on a page
- Works when right-clicking on links
- Opens the modified URL in a new tab
- Automatically appends "?bricks=run" to the URL

## Manual Installation

1. Download or clone this repository to your computer
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by clicking the toggle switch in the top right corner
4. Click the "Load unpacked" button
5. Select the folder containing the extension files

## Important Notes

- The extension folder must remain in the same location after installation. Moving or deleting it will cause the extension to stop working
- If you move the folder, you'll need to remove the extension from Chrome and load it again from the new location
- This extension is for personal use and is not published on the Chrome Web Store

## Files

- `manifest.json`: Extension configuration
- `background.js`: Extension functionality
- `icon16.png`: Menu icon
- `icon48.png`: Extension icon
- `icon128.png`: Store icon

## Updating

To update the extension after making changes to the code:

1. Go to `chrome://extensions/`
2. Find "Open with Bricks"
3. Click the refresh icon

## License

[Add your chosen license here]
