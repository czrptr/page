class Theme {
  static #PREFERS_LIGHT = "(prefers-color-scheme: light)";
  static #KEY = "theme-override";
  static #Mode = {
    LIGHT: "light",
    DARK: "dark",
    SYSTEM: "system",
  };

  get #storage() {
    return localStorage.getItem(Theme.#KEY);
  }

  set #storage(value) {
    return localStorage.setItem(Theme.#KEY, value);
  }

  get #computed() {
    return matchMedia(Theme.#PREFERS_LIGHT).matches
      ? Theme.#Mode.LIGHT
      : Theme.#Mode.DARK;
  }

  get #resolved() {
    return this.#storage === Theme.#Mode.SYSTEM
      ? this.#computed
      : this.#storage;
  }

  set(value) {
    if (value) this.#storage = value;
    document.documentElement.setAttribute("theme", this.#resolved);
  }

  constructor() {
    // default is SYSTEM
    if (!this.#storage) this.#storage = Theme.#Mode.SYSTEM;

    // set theme on page load
    this.set();

    // set theme on media change
    window.matchMedia(Theme.#PREFERS_LIGHT).addEventListener("change", () => {
      this.set();
    });
  }
}

let theme = new Theme();
