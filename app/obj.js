/**********************************************************************
 *
 * app.js
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
		"./persist/obj",
		"./state/obj",
		"./text/obj",
		"./viewBuilder/obj",
		"./viewPort/obj",
		"kWMVC/obj",
		"kWMVC/viewMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		persist,
		state,
		text,
		viewBuilder,
		viewPort,
		mvc,
		viewMVC,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function app() 
		{
			//console.log("app::constructor");

			this.m_sKWExt		    = "app";
			this.m_sKWID		    = "app";
			
			this.m_sKWFile		    = "resources/views/app.json";
			this.m_sKWFileLang	    = "resources/lang/dialog";

			this.m_sKWKeyDate		= "date";
			this.m_sKWKeySubVersion	= "subVersion";
			this.m_sKWKeyVersion	= "version";

			this.m_kWPersist	    = null;
			this.m_kWDom		    = null;
			this.m_kWText		    = null;
 			this.m_kWViewBuilder	= null;
			this.m_kWViewPort		= null;

			this.m_sKWDate          = null;
			this.m_sKWSubVersion    = null;
			this.m_sKWVersion       = null;

			this.m_bKWHasView       = false;
		}

		app.prototype = new mvc();
		app.prototype.constructor = app;
		app.constructor = mvc.prototype.constructor;
		
		app.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWFile))
			{
				console.error(this.kWLogInvalid("m_sKWFile"));
			}

			if (!validate.isString(this.m_sKWKeyDate))
			{
				console.error(this.kWLogInvalid("m_sKWKeyDate"));
			}

			if (!validate.isString(this.m_sKWKeySubVersion))
			{
				console.error(this.kWLogInvalid("m_sKWKeySubVersion"));
			}

			if (!validate.isString(this.m_sKWKeyVersion))
			{
				console.error(this.kWLogInvalid("m_sKWKeyVersion"));
			}
		};

		app.prototype.init = 
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

		app.prototype.callBackViewBuilder =
			function()
		{
			this.appRetrieveView();
		};

		app.prototype.callBackText =
			function()
		{
			this.appCreate();
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		app.prototype.kWStateChanged =
			function(e)
		{
			this.appStateChanged(e);
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		app.prototype.mvcInitOR = function()
		{
			this.appInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
		app.prototype.appCreatePersistOR  = 
			function appCreatePersistOR()
		{
			return new persist();
		};

		app.prototype.appCreateStateOR  =
			function appCreateStateOR()
		{
			return new state();
		};

		app.prototype.appInitOR =
			function appInitOR()
		{
			console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		app.prototype.appCompleteInit =
			function appCompleteInit()
		{
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(this.m_kWViewBuilder))
			{
				console.error(this.kWLogInvalid("m_kWViewBuilder"));
			}

			if(!validate.isNotNull(this.m_kWText))
			{
				console.error(this.kWLogInvalid("m_kWText"));
			}

			if (!this.m_kWText.isKWReady())
			{
				//console.debug(this.kWLogStatus("text is not ready"));
				return;
			}
 			//console.debug(this.kWLogStatus("text is ready"));

			if (!this.m_kWViewBuilder.isKWReady())
			{
				//console.debug(this.kWLogStatus("viewBuilder is not ready"));
				return;
			}
			//console.debug(this.kWLogStatus("viewBuilder is ready"));

			this.appCreateViewPort();
			this.appCreatePersist();
			this.appCreateState();

			this.appInitOR();

			this.appCreateBody();
		};

		app.prototype.appCreate =
			function appCreate()
		{
			//console.log(this.kWLogCalled());

			this.appCompleteInit();
		};

		app.prototype.appCreateBody =
			function appCreateBody()
		{
			//console.log(this.kWLogCalled());

			if (this.m_kWBody)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			this.m_kWBody = this.appCreateBodyOR();
			if(!validate.isNotNull(this.m_kWBody))
			{
				console.error(this.kWLogInvalid("m_kWBody"));
			}

			this.m_kWBody.setKWIDParent(this.m_sKWID);
			this.m_kWBody.setKWViewParent(this.m_kWView);

			this.m_kWBody.check();
			this.m_kWBody.init();

			this.kWAddChild(this.m_kWBody);
		};

		app.prototype.appCreatePersist =
			function appCreatePersist()
		{
			//console.log(this.kWLogCalled());

			if (this.m_kWPersist)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			this.m_kWPersist = this.appCreatePersistOR();
			if(!validate.isNotNull(this.m_kWPersist))
			{
				console.error(this.kWLogInvalid("m_kWPersist"));
			}

			this.m_kWPersist.setKWIDParent(this.m_sKWID);
			this.m_kWPersist.setKWViewParent(this.m_kWView);

			this.m_kWPersist.check();
			this.m_kWPersist.init();

			this.kWAddChild(this.m_kWPersist);
		};

		app.prototype.appCreateState =
			function appCreateState() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_kWState)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_kWState = this.appCreateStateOR();
			if(!validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogErrCreate("m_kWState"));
			} 
			
			this.m_kWState.setKWIDParent(this.m_sKWID);
			this.m_kWState.setKWViewParent(this.m_kWView);
			
			this.m_kWState.check();
			this.m_kWState.init();

			this.kWAddChild(this.m_kWState);
		};

		app.prototype.appCreateText =
			function appCreateText()
		{
			//console.log(this.kWLogCalled());

			if(this.m_kWText)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if(!validate.isString(this.m_sKWFileLang))
			{
				console.error(this.kWLogInvalid("m_sKWFileLang"));
			}

			if(!validate.isFunction(this.callBackText))
			{
				console.error(this.kWLogInvalid("callBackText"));
			}

			this.m_kWText = new text();

			this.m_kWText.setKWContext(this);
			this.m_kWText.setKWIDParent(this.m_sKWID);
			this.m_kWText.setKWFileLang(this.m_sKWFileLang);
 			this.m_kWText.setKWMethod(this.callBackText);

			this.m_kWText.check();
			this.m_kWText.init();

			this.kWAddChild(this.m_kWText);
		};

		app.prototype.appCreateViewBuilder =
			function appCreateViewBuilder()
		{
			//console.log(this.kWLogCalled());

			if(this.m_kWViewBuilder)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if(!validate.isString(this.m_sKWFile))
			{
				console.error(this.kWLogInvalid("m_sKWFile"));
			}

			this.m_kWViewBuilder = new viewBuilder();

			this.m_kWViewBuilder.setKWContext(this);
			this.m_kWViewBuilder.setKWMethod(this.callBackViewBuilder);
			this.m_kWViewBuilder.setKWIDParent(this.m_sKWID);
			this.m_kWViewBuilder.setKWFile(this.m_sKWFile);

			this.m_kWViewBuilder.check();
			this.m_kWViewBuilder.init();

			this.kWAddChild(this.m_kWViewBuilder);
		};

		app.prototype.appCreateViewPort =
			function appCreateViewPort()
		{
			//console.log(this.kWLogCalled());

			if(this.m_kWViewPort)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWViewPort = new viewPort();

			this.m_kWViewPort.setKWIDParent(this.m_sKWID);

			this.m_kWViewPort.check();
			this.m_kWViewPort.init();

			this.kWAddChild(this.m_kWViewPort);
		};

		app.prototype.appInit = function appInit()
		{
            //console.log(this.kWLogCalled());
			
			this.appCreateText();

			this.appCreateViewBuilder();
		};

		app.prototype.appRetrieveDate =
			function appRetrieveDate()
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWDate))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isString(this.m_sKWKeyDate))
			{
				console.error(this.kWLogInvalid("m_sKWKeyDate"));
			}

			this.m_sKWDate = this.getKWViewText(this.m_sKWKeyDate);
			if (!validate.isString(this.m_sKWDate))
			{
				console.error(this.kWLogErrRetrieve("m_sKWDate"));
			}

			//console.debug(this.kWLogDisplay("m_sKWDate", this.m_sKWDate));
		};

		app.prototype.appRetrieveInfo =
			function appRetrieveInfo()
		{
			this.appRetrieveDate();
			this.appRetrieveSubVersion();
			this.appRetrieveVersion();
		};

		app.prototype.appRetrieveSubVersion =
			function appRetrieveSubVersion()
			{
				//console.log(this.kWLogCalled());

				if (validate.isString(this.m_sKWSubVersion))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWKeySubVersion))
				{
					console.error(this.kWLogInvalid("m_sKWKeySubVersion"));
				}

				this.m_sKWSubVersion = this.getKWViewText(this.m_sKWKeySubVersion);
				if (!validate.isString(this.m_sKWSubVersion))
				{
					console.error(this.kWLogErrRetrieve("m_sKWSubVersion"));
				}

				//console.debug(this.kWLogDisplay("m_sKWSubVersion", this.m_sKWSubVersion));
			};

		app.prototype.appRetrieveVersion =
			function appRetrieveVersion()
			{
				//console.log(this.kWLogCalled());

				if (validate.isString(this.m_sKWVersion))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWKeyVersion))
				{
					console.error(this.kWLogInvalid("m_sKWKeyVersion"));
				}

				this.m_sKWVersion = this.getKWViewText(this.m_sKWKeyVersion);
				if (!validate.isString(this.m_sKWVersion))
				{
					console.error(this.kWLogErrRetrieve("m_sKWVersion"));
				}

				//console.debug(this.kWLogDisplay("m_sKWVersion", this.m_sKWVersion));
			};

		app.prototype.appRetrieveView =
			function appRetrieveView()
		{
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(this.m_kWViewBuilder))
			{
				console.error(this.kWLogInvalid("m_kWViewBuilder"));
			}

			this.m_kWView = this.m_kWViewBuilder.getView();
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogErrorRetrieve("m_kWView"));
			}

			this.appRetrieveInfo();

			this.appCompleteInit();
		};

		app.prototype.appStart =
			function appStart() 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWPersist))
			{
				console.error(this.kWLogInvalid("m_kWPersist"));
			}
			
			this.m_kWPersist.start();
		};
		
		app.prototype.appStateChanged = 
			function appStateChanged(e) 
		{
			//console.log(this.kWLogCalled());
            
			if (!validate.isNotNull(this.m_kWPersist))
			{
				console.error(this.kWLogInvalid("m_kWPersist"));
			}
			
			this.m_kWPersist.kWStateChanged(e);
		};

		return app;
		
	}
);