/**********************************************************************
 *
 * viewVB/obj.js
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
		"kWUtils/jsonp/obj",
		"kWUtils/view/obj",
		"kWStat/validate"
	],
	function
	(
		jsonp,
		view,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function viewVB() 
		{
			this.m_sKWKeyFileChild	= "kwFileChild";

			this.m_kWAjax			= null;
			this.m_kWCBContext		= null;
			this.m_kWCBMethod		= null;
			this.m_kWParent			= null;
			this.m_kWJSONParent     = null;

			this.m_sKWFile			= null;
			this.m_sKWFileChild		= null;
		}

		viewVB.prototype = new view();
		viewVB.prototype.constructor = viewVB;
		viewVB.constructor = view.prototype.constructor;

		viewVB.prototype.check = 
			function check() 
		{
			view.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWCBContext))
			{
				//console.error(this.kWLogInvalid("m_kWCBContext"));
			}

			if (!validate.isNotNull(this.m_kWCBMethod))
			{
				//console.error(this.kWLogInvalid("m_kWCBContext"));
			}
			
			if (!validate.isString(this.m_sKWKeyFileChild))
			{
				console.error(this.kWLogInvalid("m_sKWKeyFileChild"));
			}
		};

		viewVB.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			view.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		viewVB.prototype.setKWContext =
			function(obj)
		{
			this.m_kWCBContext = obj;
		};
		
		viewVB.prototype.setKWFile =
			function(sVal)
		{
			this.m_sKWFile = sVal;
		};

		viewVB.prototype.setKWJSON =
			function(obj)
		{
			this.m_kWJSON = obj;
		};

		viewVB.prototype.setKWMethod =
			function(obj)
		{
			this.m_kWCBMethod = obj;
		};
		
		viewVB.prototype.setKWJsonParent =
			function setKWJsonParent(obj)
		{
			this.m_kWJSONParent = obj;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

		viewVB.prototype.vvbCallBack =
			function(data) 
		{
			this.vvbHandleCB(data);
		};
		
		viewVB.prototype.vvbCBChild = 
			function(data) 
		{
			this.vvbHandleCBChild(data);
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

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		viewVB.prototype.viewInitOR =
			function()
		{
			this.vvbInit();
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

		viewVB.prototype.vvbCallOwner =
			function vvbCallOwner()
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

		viewVB.prototype.vvbHandleCB =
			function vvbHandleCB(data)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(data))
			{
				console.error(this.kWLogInvalid("data"));
			}
			
			this.setKWJSON(data);
		
			this.vvbCallOwner();
		};
		
		viewVB.prototype.vvbHandleCBChild =
			function vvbHandleCBChild(data)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(data))
			{
				console.error(this.kWLogInvalid("data"));
			}
			
			this.m_kWJSON = data;
			
			this.viewCreate();
			this.viewInitOR();
			
			if (!this.m_kWCBContext)
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWCBContext] invalid");
			}
			
			if (!this.m_kWCBMethod)
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWCBMethod] invalid");
			}
			
			this.m_kWCBMethod.call(this.m_kWCBContext);
		};
		
		viewVB.prototype.vvbInit =
			function vvbInit()
		{
			//console.log(this.kWLogCalled());

			this.vvbLoadAjax();
		}

		viewVB.prototype.vvbLoadAjax =
			function vvbLoadAjax()
		{
		 	//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWFile))
			{
				console.error(this.kWLogInvalid("m_sKWFile"));
			}

			if (!validate.isFunction(this.vvbCallBack))
			{
				console.error(this.kWLogInvalid("vvbCallBack"));
			}

			//console.debug(this.kWLogDisplay("m_sKWFile", this.m_sKWFile));

			this.m_kWAjax = new jsonp();
			
			this.m_kWAjax.setKWContext(this);
			this.m_kWAjax.setKWMethod(this.vvbCallBack);
			this.m_kWAjax.setKWFile(this.m_sKWFile);
			
			this.m_kWAjax.check();
			this.m_kWAjax.init();
		};
		
		return viewVB;

	}
);
