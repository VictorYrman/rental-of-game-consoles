const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileScss() {
  return src("./src/assets/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./src/assets/css"));
}

exports.default = () => {
  watch("./src/assets/scss/**/*.scss", compileScss);
};
