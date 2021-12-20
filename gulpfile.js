const app = "app/";
const dist = "dist/";

const config = {
  app: {
    html: app + "index.html",
    style: app + "scss/**/*.*",
    js: app + "js/**/*.*",
    fonts: app + "fonts/**/*.*",
    image: app + "images/**/*.*",
  },
  dist: {
    html: dist,
    style: dist,
    js: dist,
    fonts: dist + "fonts/",
    image: dist + "images/",
  },
  watch: {
    html: app + "index.html",
    style: app + "scss/**/*.*",
    js: app + "js/**/*.*",
    fonts: app + "fonts/**/*.*",
    image: app + "images/**/*.*",
  }
}

const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");
const imagemin = require("gulp-imagemin");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const sync = require("browser-sync").create();

const serve = () => {
  sync.init({
    server: {
      baseDir: dist
    },
    notify: false
  })
}

const htmlTask = () => {
  return src(config.app.html)
    .pipe(include({
      prefix: "@@"
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest(config.dist.html))
    .pipe(sync.reload({ stream: true }))
}


const scssTask = () => {
  return src(config.app.style)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 5 version"],
      grid: true
    }))
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(dest(config.dist.style))
    .pipe(sync.reload({ stream: true }))
}

const jsTask = () => {
  return src(config.app.js)
    .pipe(concat("index.js"))
    .pipe(uglify())
    .pipe(dest(config.dist.js))
    .pipe(sync.reload({ stream: true }))
}

const imagesTask = () => {
  return src(config.app.image)
    .pipe(imagemin(
      [
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]
    ))
    .pipe(dest(config.dist.image))
    .pipe(sync.reload({ stream: true }))
}

const fontsTask = () => {
  return src(config.app.fonts)
    .pipe(dest(config.dist.fonts))
    .pipe(sync.reload({ stream: true }))
}

const clearTask = () => {
  return del("dist")
}

const watchFiles = () => {
  watch([config.watch.html], series(htmlTask))
  watch([config.watch.style], series(scssTask))
  watch([config.watch.js], series(jsTask))
  watch([config.watch.image], series(imagesTask))
  watch([config.watch.fonts], series(fontsTask))
}

const start = series(clearTask, htmlTask, scssTask, jsTask, imagesTask, fontsTask)

exports.default = parallel(start, watchFiles, serve)