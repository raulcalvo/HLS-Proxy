@echo off

set bitrate=2
set port=8080
set tls=0
set prefetch=0
set verbosity=1

call "%~dp0..\riere.cmd" "%bitrate%" "%port%" "%tls%" "%prefetch%" "%verbosity%"
