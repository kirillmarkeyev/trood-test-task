# ProgressBar Component
ProgressBar Input props:
1. items - data array:
[
{name: 'Sold', color: '#BD1FBE', value: 677},
{name: 'Got free', color: '#FC64FF', value: 23},
...
]
2. height - number, bar line height
3. width - number, bar line width
Total is calculated by this data (as a sum of each value), and the bar line and its legend are built basing on fraction of value to total


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
