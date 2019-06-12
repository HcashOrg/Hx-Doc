# IDE Contract Edit
The single contract in IDE exists as project. Top folders which are csharp, java, kotlin and uvlua are initial folder and not editable. Root folder in top folders is the actual contract project, anything in root folder belogs the project.

In this chapter, we introduce the base new, edit, delete, search and replace operations of contract. We use uvlua as example programming language while others are exactly same.

##New Contract
Click `File`->`New Contract`->`New uvlua Contract` or right click `uvlua`->`New Contract` in resource management to open the new file dialog.

![Start IDE](/img/research/contract_new_in.png)

Input the contract name and select contract template provided by IDE if you needed and finally click `Confirm` to create a new contract.

![Start IDE](/img/research/contract_new.png)

##Improt Contract
Click `File`->`Import Contract`->`Import uvlua Contract` in menu bar or right click `uvlua`->`Import Contract` in resource management to open contract selection dialog.

![Start IDE](/img/research/contract_import_in.png)
![Start IDE](/img/research/contract_import_in1.png)

Select the contract file with uvlua as suffix.

![Start IDE](/img/research/contract_import.png)

##Delete Contract
Right click the contract file or folder in resource management, click `Delete`.

![Start IDE](/img/research/contract_del.png)

##Code Edit

Click contract file to show the code in central area and start the edit. You can get some help from `Help` in menu bar .

![Start IDE](/img/research/contract_edit.png)

##Code Search
There are two methods to start the search, which both need the focus in central code area.

* Ctrl+F to open temprary search dialog on the top of code area. Jump to the first position of search result after press Enter key and the dialog will hide immediately. Press Ctrl+G to jump to next or Shift+Ctrl+G to jump to previous one.

* Alt+F to open permanent search dialog on the top of code area. Press Enter to find next and Shif+Enter to jump to previous one.

![Start IDE](/img/research/contract_find.png)

##Code Relpace

Shift+Ctrl+R to open replace dialog, press Enter after input the source string and press angin after input the replacement string. Please surround your input with "/" if you want the string identitied as regexp(eg: /your_context/ )

![Start IDE](/img/research/contract_replace.png)

##Undo & Redo

Click `Edit`->`Redo` in menu bar or press Ctrl+Z to redo the change. Click `Edit`->`Undo` in menu bar or press Ctrl+Y to undo the change. The title tab of code edit area is shown with red color if there exists unsave change in code file.

![Start IDE](/img/research/contract_redo.png)

##File Save
Click `File`->`Save` in menu bar or Press Ctrl+S to save the current focused file. Click `File`->`Save All` in menu bar or Press Ctrl+Shift+S to save all opened file.

![Start IDE](/img/research/contract_save.png)

