var pubsub = {};

(function( q ){
	var topics = {},
		subUid = -1;

	q.publish = function( topic, args ){
		if( !topics[topic] ){
			return false;
		}

		var subscribers = topics[topic],
			len = subscribers ? subscribers.length : 0;

		while( len-- ){
			subscribers[len].func(topic, args);
		}

		return this;
	}

	q.subscibe = function( topic, func ){
		if( !topics[topic] ){
			topics[topic] = [];
		}

		var token = ( ++subUid ).toString();

		topics[topic].push({
			token: token,
			func: func
		})

		return token;
	}

	q.unsubscibe = function( token ){
		for( var m in topics ){
			if( topic[s] ){
				for( var i = 0, len = topics[m].length; i < len; i++){
					if( topics[m].token == token ){
						topics[m].splice( i, 1 );
						return token;
					}
				}
			}
		}

		return false;
	}
}( pubsub ) );

pubsub.subscibe('example1', function( topics, data ){
	console.log( topics + " : " + data );
})

pubsub.publish('example1', 'hello world!');
pubsub.publish('example1', ['test', 'a', 'b', 'c']);
pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello'}]);