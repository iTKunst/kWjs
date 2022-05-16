/**********************************************************************
 *
 * draggable/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 **********************************************************************/

define
(
	[
		"kWUtils/value/simpleBool/obj",
		"kWStat/validate"
	],
	function
	(
		simpleBool,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function draggable() 
		{
			//console.log("draggable::constructor");
			
			this.m_sKWExt		= "draggable";
		}

		draggable.sKWKey = "kwDraggable";

		draggable.prototype = new simpleBool();
		draggable.prototype.constructor = draggable;
		draggable.constructor = simpleBool.prototype.constructor;

		draggable.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = draggable.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		draggable.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleBool.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		draggable.prototype.sbInitOR = 
			function()
		{
			this.draggableInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		draggable.prototype.draggableInit = 
			function draggableInit()
		{
			//console.log(this.kWLogCalled());
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return draggable;

	}
);
