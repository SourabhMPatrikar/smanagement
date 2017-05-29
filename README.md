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
<li>We have to check and copy key by the command below<br><b>$ cat ~/.ssh/id_rsa.pub</b><br>then we'll see one code for display and copy SSH Key<br>
<pre>
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCsilnY2Y8QjcmfU3mZw6aj7fXWJC5IlvaNwhRVQkTB                                                                                                                +f9Zp4z3yP69BzM8TMU0xtCTtYzLTqAQ+tLoUe/TmL1SqajK82i8chBDYAEYjPQDkBDRRyMpTjoxS2v7                                                                                                                /eJ+gOsqI3rXFcsakGxhNSLCyhHZj4auE467v/u5rJevXfJFUUjuZheSdmi0oqdfx09Y6qCzn2VvJgzH                                                                                                                7OGSBUDmIHhmsCLZ+Y4Ylwbmx88Q2yGAJN+bn+ONDlP4SRf8w+UtJzsE8yvXzcfZglEKYy90BUbB2SU5                                                                                                                mjgRP+5r9VcCs84GwjilKqbMCkNzISUUTwToxcrbGsy8QRkYZ3GWRm6NkfNn Sourabh@Sourabh-PC
</pre>
<h6>Key generated</h6>
</li>
<li>Now we have to write the command below<br>$ git clone <u>Repository URl copy from green colored <b>clone and download button</b></u><br>#####EX:<br>$ git clone https://github.com/SourabhMPatrikar/Smanagement.git
<br>then we'll see one code to know about clone status<br>
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
</li>
<li></li>
<li></li>
<li></li>
</ol>
