Instructions
============
1. Open Google Doc of interest
2. Click Tools -> Script Editor (will open new tab)
3. Replace entire file with contents in autoPG.gs
4. Press Ctrl-S or click the floppy symbol to save and enter 'autoPG' for the project name (or whatever you want)
5. Close the tab and reload the Google Doc, you should now see an 'Auto PG' menu pop up to the right of the "Help" menu (it might take a second)
6. Click Auto PG -> Insert PGs
7. Click "Authorize" and chose your Google account
8. If on Chrome, click "Advanced" and choose "Go to autoPG (unsafe)"
9. Click "Allow" (this will give the script permission to modify the contents of your document)
10. The tab will close and the script will run, asking the user to add a PG for each word it has a PG for

Current Issues
==============
1. Currently only works for words with spaces before and after (e.g. " Aachen " but not " Aachen,")
2. Currently case sensitive
Let me know of any issues!

Possible features
=================
1. Priority value for PGs, allowing the user to only add PGs for words with a certain priority
2. "Accept all PGs" button
3. "Remove all PGs" menu item (right now PGs can be undone with a Ctrl-Z)
4. Give user some context in the confirmation dialog for each PG (e.g. Metis the Greek god vs the Metis people)
5. Customizable styles for pronunciation guide
Send me suggestions for features!
