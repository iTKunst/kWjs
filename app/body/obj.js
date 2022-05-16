/**********************************************************************
 *
 * body/obj.js
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
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		mvc,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function body() 
		{
			//console.log("body::constructor");

			this.m_sKWExt		    = "body";
			this.m_sKWID		    = "body";
			
			this.m_kWDom		    = null;
			this.m_kWResize	        = null;
		}

		body.prototype = new mvc();
		body.prototype.constructor = body;
		body.constructor = mvc.prototype.constructor;
		
		body.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		body.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
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
		
		body.prototype.mvcInitOR = function()
		{
			this.bodyInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
		body.prototype.bodyInitOR =
			function bodyInitOR()
		{
			console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		body.prototype.bodyInit = function bodyInit()
		{
            //console.log(this.kWLogCalled());
			
			this.bodyRetrieveBody();

			this.bodyInitOR();
		};

		body.prototype.bodyRetrieveBody =
			function bodyRetrieveBody()
		{
			//console.log(this.kWLogCalled());

			if (validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogRepeated());
			}

			this.m_kWDom = $("body");
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogErrRetrieve("m_kWDom"));
			}
		};

		return body;
		
	}
);