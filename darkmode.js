const darkmodeButton = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
};

if (localStorage.getItem('darkmode') === 'active') enableDarkmode();

darkmodeButton.addEventListener('click', () => {
    localStorage.getItem('darkmode') === 'active'
        ? disableDarkmode()
        : enableDarkmode();
});
