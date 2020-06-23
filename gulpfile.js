var gulp = require("gulp");
var compiler = require("google-closure-compiler").gulp();

module.exports.default = function () {
  return gulp.src("./src/*.js")
    .pipe(compiler({
      compilation_level: "SIMPLE",
      js_output_file: "jquery.depend.min.js"
    }))
    .pipe(gulp.dest("./dist/"));
};