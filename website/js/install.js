// Install page: platform tabs and copy buttons for command blocks.
const tabs = [...document.querySelectorAll('.install-tab')];

function selectTab(tab) {
    for (const t of tabs) {
        const selected = t === tab;
        t.setAttribute('aria-selected', selected);
        t.tabIndex = selected ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
    }
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
        selectTab(next);
        next.focus();
    });
});
selectTab(tabs[0]);

for (const block of document.querySelectorAll('.code-block')) {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(block.querySelector('code').textContent);
            btn.textContent = 'Copied';
        } catch (_) {
            btn.textContent = 'Failed';
        }
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });
    block.appendChild(btn);
}
