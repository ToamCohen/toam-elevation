class Renderer {
	constructor() {}
	renderData(data, templateName, containerName) {
		const source = $(`#${templateName}-template`).html();
		const template = Handlebars.compile(source);
		const someHTML = template(data);
		$(`#${containerName}-container`).append(someHTML);
	}
}
