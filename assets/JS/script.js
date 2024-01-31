window.onload = function() {
  var whiteBackground = document.createElement('div');
  whiteBackground.style.position = 'fixed';
  whiteBackground.style.top = '0';
  whiteBackground.style.left = '0';
  whiteBackground.style.width = '100%';
  whiteBackground.style.height = '100%';
  whiteBackground.style.backgroundColor = 'white';
  whiteBackground.style.zIndex = '9999';
  whiteBackground.style.display = 'flex';
  whiteBackground.style.justifyContent = 'center';
  whiteBackground.style.alignItems = 'center';
  document.body.appendChild(whiteBackground);

  var contentContainer = document.createElement('div');
  contentContainer.style.textAlign = 'center';
  contentContainer.style.marginTop = '20px';
  whiteBackground.appendChild(contentContainer);

  var img = document.createElement('img');
  img.src = './assets/IMG/bitcoin.png';
  img.style.width = '128px';
  img.style.height = '128px';
  img.style.animation = 'zoomInOut 8s infinite';
  contentContainer.appendChild(img);

  var text = document.createElement('div');
  text.innerHTML = 'Loading...';
  text.style.color = 'gray';
  text.style.marginTop = '10px';
  contentContainer.appendChild(text);

  var style = document.createElement('style');
  style.innerHTML = `
    @keyframes zoomInOut {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  setTimeout(function() {
    document.body.removeChild(whiteBackground);
  }, 8000);
}
