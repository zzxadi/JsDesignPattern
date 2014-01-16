function ObserverList(){
	this.ObserverList = [];
}

ObserverList.prototype.add = function( obj ){
	return this.ObserverList.push( obj );
}

ObserverList.prototype.remove = function( index ){

}

ObserverList.prototype.empty = function(){
	this.ObserverList = [];
}

ObserverList.prototype.length = function(){
	return this.ObserverList.length;
}

ObserverList.prototype.get = function( index ){
	if( index > -1 && index < this.ObserverList.length ){
		return this.observerList[ index ];
	}
}

