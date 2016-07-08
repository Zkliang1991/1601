myApp.filter("gender", function() {
	return function(gender) {
		switch (gender) {
			case 1:
				return "男";
			case 2:
				return "女";
			case 3:
				return "未知";
		}
	}
})