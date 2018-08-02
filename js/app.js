$(document).ready(function(){
	attachTopNavFunction();
	
});
/* 
 * dummy functions to demonstrate layout
 *
 * */
function attachTopNavFunction () {
	$('#navbarCollapse a.nav-link.flat').on('click', function(e){
		e.stopImmediatePropagation();
		var menuid = $(this).attr('id');
		$('.navbar-collapse').collapse('hide');
		switch(menuid){
			case 'home':
				helpers._clear_div('app');
				var content = "" +
					
					"";
				document.getElementById('app').innerHTML = content;
				break;
			case 'data':
				helpers._clear_div('app');
				var content = "" +
					"<div class='row' style='margin:20px;'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>Home</li>" +
									"<li class='breadcrumb-item'>Library</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>Data</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<table id='data_table' class='table table-condensed table-striped table-bordered'>" +
								"<thead>" +
									"<tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th><th>Header 5</th><th>Header 6</th></tr>" +
								"</thead>" +
								"<tfoot>" +
									"<tr><th colspan='5' class='text-right'>Totals</th><th class='text-right'>N</th></tr>" +
								"</tfoot>" +
								"<tbody></tbody>" +
							"</table>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = content;
				var tablerows = "";
				for (i=1;i<=50;i++) {
					tablerows += "<tr><td>"+i+".</td><td>Column "+i+" A</td><td>Column "+i+" B</td><td>Column "+i+" C</td><td>Column "+i+" D</td><td>Column "+i+" E</td></tr>";
				}
				var tableRef = document.getElementById('data_table').getElementsByTagName('tbody')[0];
				tableRef.innerHTML = tablerows;
				$('#data_table').DataTable();
				break;
			case 'sidebar-based':
				helpers._clear_div('app');
				var content = "" +
					"<div class='container-fluid'>" +
						"<div class='row'>" +
							"<div class='col-md-2' style='margin-top:5px;padding-right:5px;'>" +
								"<div class='sidebar-wrapper has-max-height'>" +
									"<ul class='list-group'>" +
										"<li class='list-group-item bg-dark text-white'><i class='fa fa-shield fa-lg'></i>&nbsp;Sub-Menu Cluster</li>" +
										"<li class='list-group-item list-group-item-action' id='sub_app_1'><i class='fa fa-file'></i>&nbsp;Application</li>" +
										"<li class='list-group-item list-group-item-action' id='sub_app_2'><i class='fa fa-map'></i>&nbsp;Map</li>" +
									"</ul>" +
								"</div>" +
							"</div>" +
							"<div id='app_body' class='col-md-10'></div>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app').innerHTML = content;
				attachSidebarMenuFunction();
				break;
			case 'login':
				$('#form_modal_label').html("<i class='fa fa-lock fa-lg'></i>&nbsp;Login Box");
				var content = "" +
					"<div class='form-group'>" +
						"<label for='userMailName'>Username / E-Mail Address</label>" +
						"<input type='text' class='form-control' id='userMailName' name='userMailName' placeholder='Username / E-Mail Address'>" +
					"</div>" +
					"<div class='form-group'>" +
						"<label for='userPassword'>Password</label>" +
						"<input type='password' class='form-control' id='userPassword' name='userPassword' placeholder='Password'>" +
					"</div>" +
					"<div class='form-group' id='notice'></div>" +
					"";
				$('#form_modal_body').html(content);
				$('#form_modal_footer').html("<button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'>Cancel</button><button type='submit' class='btn btn-primary btn-sm'><i class='fa fa-lock fa-lg'></i>&nbsp;Login</button>");
				$('#modalform').modal('show');
				$('#modalform').on('shown.bs.modal', function(){
					$('#notice').html("<p class='text-white'>Enter your username and password.</p>");
				});
				break;
			default:
				helpers._clear_div('app');
				console.log('__UNDEFINED__');
				break;
		}
		return false;
	});
	$('#navbarCollapse a.dropdown-item').on('click', function(e){
		e.stopImmediatePropagation();
		var menuid = $(this).attr('id');
		$('.navbar-collapse').collapse('hide');
		$(this).closest('li.nav-item.dropdown').find('.nav-link.dropdown-toggle').dropdown('toggle');
		switch(menuid){
			case 'map_layout_1':
				helpers._clear_div('app');
				createFullscreenMap();
				break;
			case 'map_layout_2':
				helpers._clear_div('app');
				createSidebarMap();
				break;
			default:
				helpers._clear_div('app');
				console.log('__UNDEFINED__');
				break;
		}
		return false;
	});
}
function attachSidebarMenuFunction(){
	$('.sidebar-wrapper > ul.list-group > li.list-group-item-action').on('click', function(evt){
		evt.stopImmediatePropagation();
		helpers._clear_div('app_body');
		var menuid = $(this).attr('id');
		switch (menuid) {
			case 'sub_app_1':
				/* set #app_body for application layout */
				$('#app_body').removeClass().addClass('col-md-10 app-body-application');
				var content = "" +
					"<div class='row'>" +
						"<div class='col-md-12'>" +
							"<nav aria-label='breadcrumb'>" +
								"<ul class='breadcrumb'>" +
									"<li class='breadcrumb-item'>Home</li>" +
									"<li class='breadcrumb-item'>Library</li>" +
									"<li class='breadcrumb-item active' aria-current='page'>Data</li>" +
								"</ul>" +
							"</nav>" +
							"<hr/>" +
							"<table id='data_table' class='table table-condensed table-striped table-bordered'>" +
								"<thead>" +
									"<tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th><th>Header 5</th><th>Header 6</th></tr>" +
								"</thead>" +
								"<tfoot>" +
									"<tr><th colspan='5' class='text-right'>Totals</th><th class='text-right'>N</th></tr>" +
								"</tfoot>" +
								"<tbody></tbody>" +
							"</table>" +
						"</div>" +
					"</div>" +
					"";
				document.getElementById('app_body').innerHTML = content;
				var tablerows = "";
				for (i=1;i<=50;i++) {
					tablerows += "<tr><td>"+i+".</td><td>Column "+i+" A</td><td>Column "+i+" B</td><td>Column "+i+" C</td><td>Column "+i+" D</td><td>Column "+i+" E</td></tr>";
				}
				var tableRef = document.getElementById('data_table').getElementsByTagName('tbody')[0];
				tableRef.innerHTML = tablerows;
				$('#data_table').DataTable();
				break;
			case 'sub_app_2':
				/* set #app_body for map layout */
				$('#app_body').removeClass().addClass('col-md-10 app-body-map');
				createAppMap();
				break;
			default:
				console.log('__UNDEFINED__');
				break;
		}
		return false;
	});
}
function createFullscreenMap() {
	document.getElementById('app').innerHTML = "<div id='map' class='map-wrapper'></div>";
	var map, isCollapsed, openStreetMaps;
	var dummy_objects_a = L.geoJson(null), dummy_objects_b = L.geoJson(null), dummy_objects_c = L.geoJson(null);
	if (document.body.clientWidth <= 767) {
		isCollapsed = true;
	} else {
		isCollapsed = false;
	}

	openStreetMaps = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		minZoom: 8, 
		maxZoom: 20, 
		attribution: 'Map Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.'
	});
	
	/* centroid to Rue du Moulin... */
	map = L.map("map", {
		zoom: 15,
		center: [50.640675, 5.595057],
		layers: [openStreetMaps],
		minZoom: 8,
		maxZoom: 20,
		zoomControl: false,
		attributionControl: true
	});
	
	map.setMaxBounds([[49.219872264, 2.2043633461], [51.7291856553, 6.7307305336]]);

	var zoomControl = L.control.zoom({
		position: "topleft"
	}).addTo(map);

	var baseLayers = {
		"OpenStreetMap": openStreetMaps
	};
	
	var overlayLayers = {
		"Dummy Layer A": dummy_objects_a,
		"Dummy Layer B": dummy_objects_b,
		"Dummy Layer C": dummy_objects_c
	};
	
	var layerControl = L.control.layers(baseLayers, overlayLayers,  {
		collapsed: isCollapsed
	}).addTo(map);
	
	var attributionControl = L.control({
		position: "bottomright"
	});
}
function createSidebarMap() {
	var content = "" +
		"<div class='map-wrapper flex'>" +
			"<div id='sidebar' class='flex-sidebar'>" +
				"<div class='sidebar-wrapper'>" +
					"<div id='features'>" +
						"<div class='sidebar-title'>" +
							"<h3 class='title'>Points of Interest<button type='button' class='btn btn-xs btn-default pull-right' id='sidebar-hide-btn'><i class='fa fa-chevron-left'></i></button></h3>" +
						"</div>" +
						"<div class='filter-wrapper'>" +
							"<div class='row'>" +
								"<div class='col-xs-8 col-md-8'>" +
									"<input type='text' class='form-control search' placeholder='Filter' />" +
								"</div>" +
								"<div class='col-xs-4 col-md-4'>" +
									"<button type='button' class='btn btn-primary pull-right sort' data-sort='feature-name' id='sort-btn'><i class='fa fa-sort'></i>&nbsp;&nbsp;Sort</button>" +
								"</div>" +
							"</div>" +
						"</div>" +
						"<div class='sidebar-table'>" +
							"<table class='table table-hover' id='feature-list'>" +
								"<thead class='d-none'>" +
									"<tr>" +
										"<th>Icon</th>" +
									"</tr>" +
									"<tr>" +
										"<th>Name</th>" +
									"</tr>" +
									"<tr>" +
										"<th>Chevron</th>" +
									"</tr>" +
								"</thead>" +
								"<tbody class='list'></tbody>" +
							"</table>" +
						"</div>" +
					"</div>" +
				"</div>" +
			"</div>" +
			"<div id='map' class='flex-content'></div>" +
		"</div>" +
		"";
	document.getElementById('app').innerHTML = content;
	var tablerows = "";
	for (i=1;i<=50;i++) {
		tablerows += "<tr><td><img width='16' height='18' src='./img/poi.png'></td><td>POI Object #"+i+"</td><td><i class='fa fa-chevron-right pull-right'></i></td></tr>";
	}
	var tableRef = document.getElementById('feature-list').getElementsByTagName('tbody')[0];
	tableRef.innerHTML = tablerows;
	var map, isCollapsed, openStreetMaps;
	var dummy_objects_a = L.geoJson(null), dummy_objects_b = L.geoJson(null), dummy_objects_c = L.geoJson(null);
	if (document.body.clientWidth <= 767) {
		isCollapsed = true;
	} else {
		isCollapsed = false;
	}

	openStreetMaps = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		minZoom: 8, 
		maxZoom: 20, 
		attribution: 'Map Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.'
	});
	
	/* centroid to Rue du Moulin... */
	map = L.map("map", {
		zoom: 15,
		center: [50.640675, 5.595057],
		layers: [openStreetMaps],
		minZoom: 8,
		maxZoom: 20,
		zoomControl: false,
		attributionControl: true
	});
	
	map.setMaxBounds([[49.219872264, 2.2043633461], [51.7291856553, 6.7307305336]]);

	var zoomControl = L.control.zoom({
		position: "topleft"
	}).addTo(map);

	var baseLayers = {
		"OpenStreetMap": openStreetMaps
	};
	
	var overlayLayers = {
		"Dummy Layer A": dummy_objects_a,
		"Dummy Layer B": dummy_objects_b,
		"Dummy Layer C": dummy_objects_c
	};
	
	var layerControl = L.control.layers(baseLayers, overlayLayers,  {
		collapsed: isCollapsed
	}).addTo(map);
	
	var attributionControl = L.control({
		position: "bottomright"
	});
}
function createAppMap() {
	document.getElementById('app_body').innerHTML = "<div id='map' class='map-wrapper'></div>";
	var map, isCollapsed, openStreetMaps;
	var dummy_objects_a = L.geoJson(null), dummy_objects_b = L.geoJson(null), dummy_objects_c = L.geoJson(null);
	if (document.body.clientWidth <= 767) {
		isCollapsed = true;
	} else {
		isCollapsed = false;
	}

	openStreetMaps = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		minZoom: 8, 
		maxZoom: 20, 
		attribution: 'Map Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.'
	});
	
	/* centroid to Rue du Moulin... */
	map = L.map("map", {
		zoom: 15,
		center: [50.640675, 5.595057],
		layers: [openStreetMaps],
		minZoom: 8,
		maxZoom: 20,
		zoomControl: false,
		attributionControl: true
	});
	
	map.setMaxBounds([[49.219872264, 2.2043633461], [51.7291856553, 6.7307305336]]);

	var zoomControl = L.control.zoom({
		position: "topleft"
	}).addTo(map);

	var baseLayers = {
		"OpenStreetMap": openStreetMaps
	};
	
	var overlayLayers = {
		"Dummy Layer A": dummy_objects_a,
		"Dummy Layer B": dummy_objects_b,
		"Dummy Layer C": dummy_objects_c
	};
	
	var layerControl = L.control.layers(baseLayers, overlayLayers,  {
		collapsed: isCollapsed
	}).addTo(map);
	
	var attributionControl = L.control({
		position: "bottomright"
	});
}
/* helper functions */
var helpers = {
	_clear_div: function (divtarget) {
		divtarget = typeof divtarget !== 'undefined' ? divtarget : 'app';
		document.getElementById(divtarget).innerHTML = "";
	}
};
