const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const imagein = require("gulp-imagemin");
const cached = require("gulp-cached");
const newer = require("gulp-newer");
const svgSprite = require("gulp-svg-sprite");

function images() {
  return src(["src/img/**/*"])
    .pipe(newer("src/images"))
    .pipe(imagein())
    .pipe(dest("src/images"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    "node_modules/swiper/swiper-bundle.js",
    "src/js/*.js",
    "!src/js/main.min.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("src/js"))
    .pipe(browserSync.stream());
}

function styles() {
  return src("src/scss/main.scss")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["src/scss/**/*.scss"], styles);
  watch(["src/js/*.js", "!src/js/main.min.js"], scripts);
  watch(["src/*.html"]).on("change", browserSync.reload);
}

function syncBrowser() {
  return browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
}

function cleanDist() {
  return src(["./dist"]).pipe(clean());
}

function building() {
  return src(
    [
      "src/js/main.min.js",
      "src/css/style.min.css",
      "src/index.html",
      "src/images/**/*.*",
      "src/fonts/*.*",
    ],
    { base: "src" }
  ).pipe(dest("dist"));
}

exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.syncBrowser = syncBrowser;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, images, syncBrowser, watching);
