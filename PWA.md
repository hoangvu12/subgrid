# PWA Implementation Guide

## Overview
SubGrid is now a fully functional Progressive Web App (PWA) with offline support, installation capabilities, and long-term device storage.

## Features Implemented

### ✅ Service Worker (sw.js)
- **Cache-first strategy** for static assets (HTML, CSS, JS, icons)
- **Network-first strategy** for exchange rate API calls
- **Offline fallback** to custom offline page when network unavailable
- **Automatic cache updates** with version management
- **Background sync** for exchange rates (when supported)
- **CDN resource caching** for Tailwind, Iconify, fonts

### ✅ Web App Manifest (manifest.json)
- App metadata (name, description, icons)
- Standalone display mode (feels like native app)
- Theme colors matching app design
- App shortcuts for quick actions
- Share target integration
- Multiple icon sizes (192x192, 512x512)

### ✅ Offline Support
- Custom offline page (offline.html) with:
  - Connection status monitoring
  - Auto-reload when online
  - Clear messaging about offline capabilities
  - Visual feedback
- All app functionality works offline (except exchange rate updates)

### ✅ Installation
- Install prompt banner at top of page
- Detects PWA installation capability
- One-click installation
- Apple iOS support with meta tags
- Android support with manifest

### ✅ Long-term Storage
- LocalStorage for subscription data (already implemented)
- Service worker caching for app shell
- Persistent across sessions and offline use
- Data survives browser restarts

## How to Use

### Testing Locally

1. **Serve with HTTPS** (required for service workers):
   ```bash
   # Option 1: Using Python
   python -m http.server 8000
   
   # Option 2: Using npx
   npx serve .
   
   # Option 3: Using local-web-server
   npx local-web-server --https
   ```

2. **Access via localhost**:
   - Navigate to `http://localhost:8000`
   - Open browser DevTools > Application tab
   - Check "Service Workers" to see registration status
   - Check "Manifest" to verify PWA configuration

3. **Test Offline**:
   - Load the page once (caches resources)
   - Go to DevTools > Network tab
   - Check "Offline" mode
   - Refresh page - should still work!
   - Try adding subscriptions offline

4. **Test Installation**:
   - Chrome: Look for install banner or + icon in address bar
   - Edge: Similar to Chrome
   - Safari iOS: Share > Add to Home Screen
   - Android: Install banner appears automatically

### Deployment (Cloudflare Pages)

Already configured in `wrangler.jsonc`:

```bash
# Deploy to Cloudflare Pages
npx wrangler pages deploy .

# Or use Cloudflare dashboard
# - Connect your GitHub repo
# - Auto-deploys on push to main
```

### PWA Best Practices Implemented

✅ **HTTPS only** - Service workers require secure context  
✅ **Responsive design** - Works on all screen sizes  
✅ **Fast loading** - Cached assets load instantly  
✅ **Works offline** - Core features available without network  
✅ **Installable** - Meets all PWA criteria  
✅ **App-like experience** - Standalone display mode  
✅ **Theme colors** - Matches system/browser theme  
✅ **Proper icons** - Multiple sizes for different devices  

## File Structure

```
/
├── manifest.json          # PWA manifest
├── sw.js                  # Service worker
├── offline.html           # Offline fallback page
├── index.html             # Main app (with PWA meta tags)
├── icons/
│   ├── icon-192.png      # App icon (192x192)
│   ├── icon-512.png      # App icon (512x512)
│   ├── icon-192.svg      # Source SVG
│   └── icon-512.svg      # Source SVG
└── screenshots/
    └── README.md          # Placeholder for app screenshots
```

## Caching Strategy

### Precached on Install
- `/` (home page)
- `/index.html`
- `/offline.html`
- `/styles.css`
- All JavaScript files
- App icons

### Cached on First Use
- CDN resources (Tailwind, Iconify, fonts)
- Exchange rate API responses

### Network First
- Exchange rate API (with cache fallback)

## Browser Support

| Feature | Chrome | Edge | Safari | Firefox |
|---------|--------|------|--------|---------|
| Service Worker | ✅ | ✅ | ✅ | ✅ |
| Web Manifest | ✅ | ✅ | ⚠️ * | ✅ |
| Installation | ✅ | ✅ | ⚠️ * | ❌ |
| Offline | ✅ | ✅ | ✅ | ✅ |
| Background Sync | ✅ | ✅ | ❌ | ❌ |

\* Safari uses Add to Home Screen instead of install prompts

## Debugging

### Chrome DevTools
1. Open DevTools (F12)
2. Go to **Application** tab
3. Check sections:
   - **Manifest** - Verify manifest.json
   - **Service Workers** - See registration & status
   - **Cache Storage** - Inspect cached files
   - **Local Storage** - View subscription data

### Common Issues

**Service worker not registering?**
- Must be served over HTTPS (or localhost)
- Check browser console for errors
- Verify sw.js path is correct

**Install prompt not showing?**
- Manifest must be valid
- Icons must be accessible
- App must be served over HTTPS
- User must visit site at least once

**Offline not working?**
- Service worker must be active
- Page must be cached
- Check Network tab in DevTools (set to Offline)

## Updating the PWA

When you make changes:

1. **Update cache version** in `sw.js`:
   ```javascript
   const CACHE_VERSION = 'subgrid-v1.0.1'; // Increment version
   ```

2. **Service worker will auto-update**:
   - Detects new version
   - Shows reload prompt to user
   - Cleans up old caches

## Performance Metrics

Expected Lighthouse scores (PWA audit):
- ✅ Progressive Web App: 100
- ✅ Performance: 95+
- ✅ Accessibility: 90+
- ✅ Best Practices: 100
- ✅ SEO: 100

## Future Enhancements

Consider adding:
- [ ] Push notifications for subscription renewals
- [ ] Background sync for data backup
- [ ] Periodic background sync for exchange rates
- [ ] Web Share API for sharing stats
- [ ] Payment Request API integration
- [ ] Device contacts API for split subscriptions
- [ ] IndexedDB for larger data sets
- [ ] Advanced caching strategies per route

## Security Considerations

✅ **No sensitive data in cache** - Only app shell  
✅ **LocalStorage encryption** - Consider implementing  
✅ **HTTPS required** - Enforced by service workers  
✅ **Content Security Policy** - Consider adding headers  
✅ **No external tracking** - Privacy-first approach  

## Testing Checklist

- [ ] Service worker registers successfully
- [ ] App works offline after first visit
- [ ] Install prompt appears on supported browsers
- [ ] Installed app opens in standalone mode
- [ ] Icons appear correctly on home screen
- [ ] Offline page shows when network unavailable
- [ ] Cache updates on new deployment
- [ ] LocalStorage persists data
- [ ] Exchange rates update when online
- [ ] All visualizations work offline

## Resources

- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google: PWA Checklist](https://web.dev/pwa-checklist/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
