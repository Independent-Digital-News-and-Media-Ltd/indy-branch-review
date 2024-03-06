// visited location from Google
const cb = sessionStorage.getItem('cb');

if (cb) {
  window.location = decodeURIComponent(cb);
} else {
  if (window.opener.location.pathname === '/login') {
    window.opener.location.href = '/?loginSuccessful';
  } else {
    window.opener.location.reload(false);
  }
}

window.close();
