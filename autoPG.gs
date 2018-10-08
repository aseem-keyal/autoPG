function onOpen() {
  DocumentApp.getUi()
      .createMenu('Auto PG\'r')
      .addItem('Insert PGs', 'loopPGs')
      .addToUi();
}

function loopPGs() {
  var ui = DocumentApp.getUi();
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  var csvPGs = Utilities.parseCsv(UrlFetchApp.fetch("http://aseemsdb.me/static/data.csv").getContentText());


  for (var i = 1; i < csvPGs.length; i++) {   
    var word = csvPGs[i][0];
    var PG = csvPGs[i][1];
    if (text.findText(" " + word + " ") != null) {
       insertPG(word, PG, text, ui);
    }
  }
}

function insertPG(word, PG, text, ui) {
	var result = ui.alert(
	'Please confirm',
	'Are you sure you want to add the guide ' + PG + ' for ' + word + "?",
	ui.ButtonSet.YES_NO);

	if (result == ui.Button.YES) {
      text.replaceText(" " + word + " ", " " + word + " " + PG + " ");
      setPGbackground(PG, text);
	}
}

function setPGbackground(PG, text) {
	var PGRange = text.findText(PG);
	while (PGRange != null) {
		var start = PGRange.getStartOffset() - 1;
		var end = PGRange.getEndOffsetInclusive() + 1;
		PGRange.getElement().setForegroundColor(start, end, '#7f7f7f');
		PGRange = text.findText(PG, PGRange);
	}
}
