const registeredThemes = ['dark', 'material-dark'];

export default class ThemeManager {
  currentTheme: string;

  constructor() {
    this.currentTheme = ThemeManager.fetchTheme();

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }

  mountTheme() {
    document.body.className = this.currentTheme;
  }

  toggleTheme() {
    this.setTheme(this.getNextTheme(this.currentTheme));
    this.mountTheme();
  }

  private getNextTheme(searchTheme: string): string {
    const themeIndex = registeredThemes.findIndex((theme) => theme === searchTheme);
    return registeredThemes[themeIndex + 1 >= registeredThemes.length ? 0 : themeIndex + 1];
  }

  static fetchTheme() {
    const theme = localStorage.getItem('theme');
    return theme ? theme : 'dark';
  }
}
