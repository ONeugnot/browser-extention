const extensions = [
	{
		logo: "./assets/images/logo-devlens.svg",
		name: "DevLens",
		description:
			"Quickly inspect page layouts and visualize element boundaries.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-style-spy.svg",
		name: "StyleSpy",
		description: "Instantly analyze and copy CSS from any webpage element.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-speed-boost.svg",
		name: "SpeedBoost",
		description: "Optimizes browser resource usage to accelerate page loading.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-json-wizard.svg",
		name: "JSONWizard",
		description:
			"Formats, validates, and prettifies JSON responses in-browser.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-tab-master-pro.svg",
		name: "TabMaster Pro",
		description: "Organizes browser tabs into groups and sessions.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-viewport-buddy.svg",
		name: "ViewportBuddy",
		description:
			"Simulates various screen resolutions directly within the browser.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-markup-notes.svg",
		name: "Markup Notes",
		description:
			"Enables annotation and notes directly onto webpages for collaborative debugging.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-grid-guides.svg",
		name: "GridGuides",
		description:
			"Overlay customizable grids and alignment guides on any webpage.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-palette-picker.svg",
		name: "Palette Picker",
		description: "Instantly extracts color palettes from any webpage.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-link-checker.svg",
		name: "LinkChecker",
		description: "Scans and highlights broken links on any page.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-dom-snapshot.svg",
		name: "DOM Snapshot",
		description: "Capture and export DOM structures quickly.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-console-plus.svg",
		name: "ConsolePlus",
		description:
			"Enhanced developer console with advanced filtering and logging.",
		isActive: true,
	},
];

const main = document.querySelector("main");

function createCardElement(element) {
	const section = document.createElement("section");
	const cardElement = document.createElement("div");
	const headerCardElement = document.createElement("div");
	const imgLogo = document.createElement("img");
	const rightHeadElement = document.createElement("div");
	const pElementRightHead = document.createElement("p");
	const spanElementRightHead = document.createElement("span");
	const footerCardElement = document.createElement("div");
	const btnRemoveCardElement = document.createElement("button");
	const labelBtnElement = document.createElement("label");
	const inputCheckBoxElement = document.createElement("input");
	const spanSliderElement = document.createElement("span");

	section.classList.add = "Extensions";
	cardElement.classList.add = "card";
	headerCardElement.classList.add = "header-card";
	rightHeadElement.classList.add = "right-head";
	spanElementRightHead.classList.add = "span-color";
	footerCardElement.classList.add = "footer-card";
	btnRemoveCardElement.classList.add = "remove";
	labelBtnElement.classLista.add = "switch";
	inputCheckBoxElement.classList.add = "checkbox";
	spanSliderElement.classList.add = "slider";
	spanSliderElement.classList.add = "round";

	imgLogo.src = element.logo;
	pElementRightHead.textContent = element.name;
	spanElementRightHead.textContent = element.description;

	section.appendChild(cardElement);
	cardElement.appendChild(headerCardElement);
	headerCardElement.appendChild(imgLogo);
	headerCardElement.appendChild(rightHeadElement);
	rightHeadElement.appendChild(pElementRightHead);
	rightHeadElement.appendChild(spanElementRightHead);
	cardElement.appendChild(footerCardElement);
	footerCardElement.appendChild(btnRemoveCardElement);
	footerCardElement.appendChild(labelBtnElement);
	labelBtnElement.appendChild(inputCheckBoxElement);
	labelBtnElement.appendChild(spanSliderElement);
	return section;
}

const res = createCardElement(element);

extensions.forEach(res);
