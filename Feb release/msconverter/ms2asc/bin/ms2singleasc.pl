# ms2singleasc.pl (v0.3)
# Written By Mohammed Illyas Mansoor (mimansoor@yahoo.com)
# Copyright (C) 2006 Mohammed Illyas Mansoor.
#
# This program converts MetaStock continous ascii data into 
# One file per ticker ascii data, in metastock ascii format.
#
# This is free software.
# There is NO warranty; not even for MERCHANTABILITY or FITNESS 
# FOR A PARTICULAR PURPOSE.
#
# Change Log
# v0.3 (08-JUL-2006)
#  *) Added -o option to create new directories and -h option.
#     Also need to make sure that this tool can only be used if
#     tickers of the same type are grouped together, in other
#     words it works fine with ms2asc's output.
#
# v0.2 (06-JUL-2006)
#  *) Added changes to replace $,* and : to _ from the ticker symbol
#
# v0.1 (03-JUL-2006)
#  *) Initial Version of ms2singleasc.pl
#

sub replace_dollar {
    for (@_) { tr/$/_/ }
}

sub replace_star {
    for (@_) { tr/\*/_/ }
}

sub replace_colon {
    for (@_) { tr/\:/_/ }
}

$file = "JUNK1234100527041975DEADBEEF";
$directory = "JUNK1234100527041975DEADBEEF";

$end_program=0;
while ($_ = $ARGV[0], /^-/) {
    shift;
    last if /^--$/;
    if (/^-v(.*)/) 
    {
        print "ms2singleasc (v0\.3)\n";
        print "Written by Mohammed Illyas Mansoor \(mimansoor at yahoo dot com\)\n";
        print "\nCopyright (C) 2006 Mohammed Illyas Mansoor.\n";
        print "This is free software; There is NO warrenty; not even for MERCHANTABILITY\n";
        print "\nor FITNESS FOR A PARTICULAR PURPOSE\.\n";
        print "ms2singleasc: Converts Continous MS Data to Single file per ticker\n Metastock ascii format\n";
        $end_program=1;
    }

    if (/^-f(.*)/) { $file = $1; }
    if (/^-o(.*)/) { $directory = $1; }
    if (/^-h(.*)/) { print "Usage: ms2singleasc [-v] [-h] [-f<ascifile>] [-o<directory>] \n"; $end_program=1;}
} #End of while

if ($end_program) {
exit;
}

#check if the file is set
if (($file eq "JUNK1234100527041975DEADBEEF") or 
    ($file eq "")) { 
$FILE = STDIN;
}
else {
open ($FILE, "< $file") or die "Could not open $file\n";
}

#Check if the directory is set
if (($directory eq "JUNK1234100527041975DEADBEEF") or 
    ($directory eq "")) { 

    $dirpath=".";

}
else {

    $dirpath=$directory;

    #Check if the directory exists
    if (-d $directory) {
        #The directory already exists
    }
    else {
        #Try creating a directory
        mkdir ($directory, 0755) or die "Could not create $directory dir\n";
    }

}

$TICKER=0;

#Save Header line.
$header_line = <$FILE>;

LINE: while ($line = <$FILE>)
{
    $skip=0;

    # Get the tokens first
    @tokens = split/,/, $line;

    $ticker = $tokens[$TICKER];

    replace_dollar($ticker);
    replace_star($ticker);
    replace_colon($ticker);

    if (!$open{$ticker}) {

        $open{$ticker} = 1;

	#Close previous file handle
        close ($file_handle);

        $file = "$dirpath//$ticker\.csv";

        open ($file_handle, ">> $file") or $skip=1;
        
        if ($skip) {
            warn "Could not open $file\n"; 
            $cantopen{$ticker} = 1;
        }
        else {
            $cantopen{$ticker} = 0;
            print $file_handle $header_line;
            print $file_handle "$line";
        }

    }
    else {

        if (!$cantopen{$ticker}) {
            print $file_handle "$line";
        }
    }

} # end of while 

#Close all open handles.
close ($FILE);
close ($file_handle);
