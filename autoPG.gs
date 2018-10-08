function onOpen() {
  // create menu
  DocumentApp.getUi()
      .createMenu('Auto PG')
      .addItem('Insert PGs', 'loopPGs')
      .addToUi();
}

function loopPGs() {
  // load text of document for editing
  var ui = DocumentApp.getUi();
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  // load word and PG pairs
  var csvPGs = Utilities.parseCsv(UrlFetchApp.fetch("http://aseemsdb.me/static/data.csv").getContentText());


  for (var i = 1; i < csvPGs.length; i++) {   
    var word = csvPGs[i][0];
    var PG = csvPGs[i][1];
    // if word is surrounded by spaces in document, ask to insert PG
    if (text.findText(" " + word + " ") != null) {
       insertPG(word, PG, text, ui);
    }
  }
}

function insertPG(word, PG, text, ui) {
	// ask user for permission
	var result = ui.alert(
	'Please confirm',
	'Are you sure you want to add the guide ' + PG + ' for ' + word + "?",
	ui.ButtonSet.YES_NO);

	if (result == ui.Button.YES) {
		// add PG to word
		text.replaceText(" " + word + " ", " " + word + " " + PG + " ");
		// change font color to grey
      		setPGbackground(PG, text);
	}
}

function setPGbackground(PG, text) {
	// repeatedly find all instances of the PG and change to grey (needed because default function only styles first instance)
	var PGRange = text.findText(PG);
	while (PGRange != null) {
		var start = PGRange.getStartOffset() - 1;
		var end = PGRange.getEndOffsetInclusive() + 1;
		PGRange.getElement().setForegroundColor(start, end, '#7f7f7f');
		PGRange = text.findText(PG, PGRange);
	}
}
