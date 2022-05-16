/**********************************************************************
 *
 * viewBuilder/obj.js
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
		"./children/obj",
		"./viewVB/obj",
		"kWUtils/jsonp/obj",
		"kWLog/obj",
		"kWStat/validate"
	],
	function
	(
		children,
		view,
		jsonp,
		log,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function viewBuilder()
		{
			this.m_sKWExt       	= "vb";

			this.m_kWAjax			= null;
			this.m_kWCBContext		= null;
			this.m_kWChildren		= null;
			this.m_kWCBMethod		= null;
			this.m_kWJson			= null;
			this.m_kWJsonParent		= null;
			this.m_kWView           = null;
			this.m_kWViewChild      = null;

			this.m_sKWFile      	= null;

			this.m_bKWIsReady       = false;
		}

		viewBuilder.prototype = new log();
		viewBuilder.prototype.constructor = viewBuilder;
		viewBuilder.constructor = log.prototype.constructor;

		viewBuilder.prototype.check = 
			function check() 
		{
			log.prototype.check.call(this);

			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWCBContext))
			{
				console.error(this.kWLogInvalid("m_kWCBContext"));
			}

			if (!validate.isNotNull(this.m_kWCBMethod))
			{
				console.error(this.kWLogInvalid("m_kWCBContext"));
			}
			
			if (!validate.isString(this.m_sKWFile))
			{
				console.error(this.kWLogInvalid("m_sKWFile"));
			}
		};

		viewBuilder.prototype.init = 
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

		viewBuilder.prototype.isKWReady =
			function isKWReady()
		{
			return this.m_bKWIsReady;
		};
		
		viewBuilder.prototype.getKWJSON =
			function()
		{
			return this.m_kWJson;
		};

		viewBuilder.prototype.getView =
			function()
		{
			return this.m_kWView;
		};

		viewBuilder.prototype.setKWContext =
			function(obj)
		{
			this.m_kWCBContext = obj;
		};

		viewBuilder.prototype.setKWFile =
			function(sVal)
		{
			this.m_sKWFile = sVal;
		};

		viewBuilder.prototype.setKWJsonParent =
			function(obj)
		{
			this.m_kWJsonParent = obj;
		};

		viewBuilder.prototype.setKWMethod =
			function(obj)
		{
			this.m_kWCBMethod = obj;
		};
		
	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

		viewBuilder.prototype.callbackView =
			function(data)
		{
			this.vbHandleCBView(data);
		};

		viewBuilder.prototype.callbackViewBuilder =
			function()
		{
			this.vbHandleCBViewBuilder();
		};

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

		viewBuilder.prototype.uBLInitOR = 
			function()
		{
			this.vbInit();
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

		viewBuilder.prototype.vbAddChild =
			function vbAddChild(obj)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			if (!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid('obj'));
			}

			this.m_kWChildren.kWAddChild(obj);
		};

		viewBuilder.prototype.vbAreChildrenReady =
			function vbAreChildrenReady()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			this.m_bKWIsReady = this.m_kWChildren.kWIsReady();

			return this.m_bKWIsReady;
		};

		viewBuilder.prototype.vbCallOwner =
			function vbCallOwner()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWCBContext))
			{
			   console.error(this.kWLogInvalid("m_kWCBContext"));
			}

			if (!validate.isNotNull(this.m_kWCBMethod))
			{
			   console.error(this.kWLogInvalid("m_kWCBContext"));
			}

			this.m_kWCBMethod.call(this.m_kWCBContext);
		};

		viewBuilder.prototype.vbCreateChildren =
			function vbCreateChildren()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWChildren = new children();
			this.m_kWChildren.setKWID(this.m_sKWID);

			this.m_kWChildren.check();
			this.m_kWChildren.init();
		};

		viewBuilder.prototype.vbCreateView =
			function vbCreateView()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if (!validate.isFunction(this.callbackView))
			{
				console.error(this.kWLogInvalid("callbackView"));
			}

			this.m_kWView = new view();

			if (!validate.isFunction(this.m_kWView.setKWContext))
			{
				console.error(this.kWLogInvalid("setKWContext"));
			}

			this.m_kWView.setKWContext(this);
			this.m_kWView.setKWFile(this.m_sKWFile);
			this.m_kWView.setKWID(this.m_sKWID);
			this.m_kWView.setKWMethod(this.callbackView);

			this.m_kWView.check();
			this.m_kWView.init();
		};

		viewBuilder.prototype.vbCreateViewBuilder =
			function vbCreateViewBuilder(json, sFile)
		{
			var theViewBuilder = null;

			//console.log(this.kWLogCalled());

			if (!validate.isString(sFile))
			{
				console.error(this.kWLogInvalid("sFile"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if (!validate.isFunction(this.callbackViewBuilder))
			{
				console.error(this.kWLogInvalid("callbackViewBuilder"));
			}

			theViewBuilder = new viewBuilder();

			if (!validate.isFunction(theViewBuilder.setKWContext))
			{
				console.error(this.kWLogInvalid("setKWContext"));
			}

			theViewBuilder.setKWContext(this);
			theViewBuilder.setKWFile(sFile);
			theViewBuilder.setKWID(sFile);
			theViewBuilder.setKWMethod(this.callbackViewBuilder);
			theViewBuilder.setKWJsonParent(json);

			theViewBuilder.check();
			theViewBuilder.init();

			this.vbAddChild(theViewBuilder);
		};

		viewBuilder.prototype.vbGetChildCount =
			function vbGetChildCount()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			return this.m_kWChildren.getKWLength();
		};

		viewBuilder.prototype.vbHandleCBView =
			function vbHandleCBView()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			this.m_kWJson = this.m_kWView.getKWJSON();
			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogErrRetrieve("m_kWJson"));
			}

			if (!validate.isNotNull(this.m_kWJsonParent))
			{
				this.m_kWJsonParent = {};
			}

			for(sKey in this.m_kWJson)
			{
				jsonVal =  this.m_kWJson[sKey];

				this.m_kWJsonParent[sKey] = this.m_kWJson[sKey];
			}

			this.vbLoadChildren();
		};

		viewBuilder.prototype.vbHandleCBViewBuilder =
			function vbHandleCBViewBuilder()
		{
			//console.log(this.kWLogCalled());

			if (!this.vbAreChildrenReady())
			{
				return;
			}

			this.m_kWView.setKWJSON(this.m_kWJsonParent);

			this.m_bKWIsReady = true;

			this.vbCallOwner();
		};

		viewBuilder.prototype.vbInit =
			function vbInit()
		{
			//console.log(this.kWLogCalled());

			this.vbCreateChildren();
			this.vbCreateView();
		};
		
		viewBuilder.prototype.vbInspectChildren =
			function vbInspectChildren(obj)
		{
			var sKey    = null;

		 	//console.log(this.kWLogCalled());

			if (!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid("obj"));
			}

			for(sKey in obj)
			{
				if (sKey == "kwFileChild")
				{
					//console.debug(this.kWLogDisplay(sKey, jsonVal));
					this.vbCreateViewBuilder(obj, obj[sKey]);
				}
				else
				if (validate.isObject(obj[sKey]))
				{
					//console.debug(this.kWLogDisplay(sKey, "is an object"));
					this.vbInspectChildren(obj[sKey]);
				}
			}
		};

		viewBuilder.prototype.vbLoadChildren =
			function vbLoadChildren()
		{
		 	//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			this.vbInspectChildren(this.m_kWJson);

			if (this.vbGetChildCount() == 0)
			{
				//console.debug(this.kWLogStatus("this is a child file"));
				this.m_bKWIsReady = true;
				this.vbCallOwner();
			}
		};

		return viewBuilder;

	}
);
