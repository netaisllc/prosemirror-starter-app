# A Prosemirror starter app

This is a simple, minimal starter-app implementing the Prosemirror repo _prosemirror-example-setup_ with the Javacript bundler **RollUp**. This is purely a demonstration project, not a production grade implementation. Say that aloud. Once more.

It combines the conventions and **rollup.config.js** file from the _rollup-starter-app_ repo with the modules located in ther repo _prosemirror-example-setup_.

### Use

1. Clone the repo.
2. Install the dependencies.
3. Run the 'dev' script from package-json ( ```npm run dev```).
4. Inspect the app in a browser at ```localhost:5000```.

### Notes

This point of this project is merely to document how to get up and running with a minimal editor with RollUp. It is not production-worthy.

Additionally, this project is not affiliated with Prosemirror; he can change things and we will never be informed. That is how it should be, right?

If you prefer to use **Webpack** for bundling, another dev (not me) offers this repo:

- https://github.com/buzz-software/prosemirror-webpack-project

**Vue.js** lovers might be interested in this one:

- https://github.com/heyscrumpy/tiptap

Prosemirror is not another jquery plugin or drop-in widget. Instead it is thoughtful take on the problems inherent in the lame HTML attribute ```contenteditable```. In other words, read the project docs.