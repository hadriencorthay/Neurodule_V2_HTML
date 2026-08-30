function rm_el_lst(lst,el) {
	const index = lst.indexOf(el);
	if (index > -1) { // only splice array when item is found
		lst.splice(index, 1); // 2nd parameter means remove one item only
	}
}