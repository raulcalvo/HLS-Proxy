@echo off

set port=8081
set tls=1
set prefetch=0
set verbosity=1

call "%~dp0..\arconaitv.cmd" "%port%" "%tls%" "%prefetch%" "%verbosity%"
