$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = "c:\Users\MINEDUCYT\Desktop\Taqueria Jalisco"
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    Write-Host "Cambio detectado: $changeType en $path"
    Start-Process "c:\Users\MINEDUCYT\Desktop\Taqueria Jalisco\auto-push.bat" -NoNewWindow -Wait
}

Register-ObjectEvent $watcher "Changed" -Action $action
Register-ObjectEvent $watcher "Created" -Action $action
Register-ObjectEvent $watcher "Deleted" -Action $action
Register-ObjectEvent $watcher "Renamed" -Action $action

Write-Host "Monitoreando cambios en la carpeta. Presiona Ctrl+C para detener."
while ($true) { Start-Sleep 1 }