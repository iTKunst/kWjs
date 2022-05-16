/**********************************************************************
 *
 * idNumeric/obj.js
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
		"kWUtils/value/simpleNum/obj",
		"kWStat/validate"
	],
	function
	(
		simpleNum,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function idNumeric()
		{
			//console.log("idNumeric::constructor");

			this.m_sKWExt = "idNumeric";
		}

		idNumeric.sKWKey = "kwIDNumeric";

		idNumeric.prototype = new simpleNum();
		idNumeric.prototype.constructor = idNumeric;
		idNumeric.constructor = simpleNum.prototype.constructor;

		idNumeric.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= idNumeric.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		idNumeric.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleNum.prototype.init.call(this);
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

		idNumeric.prototype.snInitOR =
			function()
		{
			this.idnInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overridNumerices)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		idNumeric.prototype.idnInit =
			function idnInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue))
			}
		};
		
		return idNumeric;

	}
);
