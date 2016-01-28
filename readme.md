# Introduction

A simple webpack sample

# Commands

- Use `build.sh` to generate static assets and remove unnecessary assets
- Use `start_demo.sh` to start http server to view generated assets

# Modules

Assume the root path is `/example_[x]/`

- `/page/index1.html`: page 1
- `/page/index2.html`: page 2
- `/js/entry1.js`: js module for page 1
- `/js/entry2.js`: js module for page 2
- `/js/jquery.js`: a common js module
- `/js/module.js`: a js module
- `/js/module2.js`: a js module
- `/css/style.css`: a common css module
- `/css/style2.css`: a common css module
- `/css/index1.css`: css module for page 1
- `/css/index2.css`: css module for page 2
- `/img/002.jpg`: a image

Dependencies:

- `/js/entry1.js` --> `/css/style.css`
- `/js/entry1.js` --> `/css/style2.css`
- `/js/entry1.js` --> `/css/index1.css`
- `/js/entry1.js` --> `/js/jquery.js`
- `/js/entry1.js` --> `/js/module.js`
- `/js/entry2.js` --> `/css/style.css`
- `/js/entry2.js` --> `/css/style2.css`
- `/js/entry2.js` --> `/css/index2.css`
- `/css/index2.css` --> `/img/002.jpg`
- `/js/entry2.js` --> `/js/jquery.js`
- `/js/entry2.js` --> `/js/module2.js`

# Examples

| Name      | Config                                             | Introduction                                                                                                                                                                                                                                                     |
|:----------|:---------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| example_1 | [webpack.config.js](./example_1/webpack.config.js) | Define entries including page js                                                                                                                                                                                                                                 |
| example_2 | [webpack.config.js](./example_2/webpack.config.js) | Define entries including page js, common js                                                                                                                                                                                                                      |
| example_3 | [webpack.config.js](./example_3/webpack.config.js) | Define entries including page js, common js, and use ``extract-text-webpack-plugin` to extract css to individual css files                                                                                                                                       |
| example_3 | [webpack.config.js](./example_4/webpack.config.js) | Define entries including page js, common js, page css, common css in config, and use ``extract-text-webpack-plugin` to extract css to individual css files. If you set css file as entry in `webpack.config.js`, you can't `require(css_file)` in js entry file. |

## Example 1 Test Report

When disable `webpack.optimize.UglifyJsPlugin`

```bash
$  webpack-example  ./example_1/build.sh

~/Work/tmp/webpack-example/example_1 ~/Work/tmp/webpack-example
Hash: e2e935170d9d3d3dea67
Version: webpack 1.12.12
Time: 551ms
       Asset    Size  Chunks             Chunk Names
 img/002.jpg  356 kB          [emitted]
js/entry1.js  281 kB       0  [emitted]  entry1
js/entry2.js  281 kB       1  [emitted]  entry2
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {0} {1} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_1/build.sh

~/Work/tmp/webpack-example/example_1 ~/Work/tmp/webpack-example
Hash: e2e935170d9d3d3dea67
Version: webpack 1.12.12
Time: 509ms
       Asset    Size  Chunks             Chunk Names
 img/002.jpg  356 kB          [emitted]
js/entry1.js  281 kB       0  [emitted]  entry1
js/entry2.js  281 kB       1  [emitted]  entry2
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {0} {1} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_1/build.sh

~/Work/tmp/webpack-example/example_1 ~/Work/tmp/webpack-example
Hash: e2e935170d9d3d3dea67
Version: webpack 1.12.12
Time: 534ms
       Asset    Size  Chunks             Chunk Names
 img/002.jpg  356 kB          [emitted]
js/entry1.js  281 kB       0  [emitted]  entry1
js/entry2.js  281 kB       1  [emitted]  entry2
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {0} {1} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example
```

When enable `webpack.optimize.UglifyJsPlugin`

```Bash
$  webpack-example  ./example_1/build.sh

~/Work/tmp/webpack-example/example_1 ~/Work/tmp/webpack-example
Hash: 85429af103aa3ee171d4
Version: webpack 1.12.12
Time: 2878ms
       Asset     Size  Chunks             Chunk Names
 img/002.jpg   356 kB          [emitted]
js/entry1.js  91.1 kB       0  [emitted]  entry1
js/entry2.js  91.1 kB       1  [emitted]  entry2
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {0} {1} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_1/build.sh

~/Work/tmp/webpack-example/example_1 ~/Work/tmp/webpack-example
Hash: 85429af103aa3ee171d4
Version: webpack 1.12.12
Time: 2693ms
       Asset     Size  Chunks             Chunk Names
 img/002.jpg   356 kB          [emitted]
js/entry1.js  91.1 kB       0  [emitted]  entry1
js/entry2.js  91.1 kB       1  [emitted]  entry2
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {0} {1} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_1/build.sh

~/Work/tmp/webpack-example/example_1 ~/Work/tmp/webpack-example
Hash: 85429af103aa3ee171d4
Version: webpack 1.12.12
Time: 2720ms
       Asset     Size  Chunks             Chunk Names
 img/002.jpg   356 kB          [emitted]
js/entry1.js  91.1 kB       0  [emitted]  entry1
js/entry2.js  91.1 kB       1  [emitted]  entry2
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {0} {1} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example
```

## Example 2 Test Report

When disable `webpack.optimize.UglifyJsPlugin`

```Bash
$  webpack-example  ./example_2/build.sh

~/Work/tmp/webpack-example/example_2 ~/Work/tmp/webpack-example
Hash: 7fae375550f35e7b202e
Version: webpack 1.12.12
Time: 530ms
        Asset     Size  Chunks             Chunk Names
  img/002.jpg   356 kB          [emitted]
 js/entry1.js  1.66 kB       0  [emitted]  entry1
 js/entry2.js  1.88 kB       1  [emitted]  entry2
js/commons.js   282 kB       2  [emitted]  libs
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {2} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_2/build.sh
~/Work/tmp/webpack-example/example_2 ~/Work/tmp/webpack-example
Hash: 7fae375550f35e7b202e
Version: webpack 1.12.12
Time: 502ms
        Asset     Size  Chunks             Chunk Names
  img/002.jpg   356 kB          [emitted]
 js/entry1.js  1.66 kB       0  [emitted]  entry1
 js/entry2.js  1.88 kB       1  [emitted]  entry2
js/commons.js   282 kB       2  [emitted]  libs
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {2} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_2/build.sh
~/Work/tmp/webpack-example/example_2 ~/Work/tmp/webpack-example
Hash: 7fae375550f35e7b202e
Version: webpack 1.12.12
Time: 535ms
        Asset     Size  Chunks             Chunk Names
  img/002.jpg   356 kB          [emitted]
 js/entry1.js  1.66 kB       0  [emitted]  entry1
 js/entry2.js  1.88 kB       1  [emitted]  entry2
js/commons.js   282 kB       2  [emitted]  libs
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {2} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example
```

When enable `webpack.optimize.UglifyJsPlugin`

```Bash
$  webpack-example  ./example_2/build.sh

~/Work/tmp/webpack-example/example_2 ~/Work/tmp/webpack-example
Hash: fc66fde6a713db73f63c
Version: webpack 1.12.12
Time: 1753ms
        Asset       Size  Chunks             Chunk Names
  img/002.jpg     356 kB          [emitted]
 js/entry1.js  394 bytes       0  [emitted]  entry1
 js/entry2.js  465 bytes       1  [emitted]  entry2
js/commons.js    91.3 kB       2  [emitted]  libs
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {2} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_2/build.sh

~/Work/tmp/webpack-example/example_2 ~/Work/tmp/webpack-example
Hash: fc66fde6a713db73f63c
Version: webpack 1.12.12
Time: 1881ms
        Asset       Size  Chunks             Chunk Names
  img/002.jpg     356 kB          [emitted]
 js/entry1.js  394 bytes       0  [emitted]  entry1
 js/entry2.js  465 bytes       1  [emitted]  entry2
js/commons.js    91.3 kB       2  [emitted]  libs
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {2} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example

$  webpack-example  ./example_2/build.sh

~/Work/tmp/webpack-example/example_2 ~/Work/tmp/webpack-example
Hash: fc66fde6a713db73f63c
Version: webpack 1.12.12
Time: 1879ms
        Asset       Size  Chunks             Chunk Names
  img/002.jpg     356 kB          [emitted]
 js/entry1.js  394 bytes       0  [emitted]  entry1
 js/entry2.js  465 bytes       1  [emitted]  entry2
js/commons.js    91.3 kB       2  [emitted]  libs
   [0] ./src/js/entry1.js 215 bytes {0} [built]
   [0] ./src/js/entry2.js 220 bytes {1} [built]
   [9] ./src/js/module.js 45 bytes {0} [built]
  [10] ./src/js/jquery.js 258 kB {2} [built]
  [14] ./src/js/module2.js 46 bytes {1} [built]
    + 11 hidden modules
~/Work/tmp/webpack-example
```

## Example 3 Test Report

When disable `webpack.optimize.UglifyJsPlugin`

```Bash
➜  webpack-example  ./example_3/build.sh
~/Work/tmp/webpack-example/example_3 ~/Work/tmp/webpack-example
Hash: bda582f16dfa69be6d4f
Version: webpack 1.12.12
Time: 546ms
          Asset       Size  Chunks             Chunk Names
    img/002.jpg     356 kB          [emitted]
  js/commons.js     271 kB       0  [emitted]  commons
   js/entry1.js  440 bytes       1  [emitted]  entry1
   js/entry2.js  444 bytes       2  [emitted]  entry2
css/commons.css  120 bytes       0  [emitted]  commons
 css/entry1.css   64 bytes       1  [emitted]  entry1
 css/entry2.css   83 bytes       2  [emitted]  entry2
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 215 bytes {1} [built]
   [0] ./src/js/entry2.js 220 bytes {2} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
~/Work/tmp/webpack-example

➜  webpack-example  ./example_3/build.sh
~/Work/tmp/webpack-example/example_3 ~/Work/tmp/webpack-example
Hash: bda582f16dfa69be6d4f
Version: webpack 1.12.12
Time: 548ms
          Asset       Size  Chunks             Chunk Names
    img/002.jpg     356 kB          [emitted]
  js/commons.js     271 kB       0  [emitted]  commons
   js/entry1.js  440 bytes       1  [emitted]  entry1
   js/entry2.js  444 bytes       2  [emitted]  entry2
css/commons.css  120 bytes       0  [emitted]  commons
 css/entry1.css   64 bytes       1  [emitted]  entry1
 css/entry2.css   83 bytes       2  [emitted]  entry2
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 215 bytes {1} [built]
   [0] ./src/js/entry2.js 220 bytes {2} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
~/Work/tmp/webpack-example

➜  webpack-example  ./example_3/build.sh
~/Work/tmp/webpack-example/example_3 ~/Work/tmp/webpack-example
Hash: bda582f16dfa69be6d4f
Version: webpack 1.12.12
Time: 571ms
          Asset       Size  Chunks             Chunk Names
    img/002.jpg     356 kB          [emitted]
  js/commons.js     271 kB       0  [emitted]  commons
   js/entry1.js  440 bytes       1  [emitted]  entry1
   js/entry2.js  444 bytes       2  [emitted]  entry2
css/commons.css  120 bytes       0  [emitted]  commons
 css/entry1.css   64 bytes       1  [emitted]  entry1
 css/entry2.css   83 bytes       2  [emitted]  entry2
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 215 bytes {1} [built]
   [0] ./src/js/entry2.js 220 bytes {2} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
~/Work/tmp/webpack-example
```

When enable `webpack.optimize.UglifyJsPlugin`

```Bash
➜  webpack-example  ./example_3/build.sh
~/Work/tmp/webpack-example/example_3 ~/Work/tmp/webpack-example
Hash: 3aea0c632d178089b391
Version: webpack 1.12.12
Time: 1769ms
          Asset       Size  Chunks             Chunk Names
    img/002.jpg     356 kB          [emitted]
  js/commons.js    87.6 kB       0  [emitted]  commons
   js/entry1.js  171 bytes       1  [emitted]  entry1
   js/entry2.js  173 bytes       2  [emitted]  entry2
css/commons.css   74 bytes       0  [emitted]  commons
 css/entry1.css   58 bytes       1  [emitted]  entry1
 css/entry2.css   77 bytes       2  [emitted]  entry2
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 215 bytes {1} [built]
   [0] ./src/js/entry2.js 220 bytes {2} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
~/Work/tmp/webpack-example

➜  webpack-example  ./example_3/build.sh
~/Work/tmp/webpack-example/example_3 ~/Work/tmp/webpack-example
Hash: 3aea0c632d178089b391
Version: webpack 1.12.12
Time: 1773ms
          Asset       Size  Chunks             Chunk Names
    img/002.jpg     356 kB          [emitted]
  js/commons.js    87.6 kB       0  [emitted]  commons
   js/entry1.js  171 bytes       1  [emitted]  entry1
   js/entry2.js  173 bytes       2  [emitted]  entry2
css/commons.css   74 bytes       0  [emitted]  commons
 css/entry1.css   58 bytes       1  [emitted]  entry1
 css/entry2.css   77 bytes       2  [emitted]  entry2
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 215 bytes {1} [built]
   [0] ./src/js/entry2.js 220 bytes {2} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
~/Work/tmp/webpack-example

➜  webpack-example  ./example_3/build.sh
~/Work/tmp/webpack-example/example_3 ~/Work/tmp/webpack-example
Hash: 3aea0c632d178089b391
Version: webpack 1.12.12
Time: 1803ms
          Asset       Size  Chunks             Chunk Names
    img/002.jpg     356 kB          [emitted]
  js/commons.js    87.6 kB       0  [emitted]  commons
   js/entry1.js  171 bytes       1  [emitted]  entry1
   js/entry2.js  173 bytes       2  [emitted]  entry2
css/commons.css   74 bytes       0  [emitted]  commons
 css/entry1.css   58 bytes       1  [emitted]  entry1
 css/entry2.css   77 bytes       2  [emitted]  entry2
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 215 bytes {1} [built]
   [0] ./src/js/entry2.js 220 bytes {2} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
~/Work/tmp/webpack-example
```

## Example 4 Test Report

When disable `webpack.optimize.UglifyJsPlugin`

```Bash
➜  webpack-example  ./example_4/build.sh
~/Work/tmp/webpack-example/example_4 ~/Work/tmp/webpack-example
Hash: 1f16c0b84faefd13e4d9
Version: webpack 1.12.12
Time: 548ms
         Asset       Size  Chunks             Chunk Names
   img/002.jpg     356 kB          [emitted]
 js/commons.js     271 kB       0  [emitted]  commons
  js/entry1.js  261 bytes       1  [emitted]  entry1
  js/entry2.js  265 bytes       2  [emitted]  entry2
  js/index1.js  154 bytes       3  [emitted]  index1
  js/index2.js  154 bytes       4  [emitted]  index2
   js/style.js  401 bytes       5  [emitted]  style
css/index1.css   64 bytes       3  [emitted]  index1
css/index2.css   83 bytes       4  [emitted]  index2
 css/style.css  120 bytes       5  [emitted]  style
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 125 bytes {1} [built]
   [0] ./src/js/entry2.js 130 bytes {2} [built]
   [0] multi style 40 bytes {5} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
~/Work/tmp/webpack-example

➜  webpack-example  ./example_4/build.sh
~/Work/tmp/webpack-example/example_4 ~/Work/tmp/webpack-example
Hash: 1f16c0b84faefd13e4d9
Version: webpack 1.12.12
Time: 548ms
         Asset       Size  Chunks             Chunk Names
   img/002.jpg     356 kB          [emitted]
 js/commons.js     271 kB       0  [emitted]  commons
  js/entry1.js  261 bytes       1  [emitted]  entry1
  js/entry2.js  265 bytes       2  [emitted]  entry2
  js/index1.js  154 bytes       3  [emitted]  index1
  js/index2.js  154 bytes       4  [emitted]  index2
   js/style.js  401 bytes       5  [emitted]  style
css/index1.css   64 bytes       3  [emitted]  index1
css/index2.css   83 bytes       4  [emitted]  index2
 css/style.css  120 bytes       5  [emitted]  style
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 125 bytes {1} [built]
   [0] ./src/js/entry2.js 130 bytes {2} [built]
   [0] multi style 40 bytes {5} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
~/Work/tmp/webpack-example

➜  webpack-example  ./example_4/build.sh
~/Work/tmp/webpack-example/example_4 ~/Work/tmp/webpack-example
Hash: 1f16c0b84faefd13e4d9
Version: webpack 1.12.12
Time: 564ms
         Asset       Size  Chunks             Chunk Names
   img/002.jpg     356 kB          [emitted]
 js/commons.js     271 kB       0  [emitted]  commons
  js/entry1.js  261 bytes       1  [emitted]  entry1
  js/entry2.js  265 bytes       2  [emitted]  entry2
  js/index1.js  154 bytes       3  [emitted]  index1
  js/index2.js  154 bytes       4  [emitted]  index2
   js/style.js  401 bytes       5  [emitted]  style
css/index1.css   64 bytes       3  [emitted]  index1
css/index2.css   83 bytes       4  [emitted]  index2
 css/style.css  120 bytes       5  [emitted]  style
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 125 bytes {1} [built]
   [0] ./src/js/entry2.js 130 bytes {2} [built]
   [0] multi style 40 bytes {5} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
~/Work/tmp/webpack-example
```

When enable `webpack.optimize.UglifyJsPlugin`

```Bash
➜  webpack-example  ./example_4/build.sh
~/Work/tmp/webpack-example/example_4 ~/Work/tmp/webpack-example
Hash: b5359c46bd8713cc3932
Version: webpack 1.12.12
Time: 1755ms
         Asset       Size  Chunks             Chunk Names
   img/002.jpg     356 kB          [emitted]
 js/commons.js    87.6 kB       0  [emitted]  commons
  js/entry1.js  134 bytes       1  [emitted]  entry1
  js/entry2.js  136 bytes       2  [emitted]  entry2
  js/index1.js   73 bytes       3  [emitted]  index1
  js/index2.js   73 bytes       4  [emitted]  index2
   js/style.js  134 bytes       5  [emitted]  style
css/index1.css   58 bytes       3  [emitted]  index1
css/index2.css   77 bytes       4  [emitted]  index2
 css/style.css   74 bytes       5  [emitted]  style
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 125 bytes {1} [built]
   [0] ./src/js/entry2.js 130 bytes {2} [built]
   [0] multi style 40 bytes {5} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules

➜  webpack-example  ./example_4/build.sh
~/Work/tmp/webpack-example/example_4 ~/Work/tmp/webpack-example
Hash: b5359c46bd8713cc3932
Version: webpack 1.12.12
Time: 1747ms
         Asset       Size  Chunks             Chunk Names
   img/002.jpg     356 kB          [emitted]
 js/commons.js    87.6 kB       0  [emitted]  commons
  js/entry1.js  134 bytes       1  [emitted]  entry1
  js/entry2.js  136 bytes       2  [emitted]  entry2
  js/index1.js   73 bytes       3  [emitted]  index1
  js/index2.js   73 bytes       4  [emitted]  index2
   js/style.js  134 bytes       5  [emitted]  style
css/index1.css   58 bytes       3  [emitted]  index1
css/index2.css   77 bytes       4  [emitted]  index2
 css/style.css   74 bytes       5  [emitted]  style
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 125 bytes {1} [built]
   [0] ./src/js/entry2.js 130 bytes {2} [built]
   [0] multi style 40 bytes {5} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules

➜  webpack-example  ./example_4/build.sh
~/Work/tmp/webpack-example/example_4 ~/Work/tmp/webpack-example
Hash: b5359c46bd8713cc3932
Version: webpack 1.12.12
Time: 1761ms
         Asset       Size  Chunks             Chunk Names
   img/002.jpg     356 kB          [emitted]
 js/commons.js    87.6 kB       0  [emitted]  commons
  js/entry1.js  134 bytes       1  [emitted]  entry1
  js/entry2.js  136 bytes       2  [emitted]  entry2
  js/index1.js   73 bytes       3  [emitted]  index1
  js/index2.js   73 bytes       4  [emitted]  index2
   js/style.js  134 bytes       5  [emitted]  style
css/index1.css   58 bytes       3  [emitted]  index1
css/index2.css   77 bytes       4  [emitted]  index2
 css/style.css   74 bytes       5  [emitted]  style
   [0] multi commons 52 bytes {0} [built]
   [0] ./src/js/entry1.js 125 bytes {1} [built]
   [0] ./src/js/entry2.js 130 bytes {2} [built]
   [0] multi style 40 bytes {5} [built]
   [1] ./src/js/jquery.js 258 kB {0} [built]
   [2] ./src/js/module.js 45 bytes {0} [built]
   [3] ./src/js/module2.js 46 bytes {0} [built]
    + 11 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
```
