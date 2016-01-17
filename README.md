Twitter Profile Changer
======================

![before-after](https://pbs.twimg.com/media/BpDX9VuCUAAxPPX.png:large "before-after")

This app changes your twitter profile image when you get an email. Node.js is very powerful, which enables imap monitor and imagemagick in this app. app.js monitors email's title and put it to your twitter profile image with imagemagick. If you want to know more details, please visit my article below reference.

Usage
------

1. Install usuful plugins. If you have some encoding troubles, please try to install iconv library. It may help your character problems.

 ``` perl
$ npm install gm
$ npm install inbox
$ npm install iconv
```
1. create your security file as 'security.js'.
 
 ```javascript
module.exports = {
  "twitter" : {
      "consumerKey"       : "xxxx",
      "consumerSecret"    : "xxxx",
      "accessToken"       : "xxxx",
      "accessTokenSecret" : "xxxx"
  },
  "gmail" : {
      "mail"        : "xxxx",
      "pass"        : "xxxx!"
  },
  "app" : {
      "acceptEmail" : [
        "your-client-mail-address"
      ]
  } 
}
```
1. set your favorite font file in font/. 
1. modify pic/jonki.png to png file what you want to use.
1. modify imagemagick code in app.js.
1. just do it!
 
 ```
$ node app.js
```


Reference
-------

-  [Node.jsでGmailを監視してTwitterのプロフィール画像を動的に変更する. The Jonki](http://www.jonki.net/entry/2014/05/11/022046)


Contact
------

- [twitter/jojonki](https://twitter.com/jojonki)

License
----------
Copyright (c) 2014 jojonki

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including w ithout limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to  the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. I N NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
