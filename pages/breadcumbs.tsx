import React from "react";

type Props = {};

const Breadcumbs = (props: Props) => {
	return (
		<div className="grid w-[100vw] place-items-center text-lg breadcrumbs text-primary">
			<ul>
				<li>
					<a>Home</a>
				</li>
				<li>
					<a>Raibu Reta</a>
				</li>
				<li>
					<a>Guides</a>
				</li>
			</ul>
		</div>
	);
};

export default Breadcumbs;
