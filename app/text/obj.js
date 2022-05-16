/**********************************************************************
 *
 * text/obj.js
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
		"./lang/obj",
		"./map/obj",
		"kWStat/globals",
		"kWMVC/obj",
		"kWUtils/jsonp/obj",
		"kWStat/validate"
	],
	function
	(
		lang,
		map,
		globalsKW,
		mvc,
		jsonp,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function text()
		{
			//console.log("text::constructor")
			
			this.m_sKWExt		    = "text";
			
			this.m_kWCBContext		= null;
			this.m_kWJson		    = null;
			this.m_kWLang		    = null;
			this.m_kWMap			= null;
			this.m_kWCBMethod		= null;

			this.m_sKWFileLang		= null;
			this.m_sKWTextLang		= null;

			this.m_bKWHasView       = false;

			this.m_bKWIsReady       = false;
		}

		text.prototype = new mvc();
		text.prototype.constructor = text;
		text.constructor = mvc.prototype.constructor;
		
		text.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);

			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWFileLang))
			{
				console.error(this.kWLogInvalid("m_sKWFileLang"));
			}

			if (!validate.isNotNull(this.m_kWCBContext))
			{
				console.error(this.kWLogInvalid("m_kWCBContext"));
			}

			if (!validate.isNotNull(this.m_kWCBMethod))
			{
				console.error(this.kWLogInvalid("m_kWCBContext"));
			}
		};

		text.prototype.init = 
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

		text.prototype.isKWReady =
			function(obj)
		{
			return this.m_bKWIsReady;
		};

		text.prototype.setKWContext =
			function(obj)
		{
			this.m_kWCBContext = obj;
		};

		text.prototype.setKWFileLang =
			function(sVal)
		{
			this.m_sKWFileLang = sVal;
		};

		text.prototype.setKWMethod =
			function(obj)
		{
			this.m_kWCBMethod = obj;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

		text.prototype.callback = function(view) 
		{
			this.textLoaded(view);
		};
		
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		text.prototype.mvcInitOR = function()
		{
			this.textInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		text.prototype.textCallBack =
			function textCallBack()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWCBContext))
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWCBContext] invalid");
			}

			if (!validate.isNotNull(this.m_kWCBMethod))
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWCBMethod] invalid");
			}

			this.m_kWCBMethod.call(this.m_kWCBContext);
		};

		text.prototype.textCreateLang =
			function textCreateLang() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLang))
			{
				//console.log(this.kWLogRepeated());
			}
			
			this.m_kWLang = new lang();
			
			this.m_kWLang.check();
			this.m_kWLang.init();
		};
		
		text.prototype.textCreateMap = 
			function textCreateMap() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMap))
			{
				//console.log(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				//console.log(this.kWLogInvalid("m_kWView"));
			}
			
			if (!validate.isString(this.m_sKWTextLang))
			{
				//console.log(this.kWLogInvalid("m_sKWTextLang"));
			}
			
			this.m_kWMap = new map();
			
			this.m_kWMap.setKWLang(this.m_sKWTextLang);
			this.m_kWMap.setKWText(this.m_kWView);
			
			this.m_kWMap.check();
			this.m_kWMap.init();
		}
		
		text.prototype.textInit = 
			function textInit()
		{
			//console.log(this.kWLogCalled());
			
			this.textCreateLang();
			this.textRetrieveLang();
			this.textRetrieveView();
		};

		text.prototype.textLoaded = 
			function textLoaded(view)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(view))
			{
				//console.log(this.kWLogInvalid("view"));
			}
			
			this.m_kWView = view;
			
			this.textCreateMap();
			this.textStoreMap();

			this.m_bKWIsReady = true;

			this.textCallBack();
		};
		
		text.prototype.textRetrieveLang =
			function textRetrieveLang() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWTextLang))
			{
				//console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWLang))
			{
				//console.error(this.kWLogInvalid("m_kWLang"));
			}
			
			this.m_sKWTextLang = this.m_kWLang.getKWLang();
			if (!validate.isString(this.m_sKWTextLang))
			{
				//console.error(this.kWLogErrRetrieve("m_kWView"));
			}
		}
		
		text.prototype.textRetrieveView = 
			function textRetrieveView() 
		{
			var sFile = null;
			
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWJson))
			{
				//console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWFileLang))
			{
				console.error(this.kWLogInvalid("m_sKWFileLang"));
			}
			
			if (!validate.isString(this.m_sKWTextLang))
			{
				console.error(this.kWLogInvalid("m_sKWTextLang"));
			}
			
			sFile = this.m_sKWFileLang + "_" + this.m_sKWTextLang + ".json";

			//console.debug(this.kWLogDisplay("sFile", sFile));

			this.m_kWJson = new jsonp();
			
			this.m_kWJson.setKWContext(this);
			this.m_kWJson.setKWMethod(this.callback);
			this.m_kWJson.setKWFile(sFile);
			
			this.m_kWJson.check();
			this.m_kWJson.init();
		}
		
		text.prototype.textStoreMap = 
			function textStoreMap()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(globalsKW))
			{
				//console.error(this.kWLogInvalid("globalsKW"));
			}
			
			if (validate.isNotNull(globalsKW.gText))
			{
				//console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				//console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			globalsKW.gText = this.m_kWMap;
		};
		
		return text;
		
	}
)