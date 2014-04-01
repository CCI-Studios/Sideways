<?php

$aliases['dev'] = array(
	'uri'=> 'sideways.ccistaging.com',
	'root' => '/home/staging/subdomains/sideways/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'sidewaysclassicgrill.ca',
	'root' => '/home/sideways/subdomains/live/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'sideways',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);
