import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/manifest.json')
	.catch((err: any) => console.error('Error loading remote entries', err))
	.then(() => import('./bootstrap'))
	.catch((err: any) => console.error(err));