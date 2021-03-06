# GameMaker Docs

Currently only has docs for 1.4.1749, which is Deadbolt's GMS version.

View docs here:

https://gmsdocs.codemuffin.com/1.4.1749/



## How?

Converted from the CHM help file, to a website with [chm2web](https://download.cnet.com/Chm2web/3000-10247_4-10118798.html).

Styles were then updated to match the original docs.


## Local HTML

If you want the local HTML for a version not listed on this repo, and you have your version's CHM file (which you will, if GMS 1.4 is installed), you can extract the HTML files from the CHM file with 7zip.

Just right-click and choose "open inside".

Note that a site built with chm2web won't run locally, due to CORs issues with sharing variables across frames. You'll need to use a web host, or use somehting like VS Code's [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).


## View CHM Files

To open a CHM file, its path can't contain spaces. Eg. this won't work:

`C:\Hello world\5pice.chm`

But this will:

`C:\Hello_world\5pice.chm`


## Redirects

You can use a URL rewriter extension to redirect old bookmarked URLs to your own hosted docs. There are a few on the Chrome Web Store, I don't know which are worthwhile.

Here's some search terms to try:

- https://chrome.google.com/webstore/search/rewrite%20host
- https://chrome.google.com/webstore/search/rewrite%20url
- https://chrome.google.com/webstore/search/url%20redirect

_The extension [Requestly](https://chrome.google.com/webstore/detail/requestly-modify-headers/mdnleldcmiljblolnjhpnblkcekpdkpa) does the job, just make a "Replace String" rule. The extension has a lot of login nags and ad stuff though._

Once you've got your extension set up, redirect this:

`https://docs.yoyogames.com/source/dadiospice/`

To your own hosted docs, eg to redirect to mine:

`https://gmsdocs.codemuffin.com/1.4.1749/source/dadiospice`

Test page to try redirects:

[https://docs.yoyogames.com/source/dadiospice/001_advanced use/more about sprites/editing collision masks.html](https://docs.yoyogames.com/source/dadiospice/001_advanced%20use/more%20about%20sprites/editing%20collision%20masks.html)

It should take you here:

[https://gmsdocs.codemuffin.com/1.4.1749/source/dadiospice/001_advanced use/more about sprites/editing collision masks.html](https://gmsdocs.codemuffin.com/1.4.1749/source/dadiospice/001_advanced%20use/more%20about%20sprites/editing%20collision%20masks.html)

Note that if you've already visited a URL and got redirected to the new docs site, you browser will have cached that rediect. To fix it, just open developer tools (F12), click the Network tab, check "Disable cache", then enter the URL while dev tools is still open.
