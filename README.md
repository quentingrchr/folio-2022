This is a [Next.js](https://nextjs.org/) start using typescript, sass and recoil 

- [🏁  Getting Started](#-getting-started)
- [🚚 Imports](#-imports)
- [📝 Templates](#-cli-templates)
- [💅 Styles](#-styles)


## 🏁  Getting Started

If you just cloned the repository don't forget to install the dependancies
```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚚 Imports

I am using aliases paths in this starter. You can add your own in the *tsconfig.json* file. 
These are the aliases already configured: 
 - @components
 - @styles
 - @public
 - @interfaces
 - @types
 - @assets
 - @data
 - @hooks
 - @recoil
 - @config
 - @context



## 📝 CLI templates

You can generate templates files for *components* and *pages* with this command: 

```bash
yarn template
```
Then type :
 - ``page`` if you need a new page
 - ``component`` if you need a new component
 
Then type the name of the file  you want to create


## 💅 Styles
This projet is using a sass compiler and css modules. 

### Theme
Your themes files are stored in the *styles/theme* folder and should be imported in the *theme.scss* file.

Each components/page style that need some theme data will need to import the theme like so: 
```sass
@import "@styles/theme.scss";
```

### Stylesheets
Styles classes are using css modules and are scoped within the component or page they're used.



 
 
