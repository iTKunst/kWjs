/**********************************************************************
 *
 * ajax.js
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
        "kWLog/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
        log,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function ajax()
		{
			//console.log("ajax::constructor");

			this.m_sKWExt          = "ajax";

			this.m_sKWType		    = "GET";
			//this.m_sKWContentType	= "application/json; charset=UTF-8";
			this.m_sKWContentType	= "text/plain; charset=UTF-8";
			this.m_sKWDataType	    = "json";

			this.m_kWContext		= null;
			this.m_kWData			= null;
			this.m_kWMethod		    = null;
			this.m_kWOptions		= null;

			this.m_sKWURL			= null;
		};

		ajax.prototype = new log();
		ajax.prototype.constructor = ajax;
		ajax.constructor = log.prototype.constructor;

		ajax.prototype.check =
			function check()
		{
			log.prototype.check.call(this);
            
			//console.log("ajax::check");

			if (!validate.isString(this.m_sKWDataType))
			{
				throw new Error("ajax::check() [m_sKWDataType] invalid");
			}

			if (!validate.isString(this.m_sKWType))
			{
				throw new Error("ajax::check() [m_sKWType] invalid");
			}

			if (!validate.isString(this.m_sKWURL))
			{
				throw new Error("ajax::check() [m_sKWURL] invalid");
			}

		};

		ajax.prototype.init = 
			function init()
		{
			//console.log("ajax::init");
			log.prototype.init.call(this);
		};

//*******************************************************************//
//***																	   
//***		public accessors
//***
//*******************************************************************//

		ajax.prototype.getKWData = function()
		{
			return this.m_kWData;
		};

		ajax.prototype.setKWContext = function(obj)
		{
			this.m_kWContext = obj;
		};

		ajax.prototype.setKWMethod = function(obj)
		{
			this.m_kWMethod = obj;
		};

		ajax.prototype.setKWType = function(sVal)
		{
			this.m_sKWType = sVal;
		};

		ajax.prototype.setKWURL = function(sVal)
		{
			this.m_sKWURL = sVal;
		};

	//*******************************************************************//
	//***
	//***		public callbacks
	//***
	//*******************************************************************//

		ajax.prototype.callbackSuccess =
			function(data)
		{
			//console.log("ajax::callbackSuccess");
			
			this.m_kWData = data;

			this.ajaxSuccess();
		};

		ajax.prototype.callbackError = 
			function(jqXHR, sStatus, error)
		{
			//console.log("ajax::callbackError");

			this.ajaxError(jqXHR, sStatus, error);
		};

	//*******************************************************************//
	//***
	//***		public methods
	//***
	//*******************************************************************//

		ajax.prototype.empty = function()
		{
			this.ajaxEmpty();
		};

		ajax.prototype.execute = function()
		{
			this.ajaxExecute();
		};

		//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		ajax.prototype.uBLInitOR = 
			function()
		{
			this.ajaxInit();
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

		ajax.prototype.ajaxCallback = function ajaxCallback()
		{
			//console.log(this.kWLogCalled());

			if (!this.m_kWData)
			{
				console.error(this.kWLogInvalid("m_kWData"));
			}

			if (!this.m_kWContext)
			{
				console.error(this.kWLogInvalid("m_kWContext"));
			}

			if (!this.m_kWMethod)
			{
				console.error(this.kWLogInvalid("m_kWMethod"));
			}

			this.m_bKWIsLoaded = true;

			this.m_kWMethod.call(this.m_kWContext, this.m_kWData);
		};

		ajax.prototype.ajaxCreateOptions = function ajaxCreateOptions()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWOptions))
			{
				throw new Error("ajax::ajaxCreateOptions() duplicated");
			}

			if (!validate.isString(this.m_sKWDataType))
			{
				throw new Error("ajax::ajaxCreateOptions() [m_sKWDataType] invalid");
			}

			if (!validate.isString(this.m_sKWType))
			{
				throw new Error("ajax::ajaxCreateOptions() [m_sKWType] invalid");
			}

			if (!validate.isString(this.m_sKWURL))
			{
				throw new Error("ajax::ajaxCreateOptions() [m_sKWURL] invalid");
			}

			if (!validate.isString(this.m_sKWContentType))
			{
				throw new Error("ajax::ajaxCreateOptions() [m_sKWContentType] invalid");
			}

			if (!this.callbackError)
			{
				throw new Error("ajax::ajaxCreateOptions() [callbackError] invalid");
			}

			if (!this.callbackSuccess)
			{
				throw new Error("ajax::ajaxCreateDojo() [callbackSuccess] invalid");
			}

			var self = this;

			this.m_kWOptions = [];

			this.m_kWOptions["dataType"] = this.m_sKWDataType;
			this.m_kWOptions["url"] = this.m_sKWURL;
			this.m_kWOptions["type"] = this.m_sKWType;
			this.m_kWOptions["crossdomain"] = true;
			this.m_kWOptions["contentType"] = this.m_sKWContentType;

			this.m_kWOptions["success"] =
				function(data, sStatus, jqXHR)
				{
					self.callbackSuccess(data);
				};

			this.m_kWOptions["error"] =
				function(jqXHR, sStatus, error)
				{
					self.callbackError(jqXHR, sStatus, error);
				};
		};
		ajax.prototype.ajaxError = function ajaxError(jqXHR, sStatus, error)
		{
			//console.log(this.kWLogCalled());
			throw new Error("ajax::ajaxError() error [" + sStatus + "]");
		};

		ajax.prototype.ajaxEmpty = function ajaxEmpty()
		{
			//console.log(this.kWLogCalled());

			this.m_kWData	= null;
			this.m_kWStmt	= null;
		}

		ajax.prototype.ajaxExecute = function ajaxExecute()
		{
			//console.log(this.kWLogCalled());
			this.ajaxRetrieve();
		};

		ajax.prototype.ajaxInit = function ajaxInit()
		{
			//console.log(this.kWLogCalled());
			this.ajaxCreateOptions();
		};

		ajax.prototype.ajaxRetrieve = function ajaxRetrieve()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWOptions))
			{
				throw new Error("ajax::ajaxRetrieve() [m_kWOptions] invalid");
			}

			//console.debug(this.m_kWOptions);

			$.ajax(this.m_kWOptions);
		};
		

		
		ajax.prototype.ajaxSuccess = function ajaxSuccess()
		{
			//console.log(this.kWLogCalled());

			if (!this.m_kWData)
			{
			   throw new Error("ajax::ajaxSuccess() [m_kWData] invalid");
			}

			if (!this.m_kWContext)
			{
				throw new Error("ajax::ajaxSuccess() [m_kWContext] invalid");
			}

			if (!this.m_kWMethod)
			{
				throw new Error("ajax::ajaxSuccess() [m_kWMethod] invalid");
			}

			this.m_kWMethod.call(this.m_kWContext, this.m_kWData);
		};

		return ajax;
			
	}
);
