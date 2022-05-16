/**********************************************************************
 *
 * command/obj.js
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
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
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

		function command()
		{
			//console.log("command::constructor");
			this.m_sKWTag		= "command";
			
			this.m_sKWIcon		= null;
			this.m_sKWLabel		= null;
			this.m_sKWType		= null;
			
			this.m_bKWDisabled	= null;
		}

		command.prototype = new elmt();
		command.prototype.constructor = command;
		command.constructor = elmt.prototype.constructor;

		command.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogInvalid("m_sKWType"));
			}
		};

		command.prototype.init = 
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

		command.prototype.setKWDisabled =
			function(bVal)
		{
			this.m_bKWDisabled = bVal;
			this.commandSetDisabled(bVal)
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

		command.prototype.commandCreateAttrsOR = 
			function commandCreateAttrsOR()
		{
			console.error(this.kWLogNotImpl());
		};

		command.prototype.commandInitOR = 
			function commandInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		command.prototype.commandRetrieveOR = 
			function commandRetrieveOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		command.prototype.mvcEnableOR =
			function()
		{
			this.commandEnable();
		};

		command.prototype.mvcDisableOR =
			function()
		{
			this.commandDisable();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		command.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.commandCreateAttrs();
		};
		
		command.prototype.elmtInitOR = 
			function()
		{
			this.commandInit();
		};
		
		command.prototype.elmtRetrieveOR = 
			function()
		{
			return this.commandRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		command.prototype.commandCreateAttrs = 
			function commandCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogInvalid("m_sKWType"));
			}

			theAttrs = this.commandCreateAttrsOR();
			if (!validate.isNotNull(theAttrs))
			{
				console.error(this.kWLogInvalid("theAttrs"));
			}
			
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWIcon(this.m_sKWIcon);
			theAttrs.setKWLabel(this.m_sKWLabel);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};
		
		command.prototype.commandDisable =
			function commandDisable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(true);
			this.commandDisableOR();
		};

		command.prototype.commandEnable =
			function commandEnable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(false);
			this.commandEnableOR();
		};

		command.prototype.commandInit =
			function commandInit()
		{
			//console.log(this.kWLogCalled());
			this.commandInitOR();
		};
		
		command.prototype.commandRetrieve = 
			function commandRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.commandRetrieveDisabled();
			this.commandRetrieveIcon();
			this.commandRetrieveLabel();
			
			this.commandRetrieveOR();
		};
		
		command.prototype.commandRetrieveDisabled = 
			function commandRetrieveDisabled()
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
		
		command.prototype.commandRetrieveIcon = 
			function commandRetrieveIcon()
		{
			var value   = null;

			var sValue  = null;

			var sValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWIcon();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWIcon = sValue;
				//console.debug(this.kWLogDisplay("m_sKWIcon", this.m_sKWIcon));
			}
		};
		
		command.prototype.commandRetrieveLabel = 
			function commandRetrieveLabel()
		{
			var value = null;
			
			var sValue = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (validate.isString(sValue))
			{
				this.m_sKWLabel = sValue;
				//console.debug(this.kWLogDisplay("m_sKWLabel", this.m_sKWLabel));
			}

		};
		
		command.prototype.commandSetDisabled =
			function commandSetDisabled()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				return
			}

			this.m_kWAttrs.setKWDisabled(this.m_bKWDisabled);
		};

		return command;

	}
);
