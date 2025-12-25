// Clear All App Data Functionality

async function clearAllAppData() {
  // Show confirmation dialog with SweetAlert2
  const result = await showConfirmAlert(
    'Clear All Data?',
    `This will permanently delete:<br><br>
    <ul style="text-align: left; list-style: none; padding-left: 0;">
      <li>• All subscriptions</li>
      <li>• Settings and preferences</li>
      <li>• Currency and location data</li>
      <li>• Cached data</li>
    </ul>
    <br><strong>This action cannot be undone.</strong>`,
    'Clear All Data',
    'Cancel'
  );

  if (!result.isConfirmed) {
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
    await showSuccessAlert('Success!', 'All data cleared successfully. The page will now reload.');

    // Reload the page to reset the app
    window.location.reload();

  } catch (error) {
    console.error('Error clearing app data:', error);
    await showErrorAlert('Error', 'Failed to clear data: ' + error.message + '\n\nPlease try clearing your browser data manually.');
  }
}

// Alternative: Clear only app data, keep service worker (for PWA users who want to stay installed)
async function clearAppDataKeepPWA() {
  const result = await showConfirmAlert(
    'Clear App Data?',
    'This will delete subscriptions and settings but keep the PWA installed.',
    'Clear Data',
    'Cancel'
  );

  if (!result.isConfirmed) {
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
    await showSuccessAlert('Success!', 'App data cleared. The page will now reload.');
    window.location.reload();

  } catch (error) {
    console.error('Error clearing app data:', error);
    await showErrorAlert('Error', error.message);
  }
}

// Make functions globally accessible
window.clearAllAppData = clearAllAppData;
window.clearAppDataKeepPWA = clearAppDataKeepPWA;
