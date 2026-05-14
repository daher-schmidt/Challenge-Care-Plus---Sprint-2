// toast.js
function showToast(msg, type = 'success') {
  let container = document.getElementById('cc-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'cc-toast-container';
    container.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
    document.body.appendChild(container);
  }
  const colors = { success: '#14B8A6', error: '#EF4444', warning: '#F59E0B', info: '#1E3A8A' };
  const toast = document.createElement('div');
  toast.style.cssText = `background:${colors[type]||colors.info};color:white;padding:14px 20px;border-radius:12px;font-weight:600;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,0.15);animation:slideIn .3s ease;max-width:300px;font-family:'Plus Jakarta Sans',sans-serif;`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// inject animation
const style = document.createElement('style');
style.textContent = `@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}`;
document.head.appendChild(style);
