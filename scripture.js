function nextImage(el){
	if (el.src.match("A2.png")){
		el.src = "A3.png";
	} else if (el.src.match("A3.png")){
		el.src = "A1.png";
	} else if (el.src.match("A1.png")){
		el.src = "A2.png";
	} else {
		// do nothing
	}
}