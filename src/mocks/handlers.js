import {rest} from 'msw';

export const handlers = [
	rest.get('https://swapi.dev/api/people/1', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				name: 'Duke Skywalker',
			})
		);
	}),

	rest.get('user/:id', (req, res, ctx) => {
		return res(
			ctx.json({login: req.params.id}),
			ctx.set({
				'Content-Type': 'application/json',
				'Accept-Language': 'en-US',
			})
		);
	}),
];
