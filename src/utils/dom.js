/**@param {string} path */
export async function fetchStyleSheet(path) {
    let sheetText = await (await fetch(path)).text();
    let styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(sheetText);

    return styleSheet;
}
