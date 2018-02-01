//! tiny-template.js
//! version : 1.0.0
//! authors : Pavel Dimov
//! license : MIT

var tt = function () { };

tt.Obj = function(templateID, obj) {
	var html = null;
	if(!templateID || templateID.length == '')
		return '';
	if(templateID.length < 100)
		html = document.getElementById(templateID).innerHTML;

	if(!html)
		html = templateID;

	with (obj) {
		html = html.replace(/\{{(.*?)\}}/g, function (g0, g1) {
			var value = '';
			try {
				value = eval(g1);
			} catch (e) {
				if (e instanceof SyntaxError) {
					value = '<span style="color:red;">' + g1 + ' &gt;&gt; ' + '<b>' + e.message + '</b>' + '</span>';
					if (console && console.error) {
						console.error(e.stack);
					}
				} else {
					value = '<span style="color:red;">' + g1 + ' &gt;&gt; ' + '<b>' + (e.message ? e.message : '') + '</b>' + '</span>';
					if (console && console.error && e.stack) {
						console.error(e.stack);
					}
				}
			}
			return value;
		})
	}
	return html;
};

tt.Array = function (templateID, obj) {
	var htmlTemplate = document.getElementById(templateID).innerHTML;
	var result = '';
	if (obj instanceof Array) {
		for (var i = 0; i < obj.length; i++) {
			result += this.Obj(htmlTemplate, obj[i]);
		}
	} else {
		result += this.Obj(templateID, obj);
	}

	return result;
};
