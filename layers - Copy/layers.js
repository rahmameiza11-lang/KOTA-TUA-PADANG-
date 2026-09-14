var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Kecamatan1_1 = new ol.format.GeoJSON();
var features_Batas_Kecamatan1_1 = format_Batas_Kecamatan1_1.readFeatures(json_Batas_Kecamatan1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan1_1.addFeatures(features_Batas_Kecamatan1_1);
var lyr_Batas_Kecamatan1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan1_1, 
                style: style_Batas_Kecamatan1_1,
                popuplayertitle: 'Batas_Kecamatan1',
                interactive: false,
                title: '<img src="styles/legend/Batas_Kecamatan1_1.png" /> Batas_Kecamatan1'
            });
var format_sungai_Besar_2 = new ol.format.GeoJSON();
var features_sungai_Besar_2 = format_sungai_Besar_2.readFeatures(json_sungai_Besar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_Besar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_Besar_2.addFeatures(features_sungai_Besar_2);
var lyr_sungai_Besar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_Besar_2, 
                style: style_sungai_Besar_2,
                popuplayertitle: 'sungai_Besar',
                interactive: false,
                title: '<img src="styles/legend/sungai_Besar_2.png" /> sungai_Besar'
            });
var format_bataskelurahan_3 = new ol.format.GeoJSON();
var features_bataskelurahan_3 = format_bataskelurahan_3.readFeatures(json_bataskelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskelurahan_3.addFeatures(features_bataskelurahan_3);
var lyr_bataskelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskelurahan_3, 
                style: style_bataskelurahan_3,
                popuplayertitle: 'batas kelurahan',
                interactive: false,
                title: '<img src="styles/legend/bataskelurahan_3.png" /> batas kelurahan'
            });
var format_jalanbaru_4 = new ol.format.GeoJSON();
var features_jalanbaru_4 = format_jalanbaru_4.readFeatures(json_jalanbaru_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanbaru_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanbaru_4.addFeatures(features_jalanbaru_4);
var lyr_jalanbaru_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanbaru_4, 
                style: style_jalanbaru_4,
                popuplayertitle: 'jalanbaru',
                interactive: false,
                title: '<img src="styles/legend/jalanbaru_4.png" /> jalanbaru'
            });
var format_KawasanKotaTuaPadang_5 = new ol.format.GeoJSON();
var features_KawasanKotaTuaPadang_5 = format_KawasanKotaTuaPadang_5.readFeatures(json_KawasanKotaTuaPadang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanKotaTuaPadang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanKotaTuaPadang_5.addFeatures(features_KawasanKotaTuaPadang_5);
var lyr_KawasanKotaTuaPadang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanKotaTuaPadang_5, 
                style: style_KawasanKotaTuaPadang_5,
                popuplayertitle: 'Kawasan Kota Tua Padang',
                interactive: true,
                title: '<img src="styles/legend/KawasanKotaTuaPadang_5.png" /> Kawasan Kota Tua Padang'
            });
var format_TITIKRELIGI_6 = new ol.format.GeoJSON();
var features_TITIKRELIGI_6 = format_TITIKRELIGI_6.readFeatures(json_TITIKRELIGI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKRELIGI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKRELIGI_6.addFeatures(features_TITIKRELIGI_6);
var lyr_TITIKRELIGI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKRELIGI_6, 
                style: style_TITIKRELIGI_6,
                popuplayertitle: 'TITIK RELIGI',
                interactive: true,
                title: '<img src="styles/legend/TITIKRELIGI_6.png" /> TITIK RELIGI'
            });
var format_TITIKBUDAYAKAWASANKOTATUAPADANG_7 = new ol.format.GeoJSON();
var features_TITIKBUDAYAKAWASANKOTATUAPADANG_7 = format_TITIKBUDAYAKAWASANKOTATUAPADANG_7.readFeatures(json_TITIKBUDAYAKAWASANKOTATUAPADANG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKBUDAYAKAWASANKOTATUAPADANG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKBUDAYAKAWASANKOTATUAPADANG_7.addFeatures(features_TITIKBUDAYAKAWASANKOTATUAPADANG_7);
var lyr_TITIKBUDAYAKAWASANKOTATUAPADANG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKBUDAYAKAWASANKOTATUAPADANG_7, 
                style: style_TITIKBUDAYAKAWASANKOTATUAPADANG_7,
                popuplayertitle: 'TITIK BUDAYA KAWASAN KOTA TUA PADANG',
                interactive: true,
                title: '<img src="styles/legend/TITIKBUDAYAKAWASANKOTATUAPADANG_7.png" /> TITIK BUDAYA KAWASAN KOTA TUA PADANG'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Batas_Kecamatan1_1.setVisible(true);lyr_sungai_Besar_2.setVisible(true);lyr_bataskelurahan_3.setVisible(true);lyr_jalanbaru_4.setVisible(true);lyr_KawasanKotaTuaPadang_5.setVisible(true);lyr_TITIKRELIGI_6.setVisible(true);lyr_TITIKBUDAYAKAWASANKOTATUAPADANG_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Batas_Kecamatan1_1,lyr_sungai_Besar_2,lyr_bataskelurahan_3,lyr_jalanbaru_4,lyr_KawasanKotaTuaPadang_5,lyr_TITIKRELIGI_6,lyr_TITIKBUDAYAKAWASANKOTATUAPADANG_7];
lyr_Batas_Kecamatan1_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_sungai_Besar_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', 'Nama_Sunga': 'Nama_Sunga', });
lyr_bataskelurahan_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_jalanbaru_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_KawasanKotaTuaPadang_5.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Shape_Le_2': 'Shape_Le_2', });
lyr_TITIKRELIGI_6.set('fieldAliases', {'fid': 'fid', 'No': 'Kategori', 'Nama_Awala': 'Nama Awal Bangunan', 'Nama_Trans': 'Nama Masa Transisi', 'Nama_Sekar': 'Nama Bangunan Saat Ini', 'Satus Cagar Budaya': 'Satus Cagar Budaya', 'Foto Plakat Cagar Budaya': 'Foto Plakat Cagar Budaya', 'No_CB': 'No. Cagar Budaya', 'No__Invent': 'No. Inventaris', 'Tahun_Berd': 'Tahun Berdiri', 'Fungsi_Ban': 'Fungsi Bangunan', 'Kepemilika': 'Kepemilikan', 'Pengelola': 'Pengelola', 'Kondisi_Fi': 'Kondisi Fisik Bangunan', 'Foto': 'Foto Bangunan', 'Deskripsi': 'Deskripsi Sejarah', 'Foto Perayaan atau Tradisi': 'Foto Perayaan atau Tradisi', 'Deskripsi B': 'Deskripsi  Arkeologi', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Longitude_': 'Longitude_', 'Latitude_D': 'Latitude_D', });
lyr_TITIKBUDAYAKAWASANKOTATUAPADANG_7.set('fieldAliases', {'fid': 'fid', 'Kategori': 'Kategori', 'Nama_Awal': 'Nama Awal Bangunan', 'Masa trans': 'Nama Masa Transisi', 'bangunan s': 'Nama Bangunan Sekarang', 'status cag': 'Status Cagar Budaya', 'no cb': 'No Cagar Budaya', 'no iventra': 'No. Inventaris', 'tahun ber': 'Tahun Berdiri', 'kepemilika': 'Kepemilikan', 'pengelolaa': 'Pengelolaan', 'kondisi fi': 'Kondisi Bangunan', 'dokumentas': 'Foto Bangunan', 'foto plaka': 'Foto Plakat Cagar Budaya', 'Foto Tradi': 'Foto Tradisi', 'Alamat': 'Alamat', 'kelurahan': 'Kelurahan', 'kecamatan': 'Kecamatan', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Longitude_': 'Longitude', 'Langitude_': 'Langitude', 'Fungsi Bangunan': 'Fungsi Bangunan', 'Sejarah': 'Sejarah', 'Deskripsi': 'Deskripsi Arkeologi', });
lyr_Batas_Kecamatan1_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_sungai_Besar_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Nama_Sunga': '', });
lyr_bataskelurahan_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_jalanbaru_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_KawasanKotaTuaPadang_5.set('fieldImages', {'Id': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', 'Shape_Le_2': '', });
lyr_TITIKRELIGI_6.set('fieldImages', {'fid': 'TextEdit', 'No': 'TextEdit', 'Nama_Awala': 'TextEdit', 'Nama_Trans': 'TextEdit', 'Nama_Sekar': 'TextEdit', 'Satus Cagar Budaya': 'TextEdit', 'Foto Plakat Cagar Budaya': 'ExternalResource', 'No_CB': 'Range', 'No__Invent': 'TextEdit', 'Tahun_Berd': 'TextEdit', 'Fungsi_Ban': 'TextEdit', 'Kepemilika': 'TextEdit', 'Pengelola': 'TextEdit', 'Kondisi_Fi': 'TextEdit', 'Foto': 'ExternalResource', 'Deskripsi': 'TextEdit', 'Foto Perayaan atau Tradisi': 'ExternalResource', 'Deskripsi B': 'TextEdit', 'Alamat': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Longitude_': 'TextEdit', 'Latitude_D': 'TextEdit', });
lyr_TITIKBUDAYAKAWASANKOTATUAPADANG_7.set('fieldImages', {'fid': 'TextEdit', 'Kategori': 'TextEdit', 'Nama_Awal': 'TextEdit', 'Masa trans': 'TextEdit', 'bangunan s': 'TextEdit', 'status cag': 'TextEdit', 'no cb': 'TextEdit', 'no iventra': 'TextEdit', 'tahun ber': 'TextEdit', 'kepemilika': 'TextEdit', 'pengelolaa': 'TextEdit', 'kondisi fi': 'TextEdit', 'dokumentas': 'ExternalResource', 'foto plaka': 'ExternalResource', 'Foto Tradi': 'ExternalResource', 'Alamat': 'TextEdit', 'kelurahan': 'TextEdit', 'kecamatan': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Longitude_': 'TextEdit', 'Langitude_': 'TextEdit', 'Fungsi Bangunan': 'TextEdit', 'Sejarah': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_Batas_Kecamatan1_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_sungai_Besar_2.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'Shape_Leng': 'no label', 'Nama_Sunga': 'no label', });
lyr_bataskelurahan_3.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_jalanbaru_4.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_KawasanKotaTuaPadang_5.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Shape_Le_2': 'no label', });
lyr_TITIKRELIGI_6.set('fieldLabels', {'fid': 'hidden field', 'No': 'inline label - visible with data', 'Nama_Awala': 'inline label - visible with data', 'Nama_Trans': 'inline label - visible with data', 'Nama_Sekar': 'inline label - visible with data', 'Satus Cagar Budaya': 'inline label - visible with data', 'Foto Plakat Cagar Budaya': 'inline label - visible with data', 'No_CB': 'inline label - visible with data', 'No__Invent': 'inline label - visible with data', 'Tahun_Berd': 'inline label - visible with data', 'Fungsi_Ban': 'inline label - visible with data', 'Kepemilika': 'inline label - visible with data', 'Pengelola': 'inline label - visible with data', 'Kondisi_Fi': 'inline label - visible with data', 'Foto': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'Foto Perayaan atau Tradisi': 'inline label - visible with data', 'Deskripsi B': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'header label - always visible', 'Longitude_': 'hidden field', 'Latitude_D': 'hidden field', });
lyr_TITIKBUDAYAKAWASANKOTATUAPADANG_7.set('fieldLabels', {'fid': 'no label', 'Kategori': 'no label', 'Nama_Awal': 'no label', 'Masa trans': 'no label', 'bangunan s': 'no label', 'status cag': 'no label', 'no cb': 'no label', 'no iventra': 'no label', 'tahun ber': 'no label', 'kepemilika': 'no label', 'pengelolaa': 'no label', 'kondisi fi': 'no label', 'dokumentas': 'no label', 'foto plaka': 'no label', 'Foto Tradi': 'no label', 'Alamat': 'no label', 'kelurahan': 'no label', 'kecamatan': 'no label', 'Bujur': 'no label', 'Lintang': 'no label', 'Longitude_': 'no label', 'Langitude_': 'no label', 'Fungsi Bangunan': 'no label', 'Sejarah': 'no label', 'Deskripsi': 'no label', });
lyr_TITIKBUDAYAKAWASANKOTATUAPADANG_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});