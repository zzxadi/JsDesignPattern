var validator = {
	types: {},
	messages: [],
	config: {},
	validate: function( data ){
		var i,
			msg,
			type,
			checker,
			result_ok;

		this.messages = [];

		for( i in data ){
			if( data.hasOwnProperty( i ) ){
				type = this.config[i];
				checker = this.types[type];
			
				if( !type ){
					continue;
				}

				if( !checker ){
					throw {
						name: "ValidationError",
						message: "No handler to validate type"
					}
				}

				result_ok = checker.validate( data[i] );

				if( !result_ok ){
					msg = "Invalid value for *" + i + "*, " + checker.instructions;
					this.messages.push(msg);
				}
			}
		}

		return this.hasErrors();
	},

	hasErrors: function(){
		return this.messages.length !== 0;
	}
}

validator.types.isNotEmpty = {
	validate: function( value ){
		return value !== "";
	},
	instructions: "传入的值不能为空"
}

validator.types.isNumber = {
	validate: function( value ){
		return !isNaN( value );
	},
	instructions: '传入的值只能是数字'
}

var data = {
	name: 'zzxadi',
	age: 25
}

validator.config = {
	name: 'isNotEmpty',
	age: 'isNumber'
}

validator.validate( data );

if( validator.hasErrors( data ) ){
	console.log( validator.messages.join("\n") );
}