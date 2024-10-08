# Trim your link :scissors::scissors::scissors:

## Index 📝

- [Description](#description-)
- [Installation](#installation-)
- [Prerequisites](#prerequisites-)
- [Project Installation](#project-installation-)
- [Use](#use-)
- [Project Structure](#project-structure-)
- [Technologies](#technologies-)
- [Contribution](#contribution-)
- [Project Conventions](#project-conventions-)
- [Developers](#developers-)
- [Screenshots](#screenshots-)

<br>

## Description 💡
This project implements a URL shortener service with user authentication and management features. The application allows users to shorten URLs and provides additional functionality for registered users to view and manage their shortened URLs.

<br>

## Installation 💾
<br>

### Prerequisites

- Visual Studio Code, Git Bash, Vite, Node.js (14 or superior), npm (version 6 or superior), React, TailwindCSS 
<br>

### Project Installation

1. **Fork our frontend repository**

   Open the repository [TrunYourLink](https://github.com/Carlassanchez24/Trimyourlink.git) and click the "Fork" button located in the upper right corner of the page. It creates a copy of our repository in your own Github account.


2. **Clone your forked repository**

   Open a Git Bash terminal and clone your forked repository. You can chose a new name for your project:

```bash
# Clone this repository 
git clone https://github.com/your-github-profile/your-project-name.git
```

3. **In VSCode, enter the project's directory you've just cloned**

```bash
  cd your-project-name
```

4. **Install the dependencies:
```bash
  npm i
  npm run dev
```

4. Go to our backend repository [TrumYourLink](https://github.com/Carlassanchez24/Trimyourlink.git) and follow its README's instructions:
<br>

## Use ⌨️

In order to visualize the project:

1. Run the development server:
   ```bash
   npm install 
   npm run dev
   ```
2. Open the local host in your browser to view the application.

<br>

## Project Structure 📐

```plaintext
/
├── public
├── src
│   ├── components/
│   │   ├── ui
│   │         ├── 
│   │         └── 
│   ├── config
│   ├── hooks
│   ├── layout
│   ├── pages
│   ├── router
│   ├── services
│   ├── utils
│   ├── index.css
│   └── main.jsx
│   └── setupTests.js
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

```

- **public/:** Contains the project's static resources such as images, icons, and fonts.
- **src/:** Contains the source files of the application.
  - **_components/:_** Contains React's reusable components.
    -  **_ui/:_** Contains the components imported from the shadcn library.  
  - **layout:** Folder containing the paths to the application's dynamic pages.
  - **_pages:_** Contains all the pages that make up the different views of the app.
  - **_router:_** Contains the file index.jsx with the application's routing logic.
  - **_services:_** Contains the file useApi.jsx with the API call reused in all sections of the application.

<br>

## Technologies 🔬

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS/CSS3)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn // ui](https://ui.shadcn.com/)

<br>

## Contribution 💻

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit.
4. Push your branch to your fork: `git push origin feature-name`.
5. Open a pull request.

<br>

## Project Conventions

Use of GitFlow.

We work from and to the dev branch.

CSS styles with Tailwind CSS.

Use of [shadcn]() library for certain components.

Naming of directories and files following the scheme below:

```bash
 components
    iamAComponent 📂
        IamAComponent.jsx
```
<br>

## Developer 👩‍💻


<p> <a href="https://github.com/Carlassanchez24">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Carla Sánchez**</a></p>
    











