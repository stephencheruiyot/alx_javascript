# JVASCRIPT NETWORK TASKS
## Install dependencies:
npm install --save-dev gulp browserify vinyl-source-stream babelify watchify uglifyjs streamqueue del run-sequence
npm install --save-dev gulp-concat gulp-uglify browserify vinyl-source-stream babelify watchify
```
### 2. Create a Gulpfile and add the following code to it (or copy from below):
```javascript=
var gulp = require('gulp'); // Require Gulp