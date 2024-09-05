# Namaste React Episode 01

# Parcel - Type of module Bundler

- Bundling
- Dev Build
- Local Server (like http//localhost:1234)
- HMR - Hot Module Replacement - (Automatically Refreshing our page or website)
- parcel uses File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization - means automatically compress and optimizes images during build
- Minification
- Compressing
- Hashing Algorithm - generates unique files for cache busting
- Code Splitting
- Differential Bundling - Support older Versions
- Diagnostics - meaning gives beautiful error.
- Better Error Handling
- Build HTTPS also
- Tree Shaking - remove unused code

# Two types of Export/Import (Episode 4)

- Default Export/Import

  - export default ComponentName; ex:- export default Header;
  - import ComponentName from "path" ex:- import Header from "./components/Header"

- Named Export/Import
  - export const ComponentName; ex:- export const Header;
  - import {ComponentName} from "path" ex:- import {Header} from "./components/Header"

# React Hooks (Episode 5)

-Hooks are just JS Functions which is designed for specific purposes
-useState(), useEffect()

# 2 types of Routing in Web Application (Episode 6)

- Client Side Routing (which means without reloading the entire page, we will get the data i.e SPA single page applications)
- Server Side Routing (which is fetching data and reloading the entire page)

# Redux ToolKit

- install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cart Slice)
- dispatch (Action)
- Selector

# Types of Testing a react developer can do

- Unit Testing => Testing the functionality of a individual components in isolation. (Jest or Mocha)
- Integration Testing => Ensure that different components work together properly. (when multiple developers are working on a project )
- End-to-End Testing (e2e Testing) => test the application from start to finish.

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpiler
- configure Jest => command - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in our test cases
- include @babel/preset-react in our babel configuration.(babel.config.js)
- install npm install -D @testing-library/jest-dom
