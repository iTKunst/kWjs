/**********************************************************************
 *
 * fieldset/obj.js
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
		"../../attrs/fieldset/obj",
		"../../view/fieldset/obj",
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function fieldset()
		{
			//console.log("fieldset::constructor");
			
			this.m_sKWTag		= "fieldset";
			
			this.m_sKWForm		= null;
			this.m_sKWName		= null;
			
			this.m_bKWDisabled	= true;
		}

		fieldset.prototype = new elmt();
		fieldset.prototype.constructor = fieldset;
		fieldset.constructor = elmt.prototype.constructor;

		fieldset.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		fieldset.prototype.init =
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

		fieldset.prototype.setKWDisabled =
			function(bVal)
		{
			this.m_bKWDisabled = bVal;
			this.fsSetDisabled(bVal)
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		fieldset.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.fsCreateAttrs(); 
		};
		
		fieldset.prototype.elmtCreateViewOR = 
			function()
		{
			return this.fsCreateView();
		};
		
		fieldset.prototype.elmtInitOR = 
			function()
		{
			this.fsInit();
		};
		
		fieldset.prototype.elmtRetrieveOR = 
			function()
		{
			this.fsRetrieve();
		};
		
		fieldset.prototype.mvcEnableOR =
			function()
		{
			this.fsEnable();
		};

		fieldset.prototype.mvcDisableOR =
			function()
		{
			this.fsDisable();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		fieldset.prototype.fsDisableOR =
			function fsDisableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		fieldset.prototype.fsEnableOR =
			function fsEnableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		fieldset.prototype.fsInitOR = 
			function fsInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		fieldset.prototype.fsCreateAttrs = 
			function fsCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWName(this.m_sKWName);
			
			return theAttrs;
		};

		fieldset.prototype.fsCreateView = 
			function fsCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		fieldset.prototype.fsDisable =
			function fsDisable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(true);
			this.fsDisableOR();
		};

		fieldset.prototype.fsEnable =
			function fsEnable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(false);
			this.fsEnableOR();
		};

		fieldset.prototype.fsInit =
			function fsInit()
		{
			//console.log(this.kWLogCalled());
			this.fsInitOR();
		};
		
		fieldset.prototype.fsRetrieve = 
			function fsRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.fsRetrieveDisabled();
			this.fsRetrieveForm();
			this.fsRetrieveName();
		};
		
		fieldset.prototype.fsRetrieveDisabled = 
			function fsRetrieveDisabled()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDisabled = bVal;
				//console.debug(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};
		
		fieldset.prototype.fsRetrieveForm = 
			function fsRetrieveForm()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWForm();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWForm = sValue;
				//console.log(this.kWLogDisplay("m_sKWForm", this.m_sKWForm));
			}

		};
		
		fieldset.prototype.fsRetrieveName = 
			function fsRetrieveName()
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
		
		fieldset.prototype.fsSetDisabled =
			function fsSetDisabled()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				return
			}

			this.m_kWAttrs.setKWDisabled(this.m_bKWDisabled);
		};

		return fieldset;

	}
);
