#!/usr/bin/env python3
# -*- coding:utf-8 -*-

'介绍'

__author__ = '周子皓'

import time,subprocess


def run(filename,inputname='',timeout=3):
    p = subprocess.Popen(['python',filename],stdin=subprocess.PIPE,stdout=subprocess.PIPE
                         ,stderr=subprocess.PIPE)
    if inputname:
        stdinput = open(inputname,'rb').read()
    else:
        stdinput = None
    p.stdin.write(stdinput) # 输入无效
    begin = time.time()
    while True:
        if not p.poll() == None:
            break
        if time.time()-begin > timeout:
            p.kill()
            return TimeoutError
        time.sleep(0.1)
    return p.stdout.read().decode('utf-8')
