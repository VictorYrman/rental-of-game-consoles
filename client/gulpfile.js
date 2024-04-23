const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileScss() {
  return src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./src/css"));
}

exports.default = () => {
  watch("./src/scss/**/*.scss", compileScss);
};
