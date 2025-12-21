// Clear All App Data Functionality

async function clearAllAppData() {
  // Show confirmation dialog
  const confirmed = confirm(
    "⚠️ Clear All Data?\n\n" +
    "This will permanently delete:\n" +
    "• All subscriptions\n" +
    "• Settings and preferences\n" +
    "• Currency and location data\n" +
    "• Cached data\n\n" +
    "This action cannot be undone.\n\n" +
    "Click OK to proceed or Cancel to keep your data."
  );

  if (!confirmed) {
    return;
  }

  try {
    console.log('Clearing all app data...');

    // 1. Clear localStorage
    localStorage.clear();
    console.log('✓ LocalStorage cleared');

    // 2. Clear sessionStorage
    sessionStorage.clear();
    console.log('✓ SessionStorage cleared');

    // 3. Clear all service worker caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => {
          console.log(`Deleting cache: ${cacheName}`);
          return caches.delete(cacheName);
        })
      );
      console.log('✓ Service worker caches cleared');
    }

    // 4. Clear IndexedDB (if any databases exist)
    if ('indexedDB' in window) {
      const databases = await indexedDB.databases();
      databases.forEach(db => {
        if (db.name) {
          indexedDB.deleteDatabase(db.name);
          console.log(`✓ Deleted IndexedDB: ${db.name}`);
        }
      });
    }

    // 5. Unregister service worker (optional - keeps PWA but clears cache)
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (let registration of registrations) {
        await registration.unregister();
        console.log('✓ Service worker unregistered');
      }
    }

    console.log('✓ All app data cleared successfully');

    // Show success message
    alert('✓ All data cleared successfully!\n\nThe page will now reload.');

    // Reload the page to reset the app
    window.location.reload();

  } catch (error) {
    console.error('Error clearing app data:', error);
    alert('❌ Error clearing data: ' + error.message + '\n\nPlease try clearing your browser data manually.');
  }
}

// Alternative: Clear only app data, keep service worker (for PWA users who want to stay installed)
async function clearAppDataKeepPWA() {
  const confirmed = confirm(
    "⚠️ Clear App Data?\n\n" +
    "This will delete subscriptions and settings but keep the PWA installed.\n\n" +
    "Click OK to proceed or Cancel to keep your data."
  );

  if (!confirmed) {
    return;
  }

  try {
    console.log('Clearing app data (keeping PWA)...');

    // Clear storage only
    localStorage.clear();
    sessionStorage.clear();

    // Clear caches except service worker registration
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }

    console.log('✓ App data cleared (PWA preserved)');
    alert('✓ App data cleared!\n\nThe page will now reload.');
    window.location.reload();

  } catch (error) {
    console.error('Error clearing app data:', error);
    alert('❌ Error: ' + error.message);
  }
}

// Make functions globally accessible
window.clearAllAppData = clearAllAppData;
window.clearAppDataKeepPWA = clearAppDataKeepPWA;
