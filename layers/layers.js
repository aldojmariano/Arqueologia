var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format_MAPs_0 = new ol.format.GeoJSON();
var features_MAPs_0 = format_MAPs_0.readFeatures(json_MAPs_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPs_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MAPs_0.addFeatures(features_MAPs_0);var lyr_MAPs_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPs_0, 
                style: style_MAPs_0,
                title: '<img src="styles/legend/MAPs_0.png" /> MAPs'
            });var format_Camino_Inca_1 = new ol.format.GeoJSON();
var features_Camino_Inca_1 = format_Camino_Inca_1.readFeatures(json_Camino_Inca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino_Inca_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Camino_Inca_1.addFeatures(features_Camino_Inca_1);var lyr_Camino_Inca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camino_Inca_1, 
                style: style_Camino_Inca_1,
                title: '<img src="styles/legend/Camino_Inca_1.png" /> Camino_Inca'
            });

lyr_MAPs_0.setVisible(true);lyr_Camino_Inca_1.setVisible(true);
var layersList = [baseLayer,lyr_MAPs_0,lyr_Camino_Inca_1];
lyr_MAPs_0.set('fieldAliases', {'nomb_map': 'nomb_map', 'cue': 'cue', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Camino_Inca_1.set('fieldAliases', {'mapfech': 'mapfech', 'mapobse': 'mapobse', 'dptonomb': 'dptonomb', 'provnomb': 'provnomb', 'distnomb': 'distnomb', 'tramnomb': 'tramnomb', 'stranomb': 'stranomb', 'seccnom': 'seccnom', 'longitud': 'longitud', 'Shape_Leng': 'Shape_Leng', });
lyr_MAPs_0.set('fieldImages', {'nomb_map': 'TextEdit', 'cue': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Camino_Inca_1.set('fieldImages', {'mapfech': 'TextEdit', 'mapobse': 'TextEdit', 'dptonomb': 'TextEdit', 'provnomb': 'TextEdit', 'distnomb': 'TextEdit', 'tramnomb': 'TextEdit', 'stranomb': 'TextEdit', 'seccnom': 'TextEdit', 'longitud': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_MAPs_0.set('fieldLabels', {'nomb_map': 'no label', 'cue': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Camino_Inca_1.set('fieldLabels', {'mapfech': 'no label', 'mapobse': 'no label', 'dptonomb': 'no label', 'provnomb': 'no label', 'distnomb': 'no label', 'tramnomb': 'no label', 'stranomb': 'no label', 'seccnom': 'no label', 'longitud': 'no label', 'Shape_Leng': 'no label', });
lyr_Camino_Inca_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});