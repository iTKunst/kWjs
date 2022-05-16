/**********************************************************************
 *
 * children/obj.js
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
		"kWUtils/map/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		map,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function children() 
		{
			//console.log("children::constructor");
		}

		children.prototype = new map();
		children.prototype.constructor = children;
		children.constructor = map.prototype.constructor;

		children.prototype.check = 
			function check() 
		{
			map.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		children.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			map.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		children.prototype.kWIsReady =
			function()
		{
			return this.childrenIsReady();
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

		children.prototype.kWAddChild =
			function(obj)
		{
			this.childrenAddChild(obj);
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		children.prototype.mapInitOR =
			function()
		{
			this.childrenInit(); 
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

		children.prototype.childrenAddChild =
			function childrenAddChild(obj)
		{
			var sID = null;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid("obj"));
			}

			sID = obj.getKWID();
			if (!validate.isString(sID))
			{
				console.error(this.kWLogErrRetrieve("sID"));
				sID = obj.getKWID();
			}

			this.kWAdd(sID, obj);

			//console.debug(this.kWLogDisplay("sID", sID));
		};

		children.prototype.childrenInit =
			function childrenInit()
		{
			//console.log(this.kWLogCalled());
		};

		children.prototype.childrenIsReady =
			function childrenIsReady()
		{
			var nLength = -1;
			var nIndex = -1;

			var child = null;

			var bIsReady = true;

			//console.log(this.kWLogCalled());

			nLength = this.getKWLength();

			for (nIndex = 0; nIndex < nLength; nIndex++)
			{
				child = this.getKWValByIndex(nIndex);
				if (!validate.isNotNull(child))
				{
					console.error(this.kWLogErrRetrieve("child"));
				}

				if (!child.isKWReady())
				{
					bIsReady = false;
					break;
				}
			}

			return bIsReady;
		};

		return children;

	}
);
