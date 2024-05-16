const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function styles() {
    return gulp.src('./src/styles/*.scss') /* recuperando os arquivos da pasta 'src' */
    .pipe(sass({outputStyle: 'compressed' })) /* o estilo de saída dos arquivos css será comprimido para otimizar espaço */
    .pipe(gulp.dest('./dist/css')) /* joga os arquivos comprimidos para a pasta de saída 'dist' */
}

exports.default = styles; /* exporta a função 'styles' ao executar $npm run build */
exports.watch = function() { /* função 'watch' para observar alterações em arquivos */
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) /* arquivos e funções que serão observados */
}

