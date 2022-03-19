/*************************************************************************

    chm2web Supply Library 1.2
    Copyright (c) 2002-2005 A!K Research Labs (http://www.aklabs.com)
    http://chm2web.aklabs.com - HTML Help Conversion Utility

    Tested with: Internet Explorer 5-6, Opera 6-7, Mozilla 1.2, Firefox 1.1

    ATTENTION! You can use this library only with web help system
               generated by chm2web software.

**************************************************************************/

function FindTop(start)
{
 if (start==top) return top;
 try { t = start.parent.name; } catch (e) { return start; }
 return FindTop(start.parent);
}
var chmtop = FindTop(self);


function FindFrame(frameName, start)
{
 if(start==null) return null;

 var resframe = null;
 var frames = start.frames;
 if(frames.length==0) return null;


 for(var i=0; i<frames.length; i++)
 {
    tmpFrame = frames[i];

    try { tmpFrameName = tmpFrame.name; }
    catch (e) { continue; }

    if(tmpFrameName.toUpperCase() == frameName.toUpperCase())
    {
      resframe = frames[i];
    } else {
      resframe = FindFrame(frameName, tmpFrame);
    }
    if (resframe != null) return resframe;
 } return null;
}

function navDelta(incr)
{
  next = pagenum;
  if (incr < 0) {
   for (i=pagenum-1; i>=0; i--)
    if (FITEMS[i] != null) {
     next = i;
     break;
     }
  } else {
   for (i=pagenum+1; i<FITEMS.length; i++)
    if (FITEMS[i] != null) {
     next = i;
     break;
    }
  }
  if (next == pagenum) return;
  var url = FITEMS[next];
  try {
   jstree.dOpenTreeNode(next);
  } catch (e) {
      pagenum = next;
  };
  window.open(url, "content");
}

function conPrint()
{
    var frame = FindFrame("content", top);
    if (frame && frame.focus && frame.print && !window.opera) {
      frame.focus();
      frame.print();
    } else {
      alert("Sorry, your browser does not support the print feature.");
    }
}

function linkBtn()
{
  // Get current content frame
  const frames = window.parent.frames;
  const framesArr = [];

  for (var i = 0; i < frames.length; i++)
  {
    framesArr.push( frames[i] );
  }

  // console.log(framesArr);
  const contentFrame = framesArr.filter( f => f.name === 'content' );
  const contentFrameURl = contentFrame[0].document.location.href;
  // console.log( contentFrameURl );

  // OPITON 1: Open in new tab?
  window.open( contentFrameURl, '_blank' );

  // OPTION 2: Reload and update curent page
  // var sourceIndex = contentFrameURl.indexOf( '/source' );
  // var pageURlPart = contentFrameURl.slice( sourceIndex );
  // var pageURlPart = pageURlPart.replace( '/source', 'source' );
  // console.log(pageURlPart);
  // MAYBE: Update URL with current page, eg:
  // ?page=source%2Fdadiospice%2F000_using%20gamemaker%2F000_introduction.html
  // window.search = `?page=${pageURlPart}`;
}
