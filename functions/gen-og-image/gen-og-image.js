const playwright = require("playwright-aws-lambda");

exports.handler = async function (event, ctx) {
	const browser = await playwright.launchChromium();
	const context = await browser._defaultContext;
	const page = await context.newPage();
	await page.setContent(`
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
		</head>

		<body>
			<div id="test"><div>hello</div</div>
		</body>
	</html>
	`);
	const boundingRect = await page.evaluate(() => {
		const test = document.getElementById("test");
		const { x, y, width, height } = test.children[0].getBoundingClientRect();
		return { x, y, width, height };
	});

	const screenshotBuffer = await page.screenshot({ clip: boundingRect });
	await browser.close();
	return {
		isBase64Encoded: true,
		statusCode: 200,
		headers: {
			"Content-Type": "image/png",
			"Content-Length": screenshotBuffer.length.toString(),
		},
		body: screenshotBuffer.toString("base64"),
	};
};
