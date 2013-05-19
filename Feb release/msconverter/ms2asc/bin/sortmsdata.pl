# sortmsdata.pl (v0.2)
# Written By Mohammed Illyas Mansoor (mimansoor@yahoo.com)
# Copyright (C) 2006 Mohammed Illyas Mansoor.
#
# This program converts MetaStock continous ascii data into 
# sorted ascii data, in metastock ascii format.
#
# This is free software.
# There is NO warranty; not even for MERCHANTABILITY or FITNESS 
# FOR A PARTICULAR PURPOSE.
#
# Change Log
# v0.2 (09-JUL-2006)
#  *) Added option to enable to keep last record or first record.
#     Usage: perl sortmsdata.pl -iunsorteddata.asc -fsorteddata -l
#     to keep the last record.
#
# v0.1 (09-JUL-2006)
#  *) Initial Version of sortmsdata.pl
#

sub remove_colon {
    for (@_) { tr/\:// }
}

$file = "JUNK1234100527041975DEADBEEF";
$sorted_file = "JUNK1234100527041975DEADBEEF";
$directory = "JUNK1234100527041975DEADBEEF";

$end_program=0;
$keep_last=0;

while ($_ = $ARGV[0], /^-/) {
    shift;
    last if /^--$/;
    if (/^-v(.*)/) 
    {
        print "sortmsdata (v0\.2)\n";
        print "Written by Mohammed Illyas Mansoor \(mimansoor at yahoo dot com\)\n";
        print "\nCopyright (C) 2006 Mohammed Illyas Mansoor.\n";
        print "This is free software; There is NO warrenty; not even for MERCHANTABILITY\n";
        print "\nor FITNESS FOR A PARTICULAR PURPOSE\.\n";
        print "sortmsdata: Converts Continous MS Data to sorted file Metastock ascii format\n";
        $end_program=1;
    }

    if (/^-i(.*)/) { $file = $1; }

    if (/^-f(.*)/) { $sorted_file = $1; }

    if (/^-o(.*)/) { $directory = $1; }

    if (/^-l(.*)/) { $keep_last = 1; }

    if (/^-h(.*)/) 
    { 
        print "Usage: sortmsdata [-v] [-h] [-i<ascifile>] [-f<sortedfile>] [-o<directory>] [-l]\n";
        print "[-l] option enables to keep last duplicate record, default is to keep frist duplicate.\n";
        $end_program=1;
    } #End of if

} #End of while

if ($end_program) {
exit;
}

#check if the Input file is set
if (($file eq "JUNK1234100527041975DEADBEEF") or 
    ($file eq "")) { 
$IN_FILE = STDIN;
}
else {
open ($IN_FILE, "< $file") or die "Could not open $file\n";
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

#check if the Output file is set
if (($sorted_file eq "JUNK1234100527041975DEADBEEF") or 
    ($sorted_file eq "")) { 
$OUT_FILE = STDOUT;
}
else {
open ($OUT_FILE, "> $dirpath/$sorted_file") or die "Could not open $dirpath/$sorted_file\n";
}

$TICKER=0;
$NAME=1;
$PER=2;
$DATE=3;
$TIME=4;

#Save Header line.
$header_line = <$IN_FILE>;

#Read all the data in memory
LINE: while ($line = <$IN_FILE>)
{
    # Get the tokens first
    @tokens = split/,/, $line;

    #Create an index based on the "Ticker:Date:Time"
    $index= "$tokens[$TICKER]$tokens[$DATE]$tokens[$TIME]";
    remove_colon($index);

    if ($keep_last)
    {
        #Overwrite with the last duplicate record.
        $lines{$index} = $line;
    }
    else
    {
        #Only remember the first duplicate record.
        if ($lines{$index} eq "")
        {
            $lines{$index} = $line;
        }
    }
} # end of while 

#Print the header line
print $OUT_FILE $header_line;

#Now print the lines in sorted ticker order.
foreach $index (sort keys %lines) {
    print $OUT_FILE $lines{$index};
}

#Close all open handles.
close ($IN_FILE);
close ($OUT_FILE);
