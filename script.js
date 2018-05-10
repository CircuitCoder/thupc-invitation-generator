let loaded = false;

function print() {
  const name = decodeURIComponent(window.location.hash.substr(1));

  const canvas = document.getElementById('primary');
  const ctx = canvas.getContext('2d');
  const bg = new Image();
  bg.src = 'bg.png';
  bg.addEventListener('load', () => {
    ctx.drawImage(bg, 0, 0);

    ctx.textAlign = 'center';
    if(name.length === 4)
      ctx.font = '26px sans-serif';
    else ctx.font = '30px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText(name, 1156, 230, 300)

    loaded = true;
  });
}

function download() {
  if(!loaded) return false;

  const canvas = document.getElementById('primary');

  const url = canvas.toDataURL('text/png')
  const a = document.createElement('a');
  a.href = url;
  a.download = 'thupc-invitation.png';
  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
  }, 0);
}
