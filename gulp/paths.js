'use strict';

module.exports = {

    source: {
        templates: 'src/templates/**/*.jade',
        slides: 'src/slides/*.jade',
        md: 'src/slides/*.md',
        js: 'src/js/**/*.js',
        css: 'src/css/**/*.css',
        styl: ['src/styl/**/*.styl', 'src/styl/**/*.css'],
        img: 'src/img/**/*',
        files: {
          jade: 'src/templates/index.jade',
          styl: 'src/styl/main.styl',
          css: 'src/css/**/*.css',
          notes: 'src/js/vendor/notes/notes.html'
        }

    },

    browserSync: {
      html: 'build/**/*.html',
      md: 'build/**/*.md',
      js: 'build/js/**/*.js',
      css: 'build/css/**/*.css',
      img: 'build/img/**/*'
    },

    build: {
      html: './build/',
      md: 'build/',
      js: 'build/js',
      css: 'build/css',
      img: 'build/img',
      notes: 'build/js/vendor/notes/'
    },

    deploy: {
      pages: 'build/**/*'
    }
};
