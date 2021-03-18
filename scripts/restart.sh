#!/bin/bash

count=`ps aux | grep "blog" | grep -v "grep" | awk '{print $2}'`
echo $count

if [ -n "$count" ]; then
    ps aux | grep "blog" | grep -v "grep" | awk '{print $2}' | xargs kill
    for i in $(seq 60)
    do
        count=`ps aux | grep "blog" | grep -v "grep" | awk '{print $2}'`
        if [ -z "$count" ]; then
            break
        fi
        sleep 0.5
    done
fi

nohup /data/blog/blog > /dev/null 2>&1 &
