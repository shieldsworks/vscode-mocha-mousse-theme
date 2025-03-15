# Mocha Mousse Theme for VS Code

A VS Code theme inspired by Pantone's Color of the Year 2025 - Mocha Mousse (17-1230). This theme uses browns with complementary tones to create a comfortable coding environment.

## Preview

[Add screenshots here once the theme is installed]

## Installation

### Method 1: Local Installation from GitHub

1. Clone this repository:

   ```bash
   git clone https://github.com/shieldsworks/vscode-mocha-mousse-theme.git
   cd vscode-mocha-mousse-theme
   ```

2. Install dependencies and package the theme:

   ```bash
   npm install -g @vscode/vsce
   vsce package
   ```

3. Install the generated .vsix file:

   - Using VS Code:
     - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
     - Type "Install from VSIX"
     - Select the generated `mocha-mousse-theme-0.1.1.vsix` file
   - Or using command line:
     ```bash
     code --install-extension mocha-mousse-theme-0.1.1.vsix
     ```

4. After installation:
   - Press `Cmd+K Cmd+T` (Mac) or `Ctrl+K Ctrl+T` (Windows/Linux)
   - Select "Mocha Mousse" from the theme dropdown
   - If you don't see the theme, try:
     - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
     - Type "Developer: Reload Window" and press Enter
     - Try selecting the theme again

### Method 2: Direct Use in Settings

1. Open your VS Code settings.json:

   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Preferences: Open Settings (JSON)"

2. Add these color customizations:
   ```json
   {
     "workbench.colorCustomizations": {
       "editor.background": "#2A2321",
       "editor.foreground": "#E8E1D9",
       "activityBar.background": "#231D1B",
       "sideBar.background": "#2A2321",
       "sideBar.foreground": "#D4C3B8",
       "titleBar.activeBackground": "#9E7967",
       "statusBar.background": "#9E7967",
       "statusBar.foreground": "#E8E1D9",
       "tab.activeBackground": "#3A332F",
       "tab.inactiveBackground": "#2A2321",
       "editorGroupHeader.tabsBackground": "#231D1B",
       "input.background": "#3A332F",
       "dropdown.background": "#3A332F",
       "panel.background": "#2A2321",
       "badge.background": "#8B6E5A",
       "badge.foreground": "#E8E1D9",
       "button.background": "#8B6E5A",
       "button.foreground": "#E8E1D9"
     },
     "editor.tokenColorCustomizations": {
       "comments": "#7A6B62",
       "strings": "#C4A788",
       "keywords": "#B88E6E",
       "functions": "#D4B4A1",
       "variables": "#E8D5C8",
       "types": "#CFAA8C",
       "numbers": "#BF9B7A"
     }
   }
   ```

## Features

- Color palette based on Pantone's Mocha Mousse (17-1230)
- Eye-friendly contrast for long coding sessions
- Semantic highlighting for code readability
- Support for popular programming languages
- Consistent UI elements

## Color Palette

- Primary (Mocha Mousse): #9E7967
- Background: #2A2321
- Foreground: #E8E1D9
- Comments: #7A6B62
- Strings: #C4A788
- Keywords: #B88E6E
- Functions: #D4B4A1
- Variables: #E8D5C8

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Pantone's Color of the Year 2025 - Mocha Mousse
- Created with ❤️ for the developer community
