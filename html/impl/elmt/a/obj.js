/**********************************************************************
 *
 * a/obj.js
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
		"../../attrs/a/obj",
		"../../view/a/obj",
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

		function a()
		{
			//console.log("a::constructor");

			this.m_sKWTag				= "a";
			
			this.m_bKWIsClickHandled	= true;
			
			this.m_sKWHRef			    = null;
			this.m_sKWHRefLang		    = null;
			this.m_sKWMedia			    = null;
			this.m_sKWRel				= null;
			this.m_sKWTarget			= null;
			this.m_sKWType			    = null;

			this.m_bKWHRefRetrieved     = false;
		}

		a.prototype = new elmt();
		a.prototype.constructor = a;
		a.constructor = elmt.prototype.constructor;

		a.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		a.prototype.init = 
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

		a.prototype.setKWHRef =
			function(sVal)
		{
			this.m_sKWHRef = sVal;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//
	
		a.prototype.aCallback = 
			function(e) 
		{
			var self = null;
			
			//console.log("a::aCallback");

			e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("a::aCallback() [self] invalid"); 
			}

			self.aClick(e);
		};
		
		a.prototype.callbackKeyUp =
			function callbackKeyUp(e)
		{
			var self = null;

			//console.log("text::callbackKeyUp() called");

			e.preventDefault();

			self = $.data(this, "ctlr");
			if (!self)
			{
			    throw new Error("text::callbackKeyUp() [self] invalid");
			}

			self.aHandleKeyUp(e);
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
	
		a.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.aCreateAttrs(); 
		};
		
		a.prototype.elmtCreateViewOR = 
			function()
		{
			return this.aCreateView();
		};
		
		a.prototype.elmtInitOR = 
			function()
		{
			this.aInit();
		};
		
		a.prototype.elmtRetrieveOR = 
			function()
		{
			this.aRetrieve(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		a.prototype.aClickOR = 
			function aClickOR()
		{
			console.error(this.kWLogNotImpl());
		};

		a.prototype.aInitOR = 
			function aInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		a.prototype.aClick = 
			function aClick()
		{
			//console.log(this.kWLogCalled());
			this.aClickOR();
		};

		a.prototype.aCreateAttrs = 
			function aCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWHRef(this.m_sKWHRef);
			theAttrs.setKWHRefLang(this.m_sKWHRefLang);
			theAttrs.setKWMedia(this.m_sKWMedia);
			theAttrs.setKWRel(this.m_sKWRel);
			theAttrs.setKWTarget(this.m_sKWTarget);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};

		a.prototype.aCreateView = 
			function aCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		a.prototype.aHandleEnter =
			function aHandleEnter()
		{
			//console.log(this.kWLogCalled());
			this.aClickOR();
		};

		a.prototype.aHandleKeyUp =
			function aHandleKeyUp(e)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(e))
			{
				console.error(this.kWLogInvalid("e"));
			}

			//console.debug(this.kWLogDisplay("key", e.keyCode))

			if (e.keyCode == "9")
			{
				// this is a tab
				return;
			}

			if (e.keyCode == "13")
			{
				this.aHandleEnter();
			}
			else
			{
				this.inputHandleKeyUpOR(e);
			}
		};

		a.prototype.aInit =
			function aInit()
		{
			//console.log("a::aInit");
			
			this.aSubscribe();
			this.aSubscribeKeyUp();
			this.aInitOR();
		};

		a.prototype.aRetrieve = 
			function aRetrieve()
		{
			//console.log(this.kWLogCalled());

			this.aRetrieveHRef();
			this.aRetrieveHRefLang();
			this.aRetrieveIsClickHandled();
			this.aRetrieveMedia();
			this.aRetrieveRel();
			this.aRetrieveTarget();
		};

		a.prototype.aRetrieveHRef = 
			function aRetrieveHRef()
		{
			//console.log(this.kWLogCalled());

			this.aRetrieveHRefI18N()
			this.aRetrieveHRefRaw();
		};
		
		a.prototype.aRetrieveHRefI18N = 
			function aRetrieveHRefI18N()
		{
			var value = null;
			
			var sValue = null;

			//console.log(this.kWLogCalled());

			if (this.m_bKWHRefRetrieved)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRef();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}

			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWHRef = sValue;
			//console.debug(this.kWLogDisplay("m_sKWHRef", this.m_sKWHRef));
			this.m_bKWHRefRetrieved = true;
		};
		
		a.prototype.aRetrieveHRefLang = 
			function aRetrieveHRefLang()
		{
			var value = null;
			
			var sValue = null;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRefLang();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}

			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWHRefLang = sValue;
			//console.debug(this.kWLogDisplay("m_sKWHRefLang", this.m_sKWHRefLang));
		};
		
		a.prototype.aRetrieveHRefRaw = 
			function aRetrieveHRefRaw()
		{
			var value = null;
			
			var sValue	= null;

			//console.log(this.kWLogCalled());

			if (this.m_bKWHRefRetrieved)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRefRaw();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}

			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return
			}

			this.m_sKWHRef = sValue;

			//console.debug(this.kWLogDisplay("m_sKWHRef", this.m_sKWHRef));
			this.m_bKWHRefRetrieved = true;
		};
		
		a.prototype.aRetrieveIsClickHandled = 
			function aRetrieveIsClickHandled()
		{
			var value   = null;
			
			var bValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWIsClickHandled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bValue = value.getKWValue();
			if (!validate.isBool(bValue))
			{
				return;
			}

			this.m_bKWIsClickHandled = bValue;
			//console.debug(this.kWLogDisplay("m_bKWIsClickHandled", this.m_bKWIsClickHandled));
		};
		
		a.prototype.aRetrieveMedia = 
			function aRetrieveMedia()
		{
			var value   = null;

			var sValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMedia();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWMedia = value.getKWValue();
			//console.debug(this.kWLogDisplay("m_sKWMedia", this.m_sKWMedia));
		};
		
		a.prototype.aRetrieveRel = 
			function aRetrieveRel()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWRel = sValue;
			//console.debug(this.kWLogDisplay("m_sKWRel", this.m_sKWRel));
		};
		
		a.prototype.aRetrieveTarget = 
			function aRetrieveTarget()
		{
			var value = null;

			var sValue = null;	

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
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWTarget = sValue;
			//console.debug(this.kWLogDisplay("m_sKWTarget", this.m_sKWTarget));
		};
		
		a.prototype.aSubscribe = 
			function aSubscribe()
		{
			//console.log(this.kWLogCalled());
			
			if (!this.m_bKWIsClickHandled)
			{
				return;
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.aCallback))
			{
				console.error(this.kWLogInvalid("aCallback"));
			}

			this.m_kWDom.click(this.aCallback);
		};
		
		a.prototype.aSubscribeKeyUp =
			function aSubscribeKeyUp()
			{
				//console.log(this.kWLogCalled());

				if (!validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogInvalid("m_kWDom"));
				}

				if (!validate.isFunction(this.callbackKeyUp))
				{
					console.error(this.kWLogInvalid("callbackKeyUp"));
				}

				this.m_kWDom.keyup(this.callbackKeyUp);
			};

		return a;

	}
);
