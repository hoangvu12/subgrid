// SweetAlert2 Configuration and Utilities

// Configure SweetAlert2 defaults with dark mode support
function configureSweetAlert() {
  const isDark = document.documentElement.classList.contains('dark');
  
  Swal.mixin({
    customClass: {
      popup: isDark ? 'dark-popup' : '',
      title: isDark ? 'dark-title' : '',
      htmlContainer: isDark ? 'dark-content' : ''
    },
    background: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#f1f5f9' : '#0f172a',
    confirmButtonColor: '#6366F1',
    cancelButtonColor: isDark ? '#475569' : '#94a3b8',
    showClass: {
      popup: 'animate__animated animate__fadeIn animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut animate__faster'
    }
  });
}

// Initialize on load
configureSweetAlert();

// Re-configure when theme changes
document.addEventListener('themeChanged', configureSweetAlert);

// Utility functions for common alerts
window.showSuccessAlert = function(title, text) {
  const isDark = document.documentElement.classList.contains('dark');
  return Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: 'OK',
    background: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#f1f5f9' : '#0f172a',
    confirmButtonColor: '#10B981'
  });
};

window.showErrorAlert = function(title, text) {
  const isDark = document.documentElement.classList.contains('dark');
  return Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: 'OK',
    background: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#f1f5f9' : '#0f172a',
    confirmButtonColor: '#EF4444'
  });
};

window.showConfirmAlert = function(title, text, confirmButtonText = 'Yes', cancelButtonText = 'No') {
  const isDark = document.documentElement.classList.contains('dark');
  return Swal.fire({
    title: title,
    html: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    background: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#f1f5f9' : '#0f172a',
    confirmButtonColor: '#6366F1',
    cancelButtonColor: isDark ? '#475569' : '#94a3b8',
    reverseButtons: true
  });
};

window.showInfoAlert = function(title, text) {
  const isDark = document.documentElement.classList.contains('dark');
  return Swal.fire({
    title: title,
    html: text,
    icon: 'info',
    confirmButtonText: 'OK',
    background: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#f1f5f9' : '#0f172a',
    confirmButtonColor: '#6366F1'
  });
};

window.showToast = function(message, icon = 'success') {
  const isDark = document.documentElement.classList.contains('dark');
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#f1f5f9' : '#0f172a',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  Toast.fire({
    icon: icon,
    title: message
  });
};
