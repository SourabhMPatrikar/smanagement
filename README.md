# Smanagement

##Setup Repository on Github
####Make Local Repository
<ol>
<li>Make a project folder on local machine and do right click on project folder on local. After right click select "Git Bash Here" open and click on it then it'll open git bash window. We have to write command in GIT bash window for setup our project.</li>
<li>Write a command for generate SSH Key command is<br>
<b>$ ssh-keygen</b>
<br>
then we'll see one code for successfully generated SSH Key<br>
<pre>Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Sourabh/.ssh/id_rsa):
/c/Users/Sourabh/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/Sourabh/.ssh/id_rsa.
Your public key has been saved in /c/Users/Sourabh/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:Fy7SPSpHwIZ6iR4JYlw/4HobjGQG3RlR8fUmjQh2Sgc Sourabh@Sourabh-PC
The key's randomart image is:
+---[RSA 2048]----+
|.. +o=Eoo .      |
|o + == * o +     |
|o* ..o= o + +    |
|*.++ o.o o +     |
| o=+o . S =      |
| ..oo  o + .     |
|  ..  . o        |
|       o         |
|                 |
+----[SHA256]-----+
</pre>
<h6>Now key is generated</h6>
</li>
<li>We have to check and copy key by the command below<br>
<b>$ cat ~/.ssh/id_rsa.pub</b><br>
then we'll see one code for display and copy SSH Key<br>
<pre>
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCsilnY2Y8QjcmfU3mZw6aj7fXWJC5IlvaNwhRVQkTB+f9Zp4z3yP69BzM8TMU0xtCTtYzLTqAQ+tLoUe/TmL1SqajK82i8chBDYAEYjPQDkBDRRyMpTjoxS2v7/eJ+gOsqI3rXFcsakGxhNSLCyhHZj4auE467v/u5rJevXfJFUUjuZheSdmi0oqdfx09Y6qCzn2VvJgzH7OGSBUDmIHhmsCLZ+Y4Ylwbmx88Q2yGAJN+bn+ONDlP4SRf8w+UtJzsE8yvXzcfZglEKYy90BUbB2SU5mjgRP+5r9VcCs84GwjilKqbMCkNzISUUTwToxcrbGsy8QRkYZ3GWRm6NkfNn Sourabh@Sourabh-PC
</pre>
<h6>Key generated</h6>
</li>
<li>Now we have to write the command below<br>
<b>$ git clone <u>Repository URl copy from green colored "clone and download button"</u></b><br>
<h6>EX:</h6><br>
<b>$ git clone https://github.com/SourabhMPatrikar/Smanagement.git</b><br>
then we'll see one code to know about clone status<br>
<pre>
Cloning into 'Smanagement'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
</pre>
<h6>Clone Done</h6>
</li>
<li>In next step we have to initiate git by the command below
<br><b>$ git init</b>
<br>then we'll see one code to know about init git (.git)<br>
<pre>
Initialized empty Git repository in D:/ng-Sourabh/s-management/.git/
</pre>
<h6>Init Done</h6>
</li>
<li>For next step we should add and link git repository be following command<br>
<b>$ git remote add origin git repository link</b>
<br><h6>EX:</h6>
<b>$ git remote add origin git@github.com:SourabhMPatrikar/Smanagement.git</b><br>
<h6>Add and link with git done</h6>
</li>
</ol>

#### PUSH, PULL, STATUS, ADD-M, COMMIT
<ol>
<li><b>$ git status</b><br>
<h6>after above command GIT Bash will show file status of file,For that red color for not added file and green color for added files</h6><br>
Now you can see the code like below in red<br>
<pre>
On branch master
Untracked files:
  (use "git add &alt; file &alt; ..." to include in what will be committed)

        .bowerrc
        .editorconfig
        .eslintrc
        .gitignore
        .yo-rc.json
        Smanagement/
        bower.json
        e2e/
        errorlist.txt
        gulp/
        gulpfile.js
        karma.conf.js
        package.json
        protractor.conf.js
        src/

nothing added to commit but untracked files present (use "git add" to track)
</pre>
</li>
<li><b>$ git remote -v</b><br>
for check our fetch and push url<br>
Now you can see the code like<br>
<pre>
origin  git@github.com:SourabhMPatrikar/Smanagement.git (fetch)
origin  git@github.com:SourabhMPatrikar/Smanagement.git (push)
</pre>
</li>
<li><b>$ git add .</b><br>
for make files to addable <br>
Now you can see the code like<br>
<pre>
$ warning: LF will be replaced by CRLF in .bowerrc.
warning: LF will be replaced by CRLF in gulp/unit-tests.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in gulp/watch.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in gulpfile.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in karma.conf.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in protractor.conf.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/authentication/login/login.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/authentication/login/login.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/authentication/logout/logout.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/authentication/logout/logout.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/githubContributor/githubContributor.service.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/githubContributor/githubContributor.service.spec.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/malarkey/malarkey.directive.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/malarkey/malarkey.directive.spec.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/malarkey/malarkey.scss.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/navbar/navbar.directive.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/navbar/navbar.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/navbar/navbar.scss.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/webDevTec/webDevTec.service.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/components/webDevTec/webDevTec.service.spec.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/dashboard.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/dashboard.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/defaultDashboard/defaultDashboard.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/defaultDashboard/defaultDashboard.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/student/addStudent/addStudent.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/student/addStudent/addStudent.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/student/studentList/studentList.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/student/studentList/studentList.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/student/viewProfile/viewProfile.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/student/viewProfile/viewProfile.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/teacher/addTeacher/addTeacher.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/teacher/addTeacher/addTeacher.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/teacher/teacher/teacher.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/teacher/teacher/teacher.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/z/main.controller.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/z/main.controller.spec.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/dashboard/z/main.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/index.config.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/index.constants.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/index.module.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/index.route.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/index.run.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/index.scss.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/index.html.
The file will have its original line endings in your working directory.bash: warning:: command not found
</pre>
</li>
<li><b>$ git status</b><br> 
For verification for files added or not<br>
Now you can see the code like<br>
<pre>
On branch master
Changes to be committed:
  (use "git reset HEAD &alt; file&alt;..." to unstage)

        new file:   .bowerrc
        new file:   .editorconfig
        new file:   .eslintrc
        new file:   .gitignore
        new file:   .yo-rc.json
        new file:   Smanagement
        new file:   bower.json
        new file:   e2e/.eslintrc
        new file:   e2e/main.po.js
        new file:   e2e/main.spec.js
        new file:   errorlist.txt
        new file:   gulp/.eslintrc
        new file:   gulp/build.js
        new file:   gulp/conf.js
        new file:   gulp/e2e-tests.js
        new file:   gulp/inject.js
        new file:   gulp/scripts.js
        new file:   gulp/server.js
        new file:   gulp/styles.js
        new file:   gulp/unit-tests.js
        new file:   gulp/watch.js
        new file:   gulpfile.js
        new file:   karma.conf.js
        new file:   package.json
        new file:   protractor.conf.js
        new file:   src/app/apis/application/studentService.js
        new file:   src/app/apis/application/teacherService.js
        new file:   src/app/apis/application/viewProfile.js
        new file:   src/app/apis/authentication/loginService.js
        new file:   src/app/authentication/auth.state.js
        new file:   src/app/authentication/login/login.controller.js
        new file:   src/app/authentication/login/login.css
        new file:   src/app/authentication/login/login.html
        new file:   src/app/authentication/login/login.state.js
        new file:   src/app/authentication/logout/logout.controller.js
        new file:   src/app/authentication/logout/logout.css
        new file:   src/app/authentication/logout/logout.html
        new file:   src/app/authentication/logout/logout.state.js
        new file:   src/app/components/githubContributor/githubContributor.service.js
        new file:   src/app/components/githubContributor/githubContributor.service.spec.js
        new file:   src/app/components/malarkey/malarkey.directive.js
        new file:   src/app/components/malarkey/malarkey.directive.spec.js
        new file:   src/app/components/malarkey/malarkey.scss
        new file:   src/app/components/navbar/navbar.directive.js
        new file:   src/app/components/navbar/navbar.html
        new file:   src/app/components/navbar/navbar.scss
        new file:   src/app/components/webDevTec/webDevTec.service.js
        new file:   src/app/components/webDevTec/webDevTec.service.spec.js
        new file:   src/app/dashboard/dashboard.controller.js
        new file:   src/app/dashboard/dashboard.html
        new file:   src/app/dashboard/dashboard.scss
        new file:   src/app/dashboard/dashboard.state.js
        new file:   src/app/dashboard/defaultDashboard/defaultDashboard.controller.js
        new file:   src/app/dashboard/defaultDashboard/defaultDashboard.html
        new file:   src/app/dashboard/defaultDashboard/defaultDashboard.state.js
        new file:   src/app/dashboard/student/addStudent/addStudent.controller.js
        new file:   src/app/dashboard/student/addStudent/addStudent.html
        new file:   src/app/dashboard/student/student.state.js
        new file:   src/app/dashboard/student/studentList/studentList.controller.js
        new file:   src/app/dashboard/student/studentList/studentList.html
        new file:   src/app/dashboard/student/studentService.js
        new file:   src/app/dashboard/student/viewProfile/viewProfile.controller.js
        new file:   src/app/dashboard/student/viewProfile/viewProfile.html
        new file:   src/app/dashboard/student/viewProfile/viewProfile.scss
        new file:   src/app/dashboard/teacher/addTeacher/addTeacher.controller.js
        new file:   src/app/dashboard/teacher/addTeacher/addTeacher.html
        new file:   src/app/dashboard/teacher/teacher/teacher.controller.js
        new file:   src/app/dashboard/teacher/teacher/teacher.html
        new file:   src/app/dashboard/z/main.controller.js
        new file:   src/app/dashboard/z/main.controller.spec.js
        new file:   src/app/dashboard/z/main.html
        new file:   src/app/data/application/studentService.json
        new file:   src/app/data/application/teacherService.json
        new file:   src/app/data/authentication/loginService.json
        new file:   src/app/index.config.js
        new file:   src/app/index.constants.js
        new file:   src/app/index.module.js
        new file:   src/app/index.route.js
        new file:   src/app/index.run.js
        new file:   src/app/index.scss
        new file:   src/assets/images/angular.png
        new file:   src/assets/images/bootstrap.png
        new file:   src/assets/images/browsersync.png
        new file:   src/assets/images/gulp.png
        new file:   src/assets/images/jasmine.png
        new file:   src/assets/images/karma.png
        new file:   src/assets/images/node-sass.png
        new file:   src/assets/images/protractor.png
        new file:   src/assets/images/ui-bootstrap.png
        new file:   src/assets/images/yeoman.png
        new file:   src/favicon.ico
        new file:   src/index.html
</pre>
</li>
<li><b>$ git commit -m "Your comment here"</b><br> 
for commit files with comment<br> 
Now you can see the code like<br>
<pre>[master 935a4d8] Add existing file
 92 files changed, 3081 insertions(+)
 create mode 100644 .bowerrc
 create mode 100644 .editorconfig
 create mode 100644 .eslintrc
 create mode 100644 .gitignore
 create mode 100644 .yo-rc.json
 create mode 160000 Smanagement
 create mode 100644 bower.json
 create mode 100644 e2e/.eslintrc
 create mode 100644 e2e/main.po.js
 create mode 100644 e2e/main.spec.js
 create mode 100644 errorlist.txt
 create mode 100644 gulp/.eslintrc
 create mode 100644 gulp/build.js
 create mode 100644 gulp/conf.js
 create mode 100644 gulp/e2e-tests.js
 create mode 100644 gulp/inject.js
 create mode 100644 gulp/scripts.js
 create mode 100644 gulp/server.js
 create mode 100644 gulp/styles.js
 create mode 100644 gulp/unit-tests.js
 create mode 100644 gulp/watch.js
 create mode 100644 gulpfile.js
 create mode 100644 karma.conf.js
 create mode 100644 package.json
 create mode 100644 protractor.conf.js
 create mode 100644 src/app/apis/application/studentService.js
 create mode 100644 src/app/apis/application/teacherService.js
 create mode 100644 src/app/apis/application/viewProfile.js
 create mode 100644 src/app/apis/authentication/loginService.js
 create mode 100644 src/app/authentication/auth.state.js
 create mode 100644 src/app/authentication/login/login.controller.js
 create mode 100644 src/app/authentication/login/login.css
 create mode 100644 src/app/authentication/login/login.html
 create mode 100644 src/app/authentication/login/login.state.js
 create mode 100644 src/app/authentication/logout/logout.controller.js
 create mode 100644 src/app/authentication/logout/logout.css
 create mode 100644 src/app/authentication/logout/logout.html
 create mode 100644 src/app/authentication/logout/logout.state.js
 create mode 100644 src/app/components/githubContributor/githubContributor.service.js
 create mode 100644 src/app/components/githubContributor/githubContributor.service.spec.js
 create mode 100644 src/app/components/malarkey/malarkey.directive.js
 create mode 100644 src/app/components/malarkey/malarkey.directive.spec.js
 create mode 100644 src/app/components/malarkey/malarkey.scss
 create mode 100644 src/app/components/navbar/navbar.directive.js
 create mode 100644 src/app/components/navbar/navbar.html
 create mode 100644 src/app/components/navbar/navbar.scss
 create mode 100644 src/app/components/webDevTec/webDevTec.service.js
 create mode 100644 src/app/components/webDevTec/webDevTec.service.spec.js
 create mode 100644 src/app/dashboard/dashboard.controller.js
 create mode 100644 src/app/dashboard/dashboard.html
 create mode 100644 src/app/dashboard/dashboard.scss
 create mode 100644 src/app/dashboard/dashboard.state.js
 create mode 100644 src/app/dashboard/defaultDashboard/defaultDashboard.controller.js
 create mode 100644 src/app/dashboard/defaultDashboard/defaultDashboard.html
 create mode 100644 src/app/dashboard/defaultDashboard/defaultDashboard.state.js
 create mode 100644 src/app/dashboard/student/addStudent/addStudent.controller.js
 create mode 100644 src/app/dashboard/student/addStudent/addStudent.html
 create mode 100644 src/app/dashboard/student/student.state.js
 create mode 100644 src/app/dashboard/student/studentList/studentList.controller.js
 create mode 100644 src/app/dashboard/student/studentList/studentList.html
 create mode 100644 src/app/dashboard/student/studentService.js
 create mode 100644 src/app/dashboard/student/viewProfile/viewProfile.controller.js
 create mode 100644 src/app/dashboard/student/viewProfile/viewProfile.html
 create mode 100644 src/app/dashboard/student/viewProfile/viewProfile.scss
 create mode 100644 src/app/dashboard/teacher/addTeacher/addTeacher.controller.js
 create mode 100644 src/app/dashboard/teacher/addTeacher/addTeacher.html
 create mode 100644 src/app/dashboard/teacher/teacher/teacher.controller.js
 create mode 100644 src/app/dashboard/teacher/teacher/teacher.html
 create mode 100644 src/app/dashboard/z/main.controller.js
 create mode 100644 src/app/dashboard/z/main.controller.spec.js
 create mode 100644 src/app/dashboard/z/main.html
 create mode 100644 src/app/data/application/studentService.json
 create mode 100644 src/app/data/application/teacherService.json
 create mode 100644 src/app/data/authentication/loginService.json
 create mode 100644 src/app/index.config.js
 create mode 100644 src/app/index.constants.js
 create mode 100644 src/app/index.module.js
 create mode 100644 src/app/index.route.js
 create mode 100644 src/app/index.run.js
 create mode 100644 src/app/index.scss
 create mode 100644 src/assets/images/angular.png
 create mode 100644 src/assets/images/bootstrap.png
 create mode 100644 src/assets/images/browsersync.png
 create mode 100644 src/assets/images/gulp.png
 create mode 100644 src/assets/images/jasmine.png
 create mode 100644 src/assets/images/karma.png
 create mode 100644 src/assets/images/node-sass.png
 create mode 100644 src/assets/images/protractor.png
 create mode 100644 src/assets/images/ui-bootstrap.png
 create mode 100644 src/assets/images/yeoman.png
 create mode 100644 src/favicon.ico
 create mode 100644 src/index.html
</pre>
</li>
<li><b>$ git push origin master</b><br>
for push our code on GIT Repository<br> 
Now you can see the code like<br>
<pre>
Counting objects: 120, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (114/114), done.
Writing objects: 100% (120/120), 146.04 KiB | 0 bytes/s, done.
Total 120 (delta 18), reused 0 (delta 0)
remote: Resolving deltas: 100% (18/18), done.
To github.com:SourabhMPatrikar/Smanagement.git
   a1e65e0..935a4d8  master -> master
</pre>
</li>
<li><b>$ git pull origin master</b><br>
for pull existing code from GIT Repository<br> 
Now you can see the code like<br>
<pre>
From github.com:SourabhMPatrikar/Smanagement
 * branch            master     -> FETCH_HEAD
Already up-to-date.
</pre></li>
</ol>
