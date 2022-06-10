//最终宽度9330，高度7200，9330 / 2 = 4665
var document = app.activeDocument;
var region = [[0,0], [0,7200], [4665,7200], [4665,0]];
var type = SelectionType.REPLACE;
var feather = 0;
var antiAlias = false;
var moveX = app.activeDocument.width - 9330;
var angle = 0;
var bounds = [moveX, 0, app.activeDocument.width, 7200];
app.activeDocument.selection.select(region, type, feather, antiAlias);
app.activeDocument.selection.translate(moveX, 0);
document.crop(bounds, angle);