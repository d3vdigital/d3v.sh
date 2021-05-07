#!/usr/bin/env bash
PROCESS_NUM=$(ps -ef | grep "<process_name>" | grep -v "grep" | wc -l)
if [ $PROCESS_NUM -eq 0 ];
then
	echo "Starting Process "
	/usr/path/to/process 2> /dev/null &
else
     echo "Process Running"
fi
