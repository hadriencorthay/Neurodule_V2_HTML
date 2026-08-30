const DEBUG = false;

let ready_cntr = 0;
let db_rdy_lst = [];
let db_strt_ld_lst = [];

let exp_act = false;

let neurlist = [];
const neur1 = new Neurone(0, 0, 100, 100, 6, 500, 1); // main - moelle
const neur2 = new Neurone(100, 100, 100, 200, 3, 500, 2); // moelle - cerveau
const neur3 = new Neurone(100, 100, 200, 100, 1, 500, 3); // moelle - moelle
const neur4 = new Neurone(200, 200, 200, 100, 3, 500, 4); // cerveau - moelle
const neur5 = new Neurone(200, 100, 100, 0, 4, 500, 5); // moelle - main
const brain = new Neurone(100, 200, 200, 200, 8, 500, 6); // cerveau
const muscle = new Output(100, 0); // Sortie muscle
const candle = new Input(0, 0); // Entrée bougie
const feather = new Input(0, 0); // Entrée plume

brain.armed = true;

let disp = document.getElementById("disp")
display = new Display(750, 915, 915, 750, 3, disp);

const BODY_IMG = 2;
let active_bdy = BODY_IMG - 1;
let bdy_list = [];

let image_crps = new Image();
let img_neur1 = new Image();
let img_neur2 = new Image();
let img_neur3 = new Image();
let img_neur4 = new Image();
let img_neur5 = new Image();
let img_neur_1_1 = new Image();
let img_neur_1_2 = new Image();
let img_neur_1_3 = new Image();
let img_neur_1_4 = new Image();
let img_neur_1_5 = new Image();
let img_neur_1_6 = new Image();
let img_neur_2_1 = new Image();
let img_neur_2_2 = new Image();
let img_neur_2_3 = new Image();
let img_neur_3_1 = new Image();
let img_neur_4_1 = new Image();
let img_neur_4_2 = new Image();
let img_neur_4_3 = new Image();
let img_neur_5_1 = new Image();
let img_neur_5_2 = new Image();
let img_neur_5_3 = new Image();
let img_neur_5_4 = new Image();
let img_candle = new Image();
let img_feather = new Image();
let zoom = new Image();

let neur1_list = [];
let neur2_list = [];
let neur3_list = [];
let neur4_list = [];
let neur5_list = [];

neurlist.push(neur1);
neurlist.push(neur2);
neurlist.push(neur3);
neurlist.push(neur4);
neurlist.push(neur5);
neurlist.push(brain);
neurlist.push(muscle);
neurlist.push(candle);
neurlist.push(feather);

for (let i of neurlist) {
	i.set_connections(neurlist)
}

let neuronetoadd = [];


function addneurone(val) {
	if (neuronetoadd.length === 2) {
		neuronetoadd = [];
	}

	if (neuronetoadd.length < 2) {
		neuronetoadd.push(val);
	}

	if (neuronetoadd.length == 2) {
		place_neurone(neuronetoadd);
	}

	console.log(neuronetoadd);
}

image_crps.onload = function () {
	body2 = new Customimage(0, 0, 0, display, 600, 914, image_crps, 575, 50, 300, 457);
	body3 = new Customimage(0, 0, 0, display, 550, 914, image_crps, 1535, 50, 275, 457);
	bdy_list.push(body2);
	bdy_list.push(body3);
	display.contents.push(body2);
	display.contents.push(body3);
	cycle_body();
	ready_cntr++;
	db_rdy_lst.push("corps");
	rm_el_lst(db_strt_ld_lst, "corps");
	console.log("Body initialized.");
	check_ready();
}
img_neur1.onload = function () {
	neur_1_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur1, 575, 50, 300, 457);
	neur_1_2 = new Customimage(0, 0, 2, display, 550, 914, img_neur1, 1535, 50, 275, 457);
	display.contents.push(neur_1_1);
	display.contents.push(neur_1_2);
	ready_cntr++;
	db_rdy_lst.push("neur1");
	rm_el_lst(db_strt_ld_lst, "neur1");
	console.log("Neuron 1 initialized.");
	check_ready();
}
img_neur2.onload = function () {
	neur_2 = new Customimage(0, 0, 2, display, 600, 914, img_neur2, 575, 50, 300, 457, neur2);
	display.contents.push(neur_2);
	ready_cntr++;
	db_rdy_lst.push("neur2");
	rm_el_lst(db_strt_ld_lst, "neur2");
	console.log("Neuron 2 initialized.");
	check_ready();
}
img_neur3.onload = function () {
	neur_3 = new Customimage(0, 0, 2, display, 600, 914, img_neur3, 575, 50, 300, 457, neur3);
	display.contents.push(neur_3);
	ready_cntr++;
	db_rdy_lst.push("neur3");
	rm_el_lst(db_strt_ld_lst, "neur3");
	console.log("Neuron 3 initialized.");
	check_ready();
}
img_neur4.onload = function () {
	neur_4 = new Customimage(0, 0, 2, display, 600, 914, img_neur4, 575, 50, 300, 457, neur4);
	display.contents.push(neur_4);
	ready_cntr++;
	db_rdy_lst.push("neur4");
	rm_el_lst(db_strt_ld_lst, "neur4");
	console.log("Neuron 4 initialized.");
	check_ready();
}
img_neur5.onload = function () {
	neur_5 = new Customimage(0, 0, 2, display, 600, 914, img_neur5, 575, 50, 300, 457, neur5);
	display.contents.push(neur_5);
	ready_cntr++;
	db_rdy_lst.push("neur5");
	rm_el_lst(db_strt_ld_lst, "neur5");
	console.log("Neuron 5 initialized.");
	check_ready();
}
img_neur_1_1.onload = function () {
	neur_1_step_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur_1_1, 575, 50, 300, 457);
	display.contents.push(neur_1_step_1);
	ready_cntr++;
	db_rdy_lst.push("neur1_1");
	rm_el_lst(db_strt_ld_lst, "neur1_1");
	console.log("Neuron 1 frame 1 initialized.");
	check_ready();
}
img_neur_1_2.onload = function () {
	neur_1_step_2 = new Customimage(0, 0, 2, display, 600, 914, img_neur_1_2, 575, 50, 300, 457);
	display.contents.push(neur_1_step_2);
	ready_cntr++;
	db_rdy_lst.push("neur1_2");
	rm_el_lst(db_strt_ld_lst, "neur1_2");
	console.log("Neuron 1 frame 2 initialized.");
	check_ready();
}
img_neur_1_3.onload = function () {
	neur_1_step_3 = new Customimage(0, 0, 2, display, 600, 914, img_neur_1_3, 575, 50, 300, 457);
	display.contents.push(neur_1_step_3);
	ready_cntr++;
	db_rdy_lst.push("neur1_3");
	rm_el_lst(db_strt_ld_lst, "neur1_3");
	console.log("Neuron 1 frame 3 initialized.");
	check_ready();
}
img_neur_1_4.onload = function () {
	neur_1_step_4 = new Customimage(0, 0, 2, display, 600, 914, img_neur_1_4, 575, 50, 300, 457);
	display.contents.push(neur_1_step_4);
	ready_cntr++;
	db_rdy_lst.push("neur1_4");
	rm_el_lst(db_strt_ld_lst, "neur1_4");
	console.log("Neuron 1 frame 4 initialized.");
	check_ready();
}
img_neur_1_5.onload = function () {
	neur_1_step_5 = new Customimage(0, 0, 2, display, 600, 914, img_neur_1_5, 575, 50, 300, 457);
	display.contents.push(neur_1_step_5);
	ready_cntr++;
	db_rdy_lst.push("neur1_5");
	rm_el_lst(db_strt_ld_lst, "neur1_5");
	console.log("Neuron 1 frame 5 initialized.");
	check_ready();
}
img_neur_1_6.onload = function () {
	neur_1_step_6 = new Customimage(0, 0, 2, display, 600, 914, img_neur_1_6, 575, 50, 300, 457);
	display.contents.push(neur_1_step_6);
	ready_cntr++;
	db_rdy_lst.push("neur1_6");
	rm_el_lst(db_strt_ld_lst, "neur1_6");
	console.log("Neuron 1 frame 6 initialized.");
	check_ready();
}
img_neur_2_1.onload = function () {
	neur_2_step_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur_2_1, 575, 50, 300, 457);
	display.contents.push(neur_2_step_1);
	ready_cntr++;
	db_rdy_lst.push("neur2_1");
	rm_el_lst(db_strt_ld_lst, "neur2_1");
	console.log("Neuron 2 frame 1 initialized.");
	check_ready();
}
img_neur_2_2.onload = function () {
	neur_2_step_2 = new Customimage(0, 0, 2, display, 600, 914, img_neur_2_2, 575, 50, 300, 457);
	display.contents.push(neur_2_step_2);
	ready_cntr++;
	db_rdy_lst.push("neur2_2");
	rm_el_lst(db_strt_ld_lst, "neur2_2");
	console.log("Neuron 2 frame 2 initialized.");
	check_ready();
}
img_neur_2_3.onload = function () {
	neur_2_step_3 = new Customimage(0, 0, 2, display, 600, 914, img_neur_2_3, 575, 50, 300, 457);
	display.contents.push(neur_2_step_3);
	ready_cntr++;
	db_rdy_lst.push("neur2_3");
	rm_el_lst(db_strt_ld_lst, "neur2_3");
	console.log("Neuron 2 frame 3 initialized.");
	check_ready();
}
img_neur_3_1.onload = function () {
	neur_3_step_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur_3_1, 575, 50, 300, 457);
	display.contents.push(neur_3_step_1);
	ready_cntr++;
	db_rdy_lst.push("neur3_1");
	rm_el_lst(db_strt_ld_lst, "neur3_1");
	console.log("Neuron 3 frame 1 initialized.");
	check_ready();
}
img_neur_4_1.onload = function () {
	neur_4_step_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur_4_1, 575, 50, 300, 457);
	display.contents.push(neur_4_step_1);
	ready_cntr++;
	db_rdy_lst.push("neur4_1");
	rm_el_lst(db_strt_ld_lst, "neur4_1");
	console.log("Neuron 4 frame 1 initialized.");
	check_ready();
}
img_neur_4_2.onload = function () {
	neur_4_step_2 = new Customimage(0, 0, 2, display, 600, 914, img_neur_4_2, 575, 50, 300, 457);
	display.contents.push(neur_4_step_2);
	ready_cntr++;
	db_rdy_lst.push("neur4_2");
	rm_el_lst(db_strt_ld_lst, "neur4_2");
	console.log("Neuron 4 frame 2 initialized.");
	check_ready();
}
img_neur_4_3.onload = function () {
	neur_4_step_3 = new Customimage(0, 0, 2, display, 600, 914, img_neur_4_3, 575, 50, 300, 457);
	display.contents.push(neur_4_step_3);
	ready_cntr++;
	db_rdy_lst.push("neur4_3");
	rm_el_lst(db_strt_ld_lst, "neur4_3");
	console.log("Neuron 4 frame 3 initialized.");
	check_ready();
}
img_neur_5_1.onload = function () {
	neur_5_step_1 = new Customimage(0, 0, 2, display, 600, 914, img_neur_5_1, 575, 50, 300, 457);
	display.contents.push(neur_5_step_1);
	ready_cntr++;
	db_rdy_lst.push("neur5_1");
	rm_el_lst(db_strt_ld_lst, "neur5_1");
	console.log("Neuron 5 frame 1 initialized.");
	check_ready();
}
img_neur_5_2.onload = function () {
	neur_5_step_2 = new Customimage(0, 0, 2, display, 600, 914, img_neur_5_2, 575, 50, 300, 457);
	display.contents.push(neur_5_step_2);
	ready_cntr++;
	db_rdy_lst.push("neur5_2");
	rm_el_lst(db_strt_ld_lst, "neur5_2");
	console.log("Neuron 5 frame 2 initialized.");
	check_ready();
}
img_neur_5_3.onload = function () {
	neur_5_step_3 = new Customimage(0, 0, 2, display, 600, 914, img_neur_5_3, 575, 50, 300, 457);
	display.contents.push(neur_5_step_3);
	ready_cntr++;
	db_rdy_lst.push("neur5_3");
	rm_el_lst(db_strt_ld_lst, "neur5_3");
	console.log("Neuron 5 frame 3 initialized.");
	check_ready();
}
img_neur_5_4.onload = function () {
	neur_5_step_4 = new Customimage(0, 0, 2, display, 600, 914, img_neur_5_4, 575, 50, 300, 457);
	display.contents.push(neur_5_step_4);
	ready_cntr++;
	db_rdy_lst.push("neur5_4");
	rm_el_lst(db_strt_ld_lst, "neur5_4");
	console.log("Neuron 5 frame 4 initialized.");
	check_ready();
}
img_candle.onload = function () {
	candle_img = new Customimage(400, 700, 2, display, 256, 256, img_candle, 0, 0, 1024, 1024, candle);
	display.contents.push(candle_img);
	ready_cntr++;
	db_rdy_lst.push("candle");
	rm_el_lst(db_strt_ld_lst, "candle");
	console.log("Candle initialized");
	check_ready();
}
img_feather.onload = function () {
	feather_img = new Customimage(400, 700, 2, display, 256, 256, img_feather, 0, 0, 1024, 1024, feather);
	display.contents.push(feather_img);
	ready_cntr++;
	db_rdy_lst.push("feather");
	rm_el_lst(db_strt_ld_lst, "feather");
	console.log("Feather initialized");
	check_ready();
}
zoom.onload = function () {
	zoom_img = new Customimage(0, 0, 2, display, 600, 914, zoom, 575, 50, 300, 457);
	display.contents.push(zoom_img);
	ready_cntr++;
	db_rdy_lst.push("zoom");
	rm_el_lst(db_strt_ld_lst, "zoom");
	zoom_img.active = true
	console.log("Zoom box initialized.");
	check_ready();
}

function cycle_body() {
	bdy_list[active_bdy].active = false;
	active_bdy = (active_bdy + 1) % BODY_IMG;
	bdy_list[active_bdy].active = true;
	if (neur1.armed) {
		switch (active_bdy) {
			case 0:
				neur_1_1.active = true;
				neur_1_2.active = false;
				break;
			case 1:
				neur_1_2.active = true;
				neur_1_1.active = false;
				exp_act = false;
				break;
		}

	}
}

function check_ready() {
	console.log("checking...");
	if (ready_cntr == 26) {
		console.log("Filling animation lists...");
		fill_lists();
		console.log("Starting main loop...");
		loop();
	} else if (DEBUG) {
		for (let i of db_rdy_lst) {
			console.log(i + " loaded.");
		}
		for (let i of db_strt_ld_lst) {
			console.log(i + " not loading.");
		}
	}
}

function startexp() {
	if (!exp_act) {
		exp_act = true;
		if (candle.armed) {
			candle.fire(candle);
		} else if (feather.armed) {
			feather.fire(feather);
		}
	}
}

function stopexp() {
	if (exp_act) {
		exp_act = false;
	}
}

function exp_loop() {
	for (let el of display.contents) {
		if (typeof el.obj === "undefined") {
		} else {
			if (el.obj.armed) {
				el.active = true;
			} else {
				el.active = false;
			}
		}
	}
}

function restart() {
	for (let i of neurlist) {
		i.armed = false;
	}
	neur_1_1.active = false;
	neur_1_2.active = false;
	bdy_list[active_bdy].active = false;
	active_bdy = 0;
	bdy_list[active_bdy].active = true;
	Boutonbougie.style.color = "black";
	Boutonplume.style.color = "black";
	plume = false;
	bougie = false;
}

function place_neurone(list) {
	if (list[0] == 4 && list[1] == 2) {
		neur1.armed = !neur1.armed;
		neur_1_1.active = !neur_1_1.active;
	} else if (list[0] == 2 && list[1] == 3) {
		neur2.armed = !neur2.armed;
	} else if (list[0] == 2 && list[1] == 1) {
		neur3.armed = !neur3.armed;
	} else if (list[0] == 1 && list[1] == 2) {
		neur4.armed = !neur4.armed;
	} else if (list[0] == 2 && list[1] == 2) {
		neur5.armed = !neur5.armed;
	} else {
		console.log("this neuron does not exist or is alway placed.")
	}
}

function fill_lists() {
	neur1_list.push(neur_1_step_1, neur_1_step_2, neur_1_step_3, neur_1_step_4, neur_1_step_5, neur_1_step_6);
	neur2_list.push(neur_2_step_1, neur_2_step_2, neur_2_step_3);
	neur3_list.push(neur_3_step_1);
	neur4_list.push(neur_4_step_1, neur_4_step_2, neur_4_step_3);
	neur5_list.push(neur_5_step_1, neur_5_step_2, neur_5_step_3, neur_5_step_4);
	neur1.anim_list = neur1_list;
	neur2.anim_list = neur2_list;
	neur3.anim_list = neur3_list;
	neur4.anim_list = neur4_list;
	neur5.anim_list = neur5_list;
	console.log("Lists filled.")
}

function place() {
	console.log("Launching...")
	load_assets();
	setTimeout(place_neur, 500);
	setTimeout(load_anim, 1000);
	document.addEventListener("mousedown", handle_click)
}

function load_assets() {
	console.log("Loading general assets...")
	zoom.src = "../png_files/zoom.png";
	db_strt_ld_lst.push("zoom");
	image_crps.src = "../png_files/animation_bras_nouveau.png";
	db_strt_ld_lst.push("corps");
	img_candle.src = "../png_files/bougie_pixel.png";
	db_strt_ld_lst.push("candle");
	img_feather.src = "../png_files/plume_pixel.png";
	db_strt_ld_lst.push("feather");
}

function place_neur() {
	console.log("Loading Neuron images...")
	img_neur1.src = "../png_files/animation_bras_neur_1.png";
	db_strt_ld_lst.push("neur1");
	img_neur2.src = "../png_files/animation_bras_neur_2.png";
	db_strt_ld_lst.push("neur2");
	img_neur3.src = "../png_files/animation_bras_neur_3.png";
	db_strt_ld_lst.push("neur3");
	img_neur4.src = "../png_files/animation_bras_neur_4.png";
	db_strt_ld_lst.push("neur4");
	img_neur5.src = "../png_files/animation_bras_neur_5.png";
	db_strt_ld_lst.push("neur5");
}

function load_anim() {
	console.log("Loading animations...")
	img_neur_1_1.src = "../png_files/animation_bras_neur_1_step_1.png";
	db_strt_ld_lst.push("neur1_1");
	img_neur_1_2.src = "../png_files/animation_bras_neur_1_step_2.png";
	db_strt_ld_lst.push("neur1_2");
	img_neur_1_3.src = "../png_files/animation_bras_neur_1_step_3.png";
	db_strt_ld_lst.push("neur1_3");
	img_neur_1_4.src = "../png_files/animation_bras_neur_1_step_4.png";
	db_strt_ld_lst.push("neur1_4");
	img_neur_1_5.src = "../png_files/animation_bras_neur_1_step_5.png";
	db_strt_ld_lst.push("neur1_5");
	img_neur_1_6.src = "../png_files/animation_bras_neur_1_step_6.png";
	db_strt_ld_lst.push("neur1_6");
	img_neur_2_1.src = "../png_files/animation_bras_neur_3_step_1.png";
	db_strt_ld_lst.push("neur2_1");
	img_neur_2_2.src = "../png_files/animation_bras_neur_3_step_2.png";
	db_strt_ld_lst.push("neur2_2");
	img_neur_2_3.src = "../png_files/animation_bras_neur_3_step_3.png";
	db_strt_ld_lst.push("neur2_3");
	img_neur_3_1.src = "../png_files/animation_bras_neur_5_step_1.png";
	db_strt_ld_lst.push("neur3_1");
	img_neur_4_1.src = "../png_files/animation_bras_neur_4_step_1.png";
	db_strt_ld_lst.push("neur4_1");
	img_neur_4_2.src = "../png_files/animation_bras_neur_4_step_2.png";
	db_strt_ld_lst.push("neur4_2");
	img_neur_4_3.src = "../png_files/animation_bras_neur_4_step_3.png";
	db_strt_ld_lst.push("neur4_3");
	img_neur_5_1.src = "../png_files/animation_bras_neur_2_step_1.png";
	db_strt_ld_lst.push("neur5_1");
	img_neur_5_2.src = "../png_files/animation_bras_neur_2_step_2.png";
	db_strt_ld_lst.push("neur5_2");
	img_neur_5_3.src = "../png_files/animation_bras_neur_2_step_3.png";
	db_strt_ld_lst.push("neur5_3");
	img_neur_5_4.src = "../png_files/animation_bras_neur_2_step_4.png";
	db_strt_ld_lst.push("neur5_4");
}

function handle_click(event) {
	console.log("down "+event.clientX+"   "+event.clientY)
}

setTimeout(place, 500)