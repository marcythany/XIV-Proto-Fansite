(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[609],
	{
		4582: function (A, e, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/hero",
				function () {
					return a(9329);
				},
			]);
		},
		9329: function (A, e, a) {
			"use strict";
			a.r(e),
				a.d(e, {
					default: function () {
						return c;
					},
				});
			var i = a(1527),
				t = a(9363),
				r = a.n(t),
				s = {
					src: "/_next/static/media/BuriedMemories.618a4a34.jpg",
					height: 2560,
					width: 2880,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJQOv//EAB0QAAICAQUAAAAAAAAAAAAAAAECAxIABAURISL/2gAIAQEAAT8AE5G0vpqRMDDaxX0vKW6Of//EABcRAAMBAAAAAAAAAAAAAAAAAAABITH/2gAIAQIBAT8AV0//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREC/9oACAEDAQE/ANJKQ//Z",
					blurWidth: 8,
					blurHeight: 7,
				},
				n = a(5831),
				l = a(7655);
			let o = (A) =>
				(0, i.jsxs)("div", {
					className: "pan hero min-h-fit",
					children: [
						(0, i.jsx)(function () {
							let [A, e] = (0, n.useSpring)(() => ({x: 0, y: 0, scale: 1})),
								a = (0, l.useDrag)((A) => {
									let {
										event: a,
										active: i,
										movement: [t, r],
									} = A;
									a.preventDefault(),
										e.start({x: i ? t : 0, y: i ? r : 0, scale: i ? 1.1 : 1, immediate: (A) => "scale" !== A && i});
								});
							return (0,
							i.jsx)(n.animated.div, {className: "w-full bg-primary border border-gray-100 rounded-md h-[24rem] bg-clip-padding backdrop-filter backdrop-blur-[0.2rem] bg-opacity-40 overflow-hidden", ...a(), style: A});
						}, {}),
						(0, i.jsx)("img", {
							className: "flex bg-hero-bg w-full h-[24rem] object-cover overflow-hidden",
							src: "/BuriedMemoriesBg.jpg",
						}),
						(0, i.jsxs)("div", {
							className: "flex-col hero-content lg:flex-row",
							children: [
								(0, i.jsx)(r(), {
									src: s,
									className: "max-w-sm rounded-lg shadow-2xl",
									alt: "Buried Memories",
									layout: "responsive",
								}),
								(0, i.jsxs)("div", {
									children: [
										(0, i.jsx)("h1", {className: "text-5xl font-bold", children: "6.2 - Official News!"}),
										(0, i.jsx)("p", {
											className: "py-6",
											children:
												"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
										}),
										(0, i.jsx)("button", {className: "btn", children: "Get Started"}),
									],
								}),
							],
						}),
					],
				});
			var c = o;
		},
	},
	function (A) {
		A.O(0, [363, 371, 774, 888, 179], function () {
			return A((A.s = 4582));
		}),
			(_N_E = A.O());
	},
]);
