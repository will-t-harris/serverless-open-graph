/** @jsx jsx */
import { jsx, Global } from "@emotion/core";

function App() {
	return (
		<div
			css={{
				width: 1200,
				height: 630,
				position: "absolute",
				display: "flex",
				backgroundImage: `repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(135deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(249, 249, 249, 0.02) 143px, rgba(249, 249, 249, 0.02) 191px,rgba(247, 247, 247, 0.02) 191px, rgba(247, 247, 247, 0.02) 239px,rgba(38, 38, 38, 0.02) 239px, rgba(38, 38, 38, 0.02) 273px),linear-gradient(90deg, rgb(69, 69, 69),rgb(3, 3, 3));`,
			}}
		>
			<Global
				styles={{
					"*": {
						boxSizing: "border-box",
						margin: 0,
						padding: 0,
						fontFamily: "system-ui",
						fontSize: 20,
					},
				}}
			/>
			<div
				css={{
					margin: "1rem",
					display: "flex",
					flex: 1,
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 27%,rgba(196, 196, 196,0.05) 27%, rgba(196, 196, 196,0.05) 42%,transparent 42%, transparent 100%),linear-gradient(135deg, transparent 0%, transparent 38%,rgba(196, 196, 196,0.05) 38%, rgba(196, 196, 196,0.05) 41%,transparent 41%, transparent 100%),linear-gradient(45deg, transparent 0%, transparent 19%,rgba(196, 196, 196,0.05) 19%, rgba(196, 196, 196,0.05) 40%,transparent 40%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));`,
				}}
			>
				<h1 css={{}}>How I made the thing do the thing</h1>
				<div css={{ display: "flex", justifyContent: "space-between" }}>
					<ul
						css={{
							listStyleType: "none",
							display: "flex",
							"& li": {
								marginRight: ".5rem",
								"&:not(:last-child):after": {
									content: "'•'",
									marginLeft: ".5rem",
								},
							},
						}}
					>
						<li>react</li>
						<li>serverless</li>
						<li>figma</li>
					</ul>
					<span>@will__tweets</span>
				</div>
			</div>
		</div>
	);
}

export default App;
