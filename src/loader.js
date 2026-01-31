(function () {
    const style = document.createElement("style");
    style.innerHTML = `
    /* FULLSCREEN LOADER */
    #loader {
        position: fixed;
        inset: 0;
        background: #0b0b0b;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.6s ease, visibility 0.6s ease;
    }

    /* PIRAMIT */
    .layn-pyramid {
        font-size: 34px;
        opacity: 0.9;
    }

    .layn-pyramid .row {
        display: flex;
        justify-content: center;
        gap: 22px;
        margin: 10px 0;
    }

    .layn-pyramid span {
        animation: build 1.8s ease-in-out infinite;
    }

    /* Build sırası */
    .top span {
        animation-delay: 0s;
    }
    .middle span:nth-child(1) {
        animation-delay: 0.4s;
    }
    .middle span:nth-child(2) {
        animation-delay: 0.8s;
    }
    .bottom span:nth-child(1) {
        animation-delay: 1.2s;
    }
    .bottom span:nth-child(2) {
        animation-delay: 1.5s;
    }
    .bottom span:nth-child(3) {
        animation-delay: 1.8s;
    }

    @keyframes build {
        0% {
            opacity: 0;
            transform: translateY(12px);
        }
        40% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0.3;
        }
    }

    .loading-text {
        margin-top: 24px;
        font-size: 12px;
        letter-spacing: 4px;
        opacity: 0.6;
        animation: blink 2s infinite;
    }

    @keyframes blink {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }

    /* LOADER KAPANIS */
    body.loaded #loader {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }
    `;
    document.head.appendChild(style);

    const loader = document.createElement("div");
    loader.id = "loader";
    loader.innerHTML = `
        <div class="layn-pyramid loading">
            <div class="row top"><span>|</span></div>
            <div class="row middle">
                <span>/</span>
                <span>\\</span>
            </div>
            <div class="row bottom">
                <span>-</span>
                <span>-</span>
                <span>-</span>
            </div>
        </div>
        <div class="loading-text">STAY ON THE LAYN</div>
    `;

    document.documentElement.appendChild(loader);

    window.addEventListener("load", () => {
       document.body.classList.add("loaded");
       loader.remove();
    });

    setTimeout(() => {
        document.body.classList.add("loaded");
        loader.remove();
    }, 10000);
})();
