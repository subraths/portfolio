// place files you want to import through the `$lib` alias in this folder.
export function addIconToArr(arr: string[]): { name: string; icon: string }[] {
	return arr.map((lang) => {
		return { name: lang, icon: `${lang.replaceAll('.', '')}.svg` };
	});
}
