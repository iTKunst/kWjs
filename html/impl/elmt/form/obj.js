/**********************************************************************
 *
 * form/obj.js
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
		"../../attrs/form/obj",
		"../../view/form/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function form()
		{
			//console.log("form::constructor");

			this.m_sKWTag				= "form";
			
			this.m_sKWAcceptCharset     = null;
			this.m_sKWAction			= null;
			this.m_sKWEncType			= null;
			this.m_sKWMethod			= null;
			this.m_sKWName			    = null;
			this.m_sKWTarget			= null;
			
			this.m_bNoValiate		    = null;
			this.m_bKWAutoComplete	    = null;
			
		}

		form.prototype = new elmt();
		form.prototype.constructor = form;
		form.constructor = elmt.prototype.constructor;

		form.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		form.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		form.prototype.setKWAcceptCharset =
			function(sVal)
		{
			this.m_sKWAcceptCharset = sVal;
		};

		form.prototype.setKWAction =
			function(sVal)
		{
			this.m_sKWAction = sVal;
		};

		form.prototype.setKWAutoComplete =
			function(bVal)
		{
			this.m_bKWAutoComplete = bVal;
		};

		form.prototype.setKWEncType =
			function(sVal)
		{
			this.m_sKWEncType = sVal;
		};

		form.prototype.setKWMethod =
			function(sVal)
		{
			this.m_sKWMethod = sVal;
		};

		form.prototype.setKWName =
			function(sVal)
		{
			this.m_sKWName = sVal;
		};

		form.prototype.setNoValiate = 
			function(bVal)
		{
			this.m_bKWNoValidate = bVal;
		};

		form.prototype.setKWTarget =
			function(sVal)
		{
			this.m_sKWTarget = sVal;
		};

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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		form.prototype.formInitOR = 
			function formInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		form.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.formCreateAttrs(); 
		};
		
		form.prototype.elmtCreateViewOR = 
			function()
		{
			return this.formCreateView();
		};
		
		form.prototype.elmtInitOR = 
			function()
		{
			this.formInit();
		};
		
		form.prototype.elmtRetrieveOR =
			function()
		{
			this.formRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		form.prototype.formCreateAttrs = 
			function formCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWAcceptCharset(this.m_sKWAcceptCharset);
			theAttrs.setKWAction(this.m_sKWAction);
			theAttrs.setKWAutoComplete(this.m_bKWAutoComplete);
			theAttrs.setKWEncType(this.m_sKWEncType);
			theAttrs.setKWMethod(this.m_sKWMethod);
			theAttrs.setKWName(this.m_sKWName);
			theAttrs.setKWNoValidate(this.m_bKWNoValidate);
			theAttrs.setKWTarget(this.m_sKWTarget);
			
			return theAttrs;
		};

		form.prototype.formCreateView = 
			function formCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		form.prototype.formInit = 
			function formInit()
		{
			//console.log(this.kWLogCalled());
			this.formInitOR();
		};

		form.prototype.formRetrieve = 
			function formRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.formRetrieveAcceptCharset();
			this.formRetrieveAction();
			this.formRetrieveEncType();
			this.formRetrieveAutoComplete();
			this.formRetrieveMethod();
			this.formRetrieveName();
			this.formRetrieveNoValidate();
			this.formRetrieveTarget();
		};

		form.prototype.formRetrieveAcceptCharset = 
			function formRetrieveAcceptCharset()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAcceptCharset();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWAcceptCharset = sValue;
				//console.log(this.kWLogDisplay("m_sKWAcceptCharset", this.m_sKWAcceptCharset));
			}
		};
		
		form.prototype.formRetrieveAction = 
			function formRetrieveAction()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAction();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWAction = sValue;
				//console.log(this.kWLogDisplay("m_sKWAction", this.m_sKWAction));
			}
		};
		
		form.prototype.formRetrieveEncType = 
			function formRetrieveEncType()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWEncType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWEncType = sValue;
				//console.log(this.kWLogDisplay("m_sKWEncType", this.m_sKWEncType));
			}
		};
		
		form.prototype.formRetrieveAutoComplete = 
			function formRetrieveAutoComplete()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoComplete();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWAutoComplete = bVal;
				//console.error(this.kWLogDisplay("m_bKWAutoComplete", this.m_bKWAutoComplete));
			}
		};
		
		form.prototype.formRetrieveMethod = 
			function formRetrieveMethod()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMethod();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWMethod = sValue;
				//console.log(this.kWLogDisplay("m_sKWMethod", this.m_sKWMethod));
			}
		};
		
		form.prototype.formRetrieveName = 
			function formRetrieveName()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWName = sValue;
				//console.log(this.kWLogDisplay("m_sKWName", this.m_sKWName));
			}
		};
		
		form.prototype.formRetrieveNoValidate = 
			function formRetrieveNoValidate()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWNoValidate();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWNoValidate = bVal;
				//console.error(this.kWLogDisplay("m_bKWNoValidate", this.m_bKWNoValidate));
			}
		};
		
		form.prototype.formRetrieveTarget = 
			function formRetrieveTarget()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWTarget();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWTarget = sValue;
				//console.log(this.kWLogDisplay("m_sKWTarget", this.m_sKWTarget));
			}
		};
		
		return form;

	}
);
