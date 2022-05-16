/**********************************************************************
 *
 * keyLang/obj.js
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
		"kWUtils/value/i18n/obj"
	],
	function
	(
		i18n
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function keyLang()
		{
			//console.log("html::constructor");
			
			this.m_sKWExt		= "keyLang";
		}

		keyLang.sKWKey = "kwKeyLang";

		keyLang.prototype = new i18n();
		keyLang.prototype.constructor = keyLang;
		keyLang.constructor = i18n.prototype.constructor;

		keyLang.prototype.check =
			function check() 
		{
			this.m_sKWI18NKey = keyLang.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyLang.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			i18n.prototype.init.call(this);
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

		keyLang.prototype.i18nInitOR =
			function()
		{
			this.klInit();
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

		keyLang.prototype.klInit =
			function klInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return keyLang;

	}
);
