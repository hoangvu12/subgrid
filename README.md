# SubGrid

A simple tool to visualize your subscription costs. See where your money goes each month through an interactive treemap.

## What it does

- Track your subscriptions (Netflix, Spotify, etc.)
- View costs as a proportional grid so you can see which services eat up your budget
- Import subscriptions from bank statements (CSV)
- Export your visualization as an image
- Supports 38+ currencies
- **NEW: Progressive Web App (PWA)** - Install on your device, works offline!

## PWA Features

✨ **Install as an App** - Add to your home screen on mobile or desktop  
📴 **Works Offline** - Access your subscription data without internet  
⚡ **Fast Loading** - Cached assets load instantly  
💾 **Long-term Storage** - Your data persists on your device  
🔄 **Auto Updates** - Get the latest features automatically  

See [PWA.md](PWA.md) for detailed PWA implementation documentation.

## How to use

Serve the files with any static server:

```
npx serve .
```

or

```
python -m http.server
```

Your data stays in your browser's local storage.

## Stack

Plain HTML, CSS, and JavaScript. Uses Tailwind CSS for styling.

## License

MIT
