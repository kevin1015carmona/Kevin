"use strict";
window.addEventListener("load", function () {
	const boton_menu = document.getElementById("menu");
	let comprobar_menu = false;
	boton_menu.addEventListener("click", function () {
		const menu_des = document.getElementById("menu_des");
		if (comprobar_menu == false) {
			alert(comprobar_menu);
			menu_des.style.animation = "menu_expand .7s forwards";
			comprobar_menu = true;
		} else {
			menu_des.style.animation = "menu_contract .7s forwards";
			comprobar_menu = false;
			alert(comprobar_menu);
		}
	});
});
