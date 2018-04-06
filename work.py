#!/usr/bin/env python3
# -*- coding:utf-8 -*-

'介绍'

__author__ = '周子皓'

import subprocess,uuid


def run(filename,inp,timeout):
    p = subprocess.Popen(['python',filename],stdin=subprocess.PIPE,stdout=subprocess.PIPE
                         ,stderr=subprocess.PIPE,)
    try:
        p.communicate(inp.encode('utf-8'),timeout=timeout)
    except subprocess.TimeoutExpired:
        p.kill()
        a,b = p.communicate()
        return a.decode('utf-8'),b.decode('utf-8')
    a,b = p.communicate()
    return a.decode('utf-8'), b.decode('utf-8')


def getinput(filename):
    with open(filename,'r') as fp:
        inp = fp.read()
    return inp


def save(code,suffix,inputfile,timeout=3):
    filename = uuid.uuid1().__str__()+'.'+suffix
    with open(filename,'w') as fp:
        fp.write(code)
    return run(filename,getinput(inputfile),timeout=timeout)