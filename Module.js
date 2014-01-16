var myModule = (function( module ){
	var privateVariable = 'private',
		privateMethod = function(){
			console.log('private method');
		};

	return {
		publicVariable : privateVariable,
		publicMethod : privateMethod
	}
}( myModule || {} ));