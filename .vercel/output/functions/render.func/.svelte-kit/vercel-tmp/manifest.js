export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.6f8d4bcd.js","app":"_app/immutable/entry/app.e5d1a06b.js","imports":["_app/immutable/entry/start.6f8d4bcd.js","_app/immutable/chunks/index.759e29a4.js","_app/immutable/chunks/singletons.0efed360.js","_app/immutable/chunks/index.99454fbc.js","_app/immutable/entry/app.e5d1a06b.js","_app/immutable/chunks/index.759e29a4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
