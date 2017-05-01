configValues = (defaults) => {
  return {
    appName: 'filemanager',
    listUrl: 'bridges/php-local/index.php',
    uploadUrl: 'bridges/php-local/index.php',
    renameUrl: 'bridges/php-local/index.php',
    copyUrl: 'bridges/php-local/index.php',
    moveUrl: 'bridges/php-local/index.php',
    removeUrl: 'bridges/php-local/index.php',
    editUrl: 'bridges/php-local/index.php',
    getContentUrl: 'bridges/php-local/index.php',
    createFolderUrl: 'bridges/php-local/index.php',
    downloadFileUrl: 'bridges/php-local/index.php',
    downloadMultipleUrl: 'bridges/php-local/index.php',
    compressUrl: 'bridges/php-local/index.php',
    extractUrl: 'bridges/php-local/index.php',
    permissionsUrl: 'bridges/php-local/index.php',
    basePath: '../../../files',
    breadcrumb: false,
    multipleDownloadFileName: 'archive.zip',
    allowedActions: angular.extend(defaults.allowedActions, {
      pickFiles: false,
      pickFolders: false,
    })
  }
}