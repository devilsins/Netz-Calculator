// Make the DIV element draggable:
dragElement(document.getElementById("item"));



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

	
	
	
	//111111111111111111111111111111111
	
	
	var resizeHandle = document.getElementById('handle');
	var box = document.getElementById('item');
	var sizeTop1 = 0
	var sizeTop2 = 0
	var sizeLeft1 = 0
	var sizeLeft2 = 0
	
	resizeHandle.addEventListener('mousedown', initialiseResize, false);
	
	function initialiseResize(e) {
	sizeLeft2 = e.clientX
	sizeTop2 =e.clientY
	
    window.addEventListener('mousemove', startResizing, false);
    window.addEventListener('mouseup', stopResizing, false);
	}
	
	function stopResizing(e) {
    window.removeEventListener('mousemove', startResizing, false);
    window.removeEventListener('mouseup', stopResizing, false);
	}
	
	function startResizing(e) {
		var sizeTop = box.offsetHeight
		var sizeLeft = box.offsetWidth
	
		sizeLeft1 = sizeLeft2 - e.clientX
		sizeTop1 = sizeTop2 - e.clientY
		sizeLeft2 = e.clientX
		sizeTop2 = e.clientY
		sizeTopppz = sizeTop1		
		sizeLefttt = sizeLeft1
		TOP = sizeTop - sizeTopppz
		LEFT = sizeLeft - sizeLefttt
	
		box.style.width = LEFT + 'px';
		box.style.height = TOP + 'px';
   
		box.style.top = (box.offsetTop + sizeTopppz) + "px";
		box.style.left = (box.offsetLeft + sizeLefttt) + "px";
  
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	