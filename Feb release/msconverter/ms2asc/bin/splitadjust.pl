# splitadjust.pl (v0.1)
# Written By Mohammed Illyas Mansoor (mimansoor@yahoo.com)
# Copyright (C) 2007 Mohammed Illyas Mansoor.
#
# This program converts MetaStock continous ascii data into 
# split adjusted ascii data, in metastock ascii format.
#
# This is free software.
# There is NO warranty; not even for MERCHANTABILITY or FITNESS 
# FOR A PARTICULAR PURPOSE.
#
# Change Log
#
# v0.1 (09-JUL-2006)
#  *) Initial Version of splitadjust.pl
#

sub remove_colon {
    for (@_) { tr/\:// }
}

$file = "JUNK1234100527041975DEADBEEF";
$splitadj_file = "JUNK1234100527041975DEADBEEF";
$directory = "JUNK1234100527041975DEADBEEF";

$end_program=0;

while ($_ = $ARGV[0], /^-/) {
    shift;
    last if /^--$/;
    if (/^-v(.*)/) 
    {
        print "splitadjust (v0\.1)\n";
        print "Written by Mohammed Illyas Mansoor \(mimansoor at yahoo dot com\)\n";
        print "\nCopyright (C) 2007 Mohammed Illyas Mansoor.\n";
        print "This is free software; There is NO warrenty; not even for MERCHANTABILITY\n";
        print "\nor FITNESS FOR A PARTICULAR PURPOSE\.\n";
        print "sortmsdata: Converts Continous MS Data to splitadjusted file Metastock ascii format\n";
        $end_program=1;
    }

    if (/^-i(.*)/) { $file = $1; }

    if (/^-f(.*)/) { $splitadj_file = $1; }

    if (/^-o(.*)/) { $directory = $1; }

    if (/^-h(.*)/) 
    { 
        print "Usage: splitadjust [-v] [-h] [-i<ascifile>] [-f<sortedfile>] [-o<directory>]\n";
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
if (($splitadj_file eq "JUNK1234100527041975DEADBEEF") or 
    ($splitadj_file eq "")) { 
$OUT_FILE = STDOUT;
}
else {
open ($OUT_FILE, "> $dirpath/$splitadj_file") or die "Could not open $dirpath/$splitadj_file\n";
}

$TICKER=0;
$NAME=1;
$PER=2;
$DATE=3;
$TIME=4;
$OPEN=5;
$HIGH=6;
$LOW=7;
$CLOSE=8;
$VOL=9;
$OPEN_INT=10;

#Save Header line.
$header_line = <$IN_FILE>;
$i=0;

#Read data in memory.
LINE: while ($line = <$IN_FILE>)
{
    # Get the tokens first
    @tokens = split/,/, $line;

    $lines[$i]    = $line;
    $date[$i]     = $tokens[$DATE];

    $open[$i]     = $tokens[$OPEN];
    $high[$i]     = $tokens[$HIGH];
    $low[$i]      = $tokens[$LOW];
    $close[$i]    = $tokens[$CLOSE];
    $open_int[$i] = $tokens[$OPEN_INT];
    $volume[$i]   = $tokens[$VOL];

    $ticker       = $tokens[$TICKER];
    $name         = $tokens[$NAME];
    $per          = $tokens[$PER];
    $time         = $tokens[$TIME];

    $i++;
} # end of while 


$prev_close = $close[0];

$split_half = ((1.0-(1.0/2.0)))*100.0;
$split_one_third = ((1.0-(1.0/3.0)))*100.0;
$split_one_fourth = ((1.0-(1.0/4.0)))*100.0;
$split_one_fifth = ((1.0-(1.0/5.0)))*100.0;
$split_one_tenth = ((1.0-(1.0/10.0)))*100.0;


for ($j=1; $j < $i; $j++)
{
    {
        if ($open[$j] < $prev_close)
        {
            $diff = $prev_close - $open[$j];
            if ($prev_close != 0)
            {
                $per_diff = ($diff/$prev_close)*100.0;
            }
            else
            {
                $per_diff = 0;
            }

            if (($per_diff > ($split_half-5.0)) && ($per_diff < ($split_half+5.0)))
            {
                #Split 2 for 1
                #print "Split 2 on $date[$j]\n";
                for ($k=0; $k < $j; $k++)
                {
                    $open[$k]     = $open[$k]*0.5;
                    $high[$k]     = $high[$k]*0.5;
                    $low[$k]      = $low[$k]*0.5;
                    $close[$k]    = $close[$k]*0.5;
                    $open_int[$k] = $open_int[$k]*2;
                    $volume[$k]   = $volume[$k]*2;
                }
                $j=1;
            }
            else
            {

                if (($per_diff > ($split_one_third-5.0)) && ($per_diff < ($split_one_third+5.0)))
                {
                    #Split 3 for 1
                    #print "Split 3 on $date[$j]\n";
                    for ($k=0; $k < $j; $k++)
                    {
                        $open[$k]     = $open[$k]*(1.0/3.0);
                        $high[$k]     = $high[$k]*(1.0/3.0);
                        $low[$k]      = $low[$k]*(1.0/3.0);
                        $close[$k]    = $close[$k]*(1.0/3.0);
                        $open_int[$k] = $open_int[$k]*3.0;
                        $volume[$k]   = $volume[$k]*3.0;
                    }
                    $j=1;
                }
                else
                {
                    if (($per_diff > ($split_one_fourth-5.0)) && ($per_diff < ($split_one_fourth+5.0)))
                    {
                        #Split 4 for 1
                        #print "Split 4 on $date[$j]\n";
                        for ($k=0; $k < $j; $k++)
                        {
                            $open[$k]     = $open[$k]*(1.0/4.0);
                            $high[$k]     = $high[$k]*(1.0/4.0);
                            $low[$k]      = $low[$k]*(1.0/4.0);
                            $close[$k]    = $close[$k]*(1.0/4.0);
                            $open_int[$k] = $open_int[$k]*4.0;
                            $volume[$k]   = $volume[$k]*4.0;
                        }
                        $j=1;
                    }
                    else 
                    {
                        if (($per_diff > ($split_one_fifth-5.0)) && ($per_diff < ($split_one_fifth+5.0)))
                        {
                            #Split 5 for 1
                            #print "Split 5 on $date[$j]\n";
                            for ($k=0; $k < $j; $k++)
                            {
                                $open[$k]     = $open[$k]*(1.0/5.0);
                                $high[$k]     = $high[$k]*(1.0/5.0);
                                $low[$k]      = $low[$k]*(1.0/5.0);
                                $close[$k]    = $close[$k]*(1.0/5.0);
                                $open_int[$k] = $open_int[$k]*5.0;
                                $volume[$k]   = $volume[$k]*5.0;
                            }
                            $j=1;
                        }
                        else
                        {
                            if (($per_diff > ($split_one_tenth-5.0)) && ($per_diff < ($split_one_tenth+5.0)))
                            {
                                #Split 10 for 1
                                #print "Split 10 on $date[$j]\n";
                                for ($k=0; $k < $j; $k++)
                                {
                                    $open[$k]     = $open[$k]*(1.0/10.0);
                                    $high[$k]     = $high[$k]*(1.0/10.0);
                                    $low[$k]      = $low[$k]*(1.0/10.0);
                                    $close[$k]    = $close[$k]*(1.0/10.0);
                                    $open_int[$k] = $open_int[$k]*10.0;
                                    $volume[$k]   = $volume[$k]*10.0;
                                }
                                $j=1;
                            }
                        }
                    }
                }
            }
        }
        else
        {
            if ($open[$j] > $prev_close)
            {
                $diff =  $open[$j]*0.5;
                if ($prev_close != 0)
                {
                    $per_diff = (100-($diff/$prev_close)*100.0);
                }
                else
                {
                    $per_diff = -5.0;
                }

                if (($per_diff > (-4.0)) && ($per_diff < (4.0)))
                {
                    #Join 2 for 1
                    #print "Split 0.5 on $date[$j]\n";
                    for ($k=0; $k < $j; $k++)
                    {
                        $open[$k]     = $open[$k]*2;
                        $high[$k]     = $high[$k]*2;
                        $low[$k]      = $low[$k]*2;
                        $close[$k]    = $close[$k]*2;
                        $open_int[$k] = $open_int[$k]*0.5;
                        $volume[$k]   = $volume[$k]*0.5;
                    }
                    $j=1;
                }
                else
                {
                    $diff =  $open[$j]*(1.0/3.0);

                    if ($prev_close != 0)
                    {
                        $per_diff = (100-($diff/$prev_close)*100.0);
                    }
                    else
                    {
                        $per_diff = -5.0;
                    }

                    if (($per_diff > (-4.0)) && ($per_diff < (4.0)))
                    {
                        #Join 3 for 1
                        #print "Split 0.3333 on $date[$j]\n";
                        for ($k=0; $k < $j; $k++)
                        {
                            $open[$k]     = $open[$k]*3;
                            $high[$k]     = $high[$k]*3;
                            $low[$k]      = $low[$k]*3;
                            $close[$k]    = $close[$k]*3;
                            $open_int[$k] = $open_int[$k]*1/3;
                            $volume[$k]   = $volume[$k]*1/3;
                        }
                        $j=1;
                    }
                }
            }
        }
    }

    $prev_close = $close[$j];
}

#Close all open handles.
close ($IN_FILE);

#Print the header line
print $OUT_FILE $header_line;

for ($j=0; $j < $i; $j++)
{
    print $OUT_FILE "$ticker,$name,$per,$date[$j],$time,$open[$j],$high[$j],$low[$j],$close[$j],$volume[$j],$open_int[$j]\n";
}

close ($OUT_FILE);
