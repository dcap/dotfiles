Vim�UnDo� �X�U2��epVg`bC|YV�ᄆ�� �2���+�      ,        .pipe(gulp.dest(config.js.tmp.dest))      ,      .       .   .   .    U��p    _�                             ����                                                                                                                                                                                                                                                                                                                                                             U��r     �                   �               5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             U��v     �                 gulp.task('minify:js');    �                      �                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             U��     �                %gulp.task('minify:css', function () {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �         
      var csso    = require('csso');5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �         
      %var rename  = require('gulp-rename');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �                5�_�      
              
       ����                                                                                                                                                                                                                                                                                                                            
   #       
          v       U��     �   	            '        .pipe(rename('style.min.css'));5�_�         	       
          ����                                                                                                                                                                                                                                                                                                                            
   #       
          v       U��Q     �               %var rename  = require('gulp-rename');5�_�   
                    %    ����                                                                                                                                                                                                                                                                                                                            
   #       
          v       U��V     �               %var rename  = require('gulp-rename');5�_�                            ����                                                                                                                                                                                                                                                                                                                               #                 v       U���     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �                5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �               %var rename  = require('gulp-rename');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �               #    gulp.src(config.styles.tmp.src)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �               -        .pipe(rename(config.styles.minName));5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �                       .pipe(csso())5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �                 gulp.task('minify:js');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �                 });5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        U���     �                5�_�                       *    ����                                                                                                                                                                                                                                                                                                                               *          ,       v   ,    U��'    �               /        .pipe(gulp.dest(config.styles.tmp.src))5�_�                            ����                                                                                                                                                                                                                                                                                                                               *          ,       v   ,    U��L     �               &    return gulp.src(config.js.tmp.src)5�_�                       &    ����                                                                                                                                                                                                                                                                                                                               *          ,       v   ,    U��P    �               &    return gulp.src(config.js.tmp.src)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U��b     �                .var ngAnnotate  = require('gulp-ng-annotate');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U��o     �                var gulp    = require('gulp');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U��t     �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       U���     �                        .pipe(size());5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                V       U���     �               /        //.pipe(rename(config.styles.minName));5�_�                       -    ����                                                                                                                                                                                                                                                                                                                                                V       U���     �               -        .pipe(rename(config.styles.minName));5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       U��7     �               ,        .pipe(rename(config.styles.minName))5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       U��B     �               .        .pipe(renaeeme(config.styles.minName))5�_�      !                       ����                                                                                                                                                                                                                                                                                                                                                V       U��M     �                0        .pipe(gulp.dest(config.styles.tmp.dest))5�_�       "           !      %    ����                                                                                                                                                                                                                                                                                                                                                V       U��U     �      	         %var uglify  = require('gulp-uglify');5�_�   !   #           "      *    ����                                                                                                                                                                                                                                                                                                                                                V       U��p     �               *    return gulp.src(config.styles.tmp.src)5�_�   "   $           #      ,    ����                                                                                                                                                                                                                                                                                                                                                V       U�ڀ     �               ,        .pipe(concat(config.styles.minName))5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                V   "    U�ڦ     �                        .pipe(ngAnnotate())5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                V   "    U���     �                       .pipe(uglify())�             5�_�   %   '           &      &    ����                                                                                                                                                                                                                                                                                                                                                V   "    U��     �               &    return gulp.src(config.js.tmp.src)5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                V       U��     �                        .pipe(size());5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                V       U��     �                       .pipe(uglify())�             5�_�   (   *           )           ����                                                                                                                                                                                                                                                                                                                                                V       U��!     �               ,        .pipe(gulp.dest(config.js.tmp.dest))�             5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                                V       U��'     �                        .pipe(sourcemaps.init())5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                V       U��B     �                       .pipe(concat(5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                V       U��N     �                       .pipe(uglify())5�_�   ,   .           -      $    ����                                                                                                                                                                                                                                                                                                                                                V       U��b     �               $        .pipe(uglify(config.uglify))5�_�   -               .      ,    ����                                                                                                                                                                                                                                                                                                                                                V       U��o    �               ,        .pipe(gulp.dest(config.js.tmp.dest))5�_�              
   	   	       ����                                                                                                                                                                                                                                                                                                                               #                 v       U��8     �      
                 .pipe(csso())   %        .pipe(config.styles.tmp.dest5��