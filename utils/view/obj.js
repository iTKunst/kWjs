/**********************************************************************
 *
 * view/obj.js
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
		"./values/obj",
		"kWLog/obj",
		"kWStat/validate"
	],
	function
	(
		values,
		log,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function view() 
		{
			this.m_kWJSON			= null;
			this.m_kWParent			= null;
			this.m_kWValues         = null;
		}

		view.prototype = new log();
		view.prototype.constructor = view;
		view.constructor = log.prototype.constructor;

		view.prototype.check = 
			function check() 
		{
			log.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		view.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			log.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		view.prototype.getKWJSON =
			function()
		{
			return this.m_kWJSON;
		};
		
		view.prototype.getKWChild =
			function(nVal)
		{
			return this.viewGetChild(nVal);
		};

		view.prototype.getKWCount =
			function()
		{
			return this.m_kWJSON.length;
		};
		
		view.prototype.getKWAsBool =
			function(sVal)
		{
			return this.viewGetAsBool(sVal);
		};
		
		view.prototype.getKWAsI18N =
			function(sVal)
		{
			return this.viewGetAsI18N(sVal);
		};
		
		view.prototype.getKWAsNumeric =
			function(sVal)
		{
			return this.viewGetAsNumeric(sVal);
		};
		
		view.prototype.getKWAsText =
			function(sVal)
		{
			return this.viewGetAsText(sVal);
		};

		view.prototype.getKWValueForKey =
			function(sVal)
		{
			return this.viewGetValueForKey(sVal);
		};

		view.prototype.setKWJSON =
			function(obj)
		{
			this.m_kWJSON = obj;
		};

		view.prototype.setKWParent =
			function(obj)
		{
			this.m_kWParent = obj;
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

		view.prototype.kWAddValue =
			function(obj)
		{
			this.viewAddValue(obj);
		};

		view.prototype.kWDelete =
			function()
		{
			this.viewDelete();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		view.prototype.uBLInitOR = 
			function()
		{
			this.viewInit();
		};
		
		view.prototype.uBLRetrieveIDParentOR = 
			function()
		{
			this.viewRetrieveIDParent();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		view.prototype.viewCreateOR =
			function viewCreateOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		view.prototype.viewDeleteOR =
			function viewDeleteOR()
		{
			console.error(this.kWLogNotImpl());
		};

		view.prototype.viewInitOR =
			function viewInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		view.prototype.viewAddValue =
			function viewAddValue(obj)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValues))
			{
				console.error(this.kWLogInvalid("m_kWValues"));
			}

			if (!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid("obj"));
			}

			this.m_kWValues.kWAddValue(obj);
		};

		view.prototype.viewCreate =
			function viewCreate()
		{
			//console.log(this.kWLogCalled());
			this.viewCreateOR();
		};

		view.prototype.viewCreateValues=
			function viewCreateValues()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWValues))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWValues = new values();

			this.m_kWValues.setKWIDParent(this.m_sKWID);

			this.m_kWValues.check();
			this.m_kWValues.init();
		};

		view.prototype.viewDelete =
			function viewDelete()
		{
			//console.log(this.kWLogCalled());
			if (!validate.isNotNull(this.m_kWValues))
			{
				return;
			}

			this.m_kWValues.kWDelete();

			this.viewDeleteOR();
		};

		view.prototype.viewGetAsBool =
			function viewGetAsBool(sKey)
		{
			var bValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			bValue = this.viewGetValueForKey(sKey);
			if (validate.isBool(bValue))
			{
				//console.debug(this.kWLogDisplay(sKey, bValue));
			}
			
			return bValue;
		};
		
		view.prototype.viewGetChild = 
			function viewGetChild(nVal)
		{
			var child = null;
			var json  = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNumberNotNeg(nVal))
			{
				console.error(this.kWLogInvalid("nVal"));
			}
			
			if (!validate.isNotNull(this.m_kWJSON))
			{
				console.error(this.kWLogInvalid("m_kWJSON"));
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			json = this.m_kWJSON[nVal];
			if (!validate.isNotNull(json))
			{
				console.error(this.kWLogErrRetrieve("json"));
			}
			
			//console.debug(this.kWLogDisplay("nVal", nVal));
			
			child = new view();
			
			child.setKWJSON(json);
			child.setKWID(this.m_sKWID + nVal);
			
			child.check();
			child.init();
			
			return child;
		};
		
		view.prototype.viewGetAsI18N = 
			function viewGetAsI18N(sKey)
		{
			var sValue      = null;
            var sTextKey    = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			sTextKey = this.getKWValueForKey(sKey);
			if (!validate.isString(sTextKey))
			{
                return;
			}
            
			//console.debug(this.kWLogDisplay(sKey, sTextKey));
            
			sValue = this.getKWTextKey(sTextKey);
			if (!validate.isString(sValue))
			{
 				console.error(this.kWLogErrRetrieve("sValue"));
			}
            
			//console.debug(this.kWLogDisplay(sKey, sValue));
 			
			return sValue;
		};
		
		view.prototype.viewGetAsNumeric = 
			function viewGetAsNumeric(sKey)
		{
			var nValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			nValue = this.viewGetValueForKey(sKey);
			if (validate.isNumberNotNeg(nValue))
			{
				//console.debug(this.kWLogDisplay(sKey, nValue));
			}
			
			return nValue;
		};
		
		view.prototype.viewGetAsText = 
			function viewGetAsText(sKey)
		{
			var sValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			sValue = this.viewGetValueForKey(sKey);
			if (validate.isString(sValue))
			{
				//console.debug(this.kWLogDisplay(sKey, sValue));
			}
			
			return sValue;
		};

		view.prototype.viewGetValueForKey =
			function viewGetValueForKey(sKey)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}

			if (!validate.isNotNull(this.m_kWJSON))
			{
				console.error(this.kWLogInvalid("m_kWJSON"));
			}

			return this.m_kWJSON[sKey];
		};

		view.prototype.viewInit =
			function viewInit()
		{
			//console.log(this.kWLogCalled());

			this.viewLoad();
			this.viewCreateValues();
			this.viewCreate();
			this.viewInitOR();
		};
		
		view.prototype.viewLoad =
			function viewLoad()
		{
			var jsonParent  = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWJSON))
			{
				return;
			}
			
			if (!validate.isNotNull(this.m_kWParent))
			{
				return;
			}
			
			if (!validate.isString(this.m_sKWExt))
			{
				console.error(this.kWLogInvalid("m_sKWExt"));
			}
			
			if (!validate.isFunction(this.m_kWParent.getKWJSON))
			{
				console.error(this.kWLogInvalid("getKWJSON"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKWExt", this.m_sKWExt));
			
			jsonParent = this.m_kWParent.getKWJSON();
			if (!validate.isNotNull(jsonParent))
			{
				console.error(this.kWLogErrRetrieve("jsonParent"));
			}
			
			this.m_kWJSON = jsonParent[this.m_sKWExt];
			if (!validate.isNotNull(this.m_kWJSON))
			{
				console.error(this.kWLogDisplay("m_sKWExt", this.m_sKWExt));
				console.error(this.kWLogErrRetrieve("m_kWJSON"));
			}
			
		};

		return view;

	}
);
