(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[458],
	{
		986: function (A, e, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/navbar",
				function () {
					return a(9148);
				},
			]);
		},
		9148: function (A, e, a) {
			"use strict";
			a.r(e),
				a.d(e, {
					default: function () {
						return o;
					},
				});
			var s = a(1527),
				l = a(9363),
				n = a.n(l),
				r = a(959);
			let i = (A) => {
				let {children: e, className: a, onClick: l} = A;
				return (0, s.jsx)("button", {
					className: "p-2 rounded-full hover:ring-2 hover:ring-gray-900 dark:hover:ring-gray-300 ".concat(a),
					onClick: l,
					children: e,
				});
			};
			var c = a(7997),
				d = {
					src: "/_next/static/media/avatar_96x96.9492eba2.jpg",
					height: 96,
					width: 96,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAjg3/AP/EAB4QAAIBAwUAAAAAAAAAAAAAAAECAwAEEgUREzJC/9oACAEBAAE/AH028E08bQdbfnZgd0wHrKv/xAAaEQACAgMAAAAAAAAAAAAAAAABAgAhBBEx/9oACAECAQE/ADkOp4Du7n//xAAZEQACAwEAAAAAAAAAAAAAAAACIQABAxH/2gAIAQMBAT8AHADp9U//2Q==",
					blurWidth: 8,
					blurHeight: 8,
				};
			let t = (A) => {
				let {systemTheme: e, theme: a, setTheme: l} = (0, c.F)(),
					[t, o] = (0, r.useState)(!1);
				return (
					(0, r.useEffect)(() => {
						o(!0);
					}, []),
					(0, s.jsxs)("div", {
						className: "z-0 navbar bg-neutral",
						children: [
							(0, s.jsx)("div", {
								className: "flex-1",
								children: (0, s.jsxs)("a", {
									className: "text-xl normal-case btn btn-ghost font-saira dark:text-gray-200",
									children: [
										(0, s.jsx)("span", {
											className: "p-1 mr-2 border-2 dark:border-gray-200 text-error",
											children: "XIV",
										}),
										" Proto Fansite",
									],
								}),
							}),
							(0, s.jsx)("div", {
								className: "navbar-center text-[1rem] font-semibold",
								children: (0, s.jsxs)("ul", {
									className: "p-0 menu menu-horizontal",
									children: [
										(0, s.jsx)("li", {children: (0, s.jsx)("a", {children: "Raibu Retta"})}),
										(0, s.jsx)("li", {children: (0, s.jsx)("a", {children: "Guides"})}),
										(0, s.jsx)("li", {children: (0, s.jsx)("a", {children: "Niusu"})}),
										(0, s.jsx)("li", {children: (0, s.jsx)("a", {children: "Contact"})}),
									],
								}),
							}),
							(0, s.jsxs)("div", {
								className: "flex-none gap-2",
								children: [
									(0, s.jsx)("div", {
										className: "form-control",
										children: (0, s.jsx)("input", {
											type: "text",
											placeholder: "Search",
											className: "input input-bordered bg-base-100",
										}),
									}),
									(0, s.jsxs)("div", {
										className: "dropdown dropdown-end",
										children: [
											(0, s.jsx)("label", {
												tabIndex: 0,
												className: "btn btn-ghost btn-circle avatar",
												children: (0, s.jsx)("div", {
													className: "w-10",
													children: (0, s.jsx)(n(), {className: "rounded-full", src: d, alt: "Avatar", fill: !0}),
												}),
											}),
											(0, s.jsxs)("ul", {
												tabIndex: 0,
												className: "p-2 mt-3 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52",
												children: [
													(0, s.jsx)("li", {
														children: (0, s.jsxs)("a", {
															className: "justify-between",
															children: [
																"Profile",
																(0, s.jsx)("span", {className: "badge bg-accent text-primary", children: "New"}),
															],
														}),
													}),
													(0, s.jsx)("li", {children: (0, s.jsx)("a", {children: "Settings"})}),
													(0, s.jsx)("li", {children: (0, s.jsx)("a", {children: "Logout"})}),
												],
											}),
										],
									}),
									(0, s.jsx)("div", {
										children: t
											? "dark" === ("system" === a ? e : a)
												? (0, s.jsx)(i, {
														className: " rounded-full dark:bg-[#c7bc99]",
														onClick: () => l("garden"),
														children: (0, s.jsx)("svg", {
															xmlns: "http://www.w3.org/2000/svg",
															className: "w-5 h-5 fill-accent",
															viewBox: "0 0 20 20",
															children: (0, s.jsx)("path", {
																fillRule: "evenodd",
																d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
																clipRule: "evenodd",
															}),
														}),
												  })
												: (0, s.jsx)(i, {
														className: "rounded-full bg-[#e4d8b4]",
														onClick: () => l("dark"),
														children: (0, s.jsx)("svg", {
															xmlns: "http://www.w3.org/2000/svg",
															className: "w-5 h-5",
															viewBox: "0 0 20 20",
															fill: "#404040",
															children: (0, s.jsx)("path", {
																d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
															}),
														}),
												  })
											: null,
									}),
								],
							}),
						],
					})
				);
			};
			var o = t;
		},
	},
	function (A) {
		A.O(0, [363, 774, 888, 179], function () {
			return A((A.s = 986));
		}),
			(_N_E = A.O());
	},
]);
