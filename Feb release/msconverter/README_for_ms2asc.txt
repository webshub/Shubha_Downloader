=============================================================================
COPYRIGHT AND DISCLAIMER NOTICE - 

    MetaStock (r) Command Line Data Conversion Utilities release 1.8.4
    Copyright (C) 2004 Mohammed Illyas Mansoor (mimansoor@yahoo.com). 

    These utility programs are free to use;

    These utility programs are distributed in the hope that it
    will be useful, but WITHOUT ANY WARRANTY; without even the implied
    warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
=============================================================================

These are the release notes for MetaStock Command Line Data Conversion
Utilities version 1.8.4

DOCUMENTATION:
 - Two command line utilies are provided in this release.
   
   *) Utility to convert MetaStock (r) Binary Data Files
   (MASTER, Fxxx.DAT) format to MetaStock(r) ASCII 
   (SYMB,D,YYMMDD,O,H,L,C,V,OI) or (SYMB,I,YYMMDD,HH:MM:SS,O,H,L,C,V,OI)
   format 

   Command Usage:
C:\ms2asc --help
ms2asc: Converts MetaStock Binary Data files to MetaStock ASCII file format
Usage:
ms2asc [--master=|-m <master-filename>] [--file=|-f <ascii-filename>]
       [--help|-h] [--version|-v] [--quite|-q] [--indir=|-i <data-directory>]
       [--purgeZeroVol|-p] [--symbolContains=|-s <ticker_symbol>]
       [--nameContains=|-n <ticker_name>] [--printDateFrom=|-d <date>]
       [--ignoreTicker=yes|no] [--ignoreName=yes|no] [--ignorePer=yes|no]i
       [--ignoreTime=yes|no]   [--ignoreOpen=yes|no] [--ignoreOpenInt=yes|no]
       [--verbosity=low|medium|high] [--exactmatch=yes|no]
       [--printDateUpto=|-u <date>] [--priorityLevel=|-l low|medium|high]

    Example:
    In the directory <data-directory> where your MASTER and Fxxx.DAT files
    reside run C:\ms2asc -m MASTER -f myascfile.asc -i masterdir

    myascfile.asc file will contain data in MetaStock (r) eight field 
    ASCII format.

   *) Utility to convert MetaStock (r) ASCII 
      (SYMB,D,YYMMDD,O,H,L,C,V,OI), (SYMB,I,YYMMDD,HH:MM:SS,O,H,L,C,V,OI)
      format to MetaStock (r) Binary Data Format (MASTER, Fxxx.DAT),
      Check for more supported formats in ChangeLog.txt file.

C:\asc2ms --help
asc2ms: Converts MetaStock ASCII files to MetaStock Binary Data file format
Usage:
asc2ms [--master=|-m <master-filename>]
    [--file=|-f <ascii-filename>] [--help|-h]
    [--version|-v] [--quite|-q] [-o <data-output-directory>]
    [--recordFileExist=|-r appendRecord|updateRecord|recordReplace|fileReplace]
    [--traversefolders=|-t] [--symbol=|-s <ticker-symbol>]
    [--name=|-n <ticker-name> [--useadjustedclose|-u]
    [--date=|-d <date-feild> [--reverseOrder|-b]
    [--priorityLevel=|-l low|medium|high] [--verbosity= low|medium|high]
    [--createNewFiles=|-c yes|no] [--ignoreOpenInterest=yes|no]
    [--ignoreOpen=yes|no] [--lastRecUpdate=yes|no]
    [--dopFiles=|-p yes|no] [--forceWrite=yes|no]

   Example:
   In the directory where you want to create MASTER and Fxxx.DAT files
   run
   C:\asc2ms -f myascfiles.asc -r r -o masterdir

   You will have MASTER and Fxxx.DAT files created in "masterdir"
   directory. Before running this program if you already had MASTER
   and Fxxx.DAT files, the records with same date, or with same date
   and time for intraday data files, would be replaced with the data
   in the ASCII file.

   You could also opt for replacing the entire data file by selecting 
   -r fileReplace option, the default is append data record.

   You could also opt for traverse destination folders option, to create
   the MASTER and data files in different directories, by selection -t 
   option. This option is useful if you have more than 255 different
   securities in your ascii data file.

   Data downloaded from Yahoo could also be converted into metastock format
   Example:
   In the directory where you want to create MASTER and Fxxx.DAT files run
   C:\asc2ms -f myascfiles.csv -o masterdir --symbol TICKER --name TICKER_NAME
      --useadjustedclose

   You will have MASTER and Fxxx.DAT files created in "masterdir"
   with symbol as TICKER and issue name as TICKER_NAME you could opt
   to use the adjusted close given by yahoo, in this case all open, 
   high, low and close will be same as "adjusted close" price. Otherwise
   adjusted close will be ignored.

   As of v1.7.0 MsCmdLineUtils support standard i/o files, hence these
   can be piped with other programs.
