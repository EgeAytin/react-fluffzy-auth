# React Fluffzy Auth

React Fluffzy Auth is a boilerplate authentication infrastructure for React applications. 

## Motivation Behind

It doesn't matter if you are a beginner or advanced React developer, you can safely implement this lightweignt authentication structure to any kind of React project for authentication and layout management.

## Context

### `router`

Router folder has Route and RouteConfig js files. 
Router.js responsible for route management that powered by 
[react-router](https://reactrouter.com/) library.
RouteConfig.js is where the magic happens. 
It is responsible for checking and validating token and navigating user to the correct page in any state of the user session. 


### `layout`

Represents the seperation between private routes layout from public routes layout.

### `utility/context`

I used [React Context API](https://reactjs.org/docs/context.html) for layout management and sharing auth state information through the app.
You can also use Redux or Mobx for state management if you have large scaling app.

### `utility/routes`

Defining routes and pages. Use route based code splitting with React.lazy loading.

### `views`

Represents pages and user interfaces.

## Author

> Ege Aytın

> ege@fluffzy.com

## License

MIT License

Copyright (c) 2021 Ege Aytın

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


![Screen Shot 2021-10-26 at 12 17 54 PM](https://user-images.githubusercontent.com/34595361/139590699-fc442e56-89e3-4a95-943b-2512b12e7626.png)


