$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
Set-Location $PSScriptRoot
& "C:\Program Files\nodejs\npm.cmd" run dev
