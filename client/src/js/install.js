const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //stores event
    window.deferredPrompt = event;
    //unhides button
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const installEvent = window.deferredPrompt;
    console.log("it has been done")
    if (!installEvent) {
        return;
    }
    //show prompt
    installEvent.prompt();
    // reset prompt variable once
    window.deferredPrompt = null;
    //rehides button
    butInstall.classList.toggle('hidden', true);
    
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
     // Clears prompt
  window.deferredPrompt = null;
});
