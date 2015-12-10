var URLEncoder = {
	//Encoder
	encode: function(input) {
	//function overloads
		//overload for input type array
		if(Array.isArray(input)) {
			var output = [];
			for(var i = 0; i < input.length; i++) {
				var encodedElement = this.percentEncode(input[i]);
				output.push(encodedElement);
			}
			return output;
		}
		//overload for input type object
		if(typeof input == 'object') {
			//store key-value pairs in this string
			var strToEncode = "";
			for(var key in input) {
				strToEncode += key + "=" + input[key] + "&";
			}
			//subtract last "&" character
			strToEncode = strToEncode.slice(0, -1);
			var output = this.percentEncode(strToEncode);
			return output;
		}
		//overload for string and primitive input types
		var output = this.percentEncode(input);
		return output;





        function decode() {

    URLEncoder = {
        decode: function (property) {
            if (property.indexOf('=') > 0) {
                var convert = decodeURIComponent(property);
                convert = convert.replace(/=/g, ':');
                var split = convert.split('&');
                var finalSplit = [];
                var finalObject = {};
                for (var i in split) {
                    finalSplit[i] = split[i].split(':');
                    finalObject[finalSplit[i][0]] = finalSplit[i][1];
                }
                console.log(property);
                console.log(finalObject);
                return 0;
            }

            if (Array.isArray(property)) {
                var masivi = [];
                for (var i = 0; i < property.length; i++) {
                    var result = decodeURIComponent(property[i]);
                    masivi.push(result);
                }
                console.log(property);
                console.log(masivi);
                return 0;

            }

            var result = decodeURIComponent(property);
            console.log(property);
            console.log(result);

        }

    }
