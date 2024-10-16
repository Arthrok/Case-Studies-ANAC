document.addEventListener("DOMContentLoaded", function() {
    // Selecionar os elementos necessários
    const tabs = document.querySelector('.md-tabs');
    const headerTitle = document.querySelector('.md-header__title');
    const headerInner = document.querySelector('.md-header__inner.md-grid');
    const search = document.querySelector('.md-header__button[for="__search"]');
    const headerOption = document.querySelector('.md-header__option');
    
    // Apagar o elemento `.md-header__title`
    if (headerTitle) {
        headerTitle.remove();
    }
    
    // Mover o elemento `.md-tabs` para dentro do `.md-header__inner.md-grid`, antes do botão de busca
    if (tabs && headerInner && search) {
        headerInner.insertBefore(tabs, search);
    }

    // Mover o elemento `headerOption` para dentro do `.md-header__inner.md-grid`, antes do botão de busca e depois das tabs
    if (headerOption && headerInner && search) {
        headerInner.insertBefore(headerOption, search);
    }
});
