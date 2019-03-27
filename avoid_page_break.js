var wrapSiblings = function(root, className, nodeList, siblingNodeList) {
	
    for (let i = 0; i < nodeList.length; i++) {
        let node          = nodeList[i];
	let siblingNode   = siblingNodeList[i];
	let wrapper       = document.createElement('div');
	wrapper.className = className;
		
	root.insertBefore(wrapper, node);
	wrapper.appendChild(node);
	wrapper.appendChild(siblingNode);
    }
}

var main             = document.querySelector('[role=main]');
var slideTitles      = document.querySelectorAll('h4');
var slideImages      = document.querySelectorAll('h4 + img');
var transcriptTitles = document.querySelectorAll('h5');
var transcriptTexts  = document.querySelectorAll('h5 + p');

wrapSiblings(main, "avoidPageBreak", slideTitles, slideImages);
wrapSiblings(main, "avoidPageBreak", transcriptTitles, transcriptTexts);
