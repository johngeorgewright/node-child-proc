child-proc
==========

An extension to the Node.js child\_process module.

The main problem we expreience when spawning node child processes within a Windows environment is it's issue with finding anything other than an executable (exe) file in the modified path. Using this module as a replacement for child\_process can fix this problem while keeping the same functionality in other environments.

Installation
------------

`npm i child-proc`

Use
---

Exaclty the same as [child\_process](http://nodejs.org/api/child_process.html)

