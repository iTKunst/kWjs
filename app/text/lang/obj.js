/**********************************************************************
 *
 * lang/obj.js
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
		"kWStat/validate"
	],
	function
	(
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function lang()
		{
			//console.log("lang::constructor")

			this.m_sKWLang = null;
		}

		lang.prototype.check = function()
		{
			//console.log("lang::check")
		};

		lang.prototype.init = function()
		{
			 //console.log("lang::init")
			 this.langInit();
		};  

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		lang.prototype.getKWLang = function()
		{
			return this.m_sKWLang;
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		lang.prototype.langInit = function()
		{
			//console.log("lang::langInit")

			this.m_sKWLang = document.documentElement.lang;
			if(!validate.isString(this.m_sKWLang))
			{
			   throw new Error("lang::langCreate() [m_sKWLang] error retrieve");
			} 
			
		};
		
		return lang;

	}
)