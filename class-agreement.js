/*:
	@include:
		{
			"class-moment": "Moment"
		}
	@end-include
	
	@module-configuration:
		{
			"moduleName": "editorLinker",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration
*/
Agreement = function Agreement( name ){
	if( this instanceof Agreement ){
		this.name = name;
	}else{
		return new Agreement( name );
	}
};

Agreement.prototype.accepts = function accepts( data ){

};

Agreement.prototype.rejects = function rejects( data ){

};

Agreement.prototype.when = function when( eventName, handler ){
	/*:
		@method-documentation:
			Event name could only be "accepted" or "rejected"
		@end-method-documentation
	*/
};

Agreement.prototype.forget = function forget( eventName ){

};

Agreement.prototype.burn = function burn( ){

};