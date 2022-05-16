/**********************************************************************
 *
 * viewMVC/obj.js
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
		"../value/field/obj",
		"../value/hasModel/obj",
		"../value/id/obj",
		"../value/idNumeric/obj",
		"../value/topicPub/obj",
		"../value/topicPubReady/obj",
		"../value/topicPubResize/obj",
		"../value/topicSub/obj",
		"../value/topicSubReady/obj",
		"../value/topicSubResize/obj",
		"kWUtils/view/obj",
		"kWStat/validate"
	],
	function
	(
		field,
		hasModel,
		id,
		idNumeric,
		topicPub,
		topicPubReady,
		topicPubResize,
		topicSub,
		topicSubReady,
		topicSubResize,
		view,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function viewMVC() 
		{
			this.m_kWField			    = null;
			this.m_kWHasModel		    = null;
			this.m_kWId				    = null;
			this.m_kWIDNumeric		    = null;
			this.m_kWTopicPub			= null;
			this.m_kWTopicPubReady	    = null;
			this.m_kWTopicPubResize	    = null;
			this.m_kWTopicSub			= null;
			this.m_kWTopicSubReady	    = null;
			this.m_kWTopicSubResize	    = null;
		}

		viewMVC.prototype = new view();
		viewMVC.prototype.constructor = viewMVC;
		viewMVC.constructor = view.prototype.constructor;

		viewMVC.prototype.check = 
			function check() 
		{
			view.prototype.check.call(this);
			
			if (!validate.isString(this.m_sKWExt))
			{
				//console.error(this.kWLogInvalid("m_sKWExt"));
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			//console.log(this.kWLogCalled());
		};

		viewMVC.prototype.init =
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

		viewMVC.prototype.getKWField =
			function()
		{
			return this.m_kWField;
		};
		
		viewMVC.prototype.getKWHasModel =
			function()
		{
			return this.m_kWHasModel;
		};

		viewMVC.prototype.getKWIDNumeric =
			function()
		{
			return this.m_kWIDNumeric;
		};
		
		viewMVC.prototype.getKWTopicPub =
			function()
		{
			return this.m_kWTopicPub;
		};
		
		viewMVC.prototype.getKWTopicPubReady =
			function()
		{
			return this.m_kWTopicPubReady;
		};
		
		viewMVC.prototype.getKWTopicPubResize =
			function()
		{
			return this.m_kWTopicPubResize;
		};
		
		viewMVC.prototype.getKWTopicSub =
			function()
		{
			return this.m_kWTopicSub;
		};
		
		viewMVC.prototype.getKWTopicSubReady =
			function()
		{
			return this.m_kWTopicSubReady;
		};

		viewMVC.prototype.getKWTopicSubResize =
			function()
		{
			return this.m_kWTopicSubResize;
		};

		viewMVC.prototype.getKWValueID =
			function()
		{
			return this.m_kWId;
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

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		viewMVC.prototype.viewCreateOR =
			function()
		{
			this.vmvcCreate();
		};

		viewMVC.prototype.viewDeleteOR =
			function()
		{
			this.vmvcDelete();
		};

		viewMVC.prototype.viewInitOR =
			function()
		{
			this.vmvcInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		viewMVC.prototype.vmvcCreateOR =
			function vmvcCreateOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		viewMVC.prototype.vmvcDeleteOR =
			function vmvcDeleteOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		viewMVC.prototype.vmvcInitOR =
			function vmvcInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		viewMVC.prototype.vmvcCreate =
			function vmvcCreate() 
		{
			this.vmvcCreateField();
			this.baseCreateHasModel();
			this.vmvcCreateID();
			this.vmvcCreateIDNumeric();
			this.vmvcCreateTopicPub();
			this.vmvcCreateTopicPubReady();
			this.vmvcCreateTopicPubResize();
			this.vmvcCreateTopicSub();
			this.vmvcCreateTopicSubReady();
			this.vmvcCreateTopicSubResize();
			
			this.vmvcCreateOR();
		};

		viewMVC.prototype.vmvcCreateField =
			function vmvcCreateField()
		{

			var value = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWField))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(field.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWField = new field();

			this.m_kWField.setKWView(this);
			this.m_kWField.setKWIDParent(this.m_sKWID);

			this.m_kWField.check();
			this.m_kWField.init();

			this.kWAddValue(this.m_kWField);
		};

		viewMVC.prototype.baseCreateHasModel =
			function baseCreateHasModel() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHasModel))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(hasModel.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHasModel = new hasModel();
			
			this.m_kWHasModel.setKWView(this);
			this.m_kWHasModel.setKWIDParent(this.m_sKWID);
			
			this.m_kWHasModel.check();
			this.m_kWHasModel.init();

			this.kWAddValue(this.m_kWHasModel);
		};
		
		viewMVC.prototype.vmvcCreateID = 
			function vmvcCreateID() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWId))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(id.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWId = new id();
			
			this.m_kWId.setKWView(this);
			this.m_kWId.setKWIDParent(this.m_sKWID);
			
			this.m_kWId.check();
			this.m_kWId.init();

			this.kWAddValue(this.m_kWId);
		};

		viewMVC.prototype.vmvcCreateIDNumeric =
			function vmvcCreateIDNumeric()
		{
			var value = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWIDNumeric))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(idNumeric.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWIDNumeric = new idNumeric();

			this.m_kWIDNumeric.setKWView(this);
			this.m_kWIDNumeric.setKWIDParent(this.m_sKWID);

			this.m_kWIDNumeric.check();
			this.m_kWIDNumeric.init();

			this.kWAddValue(this.m_kWIDNumeric);
		};

		viewMVC.prototype.vmvcCreateTopicPub =
			function vmvcCreateTopicPub() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTopicPub))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(topicPub.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTopicPub = new topicPub();
			
			this.m_kWTopicPub.setKWView(this);
			this.m_kWTopicPub.setKWIDParent(this.m_sKWID);
			
			this.m_kWTopicPub.check();
			this.m_kWTopicPub.init();

			this.kWAddValue(this.m_kWTopicPub);
		};
		
		viewMVC.prototype.vmvcCreateTopicPubReady = 
			function vmvcCreateTopicPubReady() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTopicPubReady))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(topicPubReady.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTopicPubReady = new topicPubReady();
			
			this.m_kWTopicPubReady.setKWView(this);
			this.m_kWTopicPubReady.setKWIDParent(this.m_sKWID);
			
			this.m_kWTopicPubReady.check();
			this.m_kWTopicPubReady.init();

			this.kWAddValue(this.m_kWTopicPubReady);
		};
		
		viewMVC.prototype.vmvcCreateTopicPubResize = 
			function vmvcCreateTopicPubResize() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTopicPubResize))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(topicPubResize.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTopicPubResize = new topicPubResize();
			
			this.m_kWTopicPubResize.setKWView(this);
			this.m_kWTopicPubResize.setKWIDParent(this.m_sKWID);
			
			this.m_kWTopicPubResize.check();
			this.m_kWTopicPubResize.init();

			this.kWAddValue(this.m_kWTopicPubResize);
		};
		
		viewMVC.prototype.vmvcCreateTopicSub = 
			function vmvcCreateTopicSub() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTopicSub))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(topicSub.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTopicSub = new topicSub();
			
			this.m_kWTopicSub.setKWView(this);
			this.m_kWTopicSub.setKWIDParent(this.m_sKWID);
			
			this.m_kWTopicSub.check();
			this.m_kWTopicSub.init();

			this.kWAddValue(this.m_kWTopicSub);
		};
		
		viewMVC.prototype.vmvcCreateTopicSubReady = 
			function vmvcCreateTopicSubReady() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTopicSubReady))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(topicSubReady.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTopicSubReady = new topicSubReady();
			
			this.m_kWTopicSubReady.setKWView(this);
			this.m_kWTopicSubReady.setKWIDParent(this.m_sKWID);
			
			this.m_kWTopicSubReady.check();
			this.m_kWTopicSubReady.init();

			this.kWAddValue(this.m_kWTopicSubReady);
		};
		
		viewMVC.prototype.vmvcCreateTopicSubResize = 
			function vmvcCreateTopicSubResize() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTopicSubResize))
			{
				console.error(this.kWLogRepeated());
			}

			value = this.getKWValueForKey(topicSubResize.sKWKey);
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTopicSubResize = new topicSubResize();
			
			this.m_kWTopicSubResize.setKWView(this);
			this.m_kWTopicSubResize.setKWIDParent(this.m_sKWID);
			
			this.m_kWTopicSubResize.check();
			this.m_kWTopicSubResize.init();

			this.kWAddValue(this.m_kWTopicSubResize);
		};

		viewMVC.prototype.vmvcDelete =
			function vmvcDelete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWField          = null;
				this.m_kWHasModel       = null;
				this.m_kWId	            = null;
				this.m_kWIdNumeric	    = null;
				this.m_kWTopicPub       = null;
				this.m_kWTopicPubReady  = null;
				this.m_kWTopicPubResize = null;
				this.m_kWTopicSub       = null;
				this.m_kWTopicSubReady  = null;
				this.m_kWTopicSubResize = null;

				this.vmvcDeleteOR();
			};

		viewMVC.prototype.vmvcGetField =
			function vmvcGetField() 
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWField))
			{
				console.error(this.kWLogInvalid("m_kWField"));
			}
			
			return this.m_kWField.get();
		};
		
		viewMVC.prototype.vmvcGetID = 
			function vmvcGetID() 
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWId))
			{
				console.error(this.kWLogInvalid("m_kWId"));
			}
			
			return this.m_kWId.get();
		};

		viewMVC.prototype.vmvcGetIDNumeric =
			function vmvcGetIDNumeric()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWIdNumeric))
			{
				console.error(this.kWLogInvalid("m_kWIdNumeric"));
			}

			return this.m_kWIdNumeric.get();
		};

		viewMVC.prototype.vmvcInit =
			function vmvcInit()
		{
			//console.log(this.kWLogCalled());

			this.vmvcInitOR();
		};

		return viewMVC;

	}
);
