var nyan = {
	repeat: {
		init: function (debug = false) {
			var t0 = performance.now();
			var data_repeat = $('[data-repeat]');
			$.each(data_repeat, function (i) {
				var data_items = $(this);

				var config_repeat = data_items.attr('data-repeat');
				var d = config_repeat;
				if (window[d] == undefined || window[d] == null || Array.isArray(window[d]) == false) {
					throw new Error ("error "+d+" is not array data");
				}
				var list_item, re;
				for (i = 0; i < window[d].length -1; i++) { 
					var c = data_items.clone().insertAfter(data_items);
					$( "<!-- data-repeat ny-repeat -->" ).insertBefore(c);
				};
				
				list_item = $('[data-repeat="'+data_items.attr('data-repeat')+'"]');
				$.each(list_item, function (i){
					var selector = this;
					var list_item_r = $(this).find('[data-repeat-item]'); 
					var list_attr_r = $(this).find('[data-repeat-attr]');
					$.each(list_item_r, function() {
						var elemn = this;
						var item = $(this).attr('data-repeat-item');
						if (item == null || item == "") {
							throw new Error ("error data-repeat-item is empty");
						}
						if (item != undefined) {
							$(this).text(window[d][i][item]);
						}
					});
					$.each(list_attr_r, function() {
						var elemn = this;
						var attr = $(this).attr('data-repeat-attr');
						if (attr == null || attr == "") {
							throw new Error ("error data-repeat-attr is empty");
						}
						if (attr != undefined) {
							var y = attr.split(',');
							if (y.length > 1) {
								$.each(y, function() {
									var n = this.split(' ');
									var arrayKey = n[0];
									var attributKey = n[2];
									elemn.setAttribute(attributKey, window[d][i][arrayKey]);
								});
							} else {
								var n = attr.split(' ');
								var arrayKey = n[0];
								var attributKey = n[2];
								elemn.setAttribute(attributKey, window[d][i][arrayKey]);
							}
						}
					});
				});
			});
			var t1 = performance.now();
			if (debug) {
				console.info("performance " + Math.round((t1 - t0) * 100) / 100 + " ms.");
			}
		}
	}
};
