interface NotebookContent {
    cells: NotebookCell[];
}

interface NotebookCell {
    cell_type: string;
    metadata: {
        tags: string[];
    };
    source: string[];
    outputs: Output[];
}

interface Output {
    data: {
        "text/plain": string[];
    };
}

async function main(workbook: ExcelScript.Workbook) {
    const currentSheet = workbook.getActiveWorksheet();
    const path = currentSheet.getRange("A2").getValue() as string;
    const url = `https://functions.boardflare.com/notebooks/${path}`;

    // Fetch and parse notebook
    const fetchResult = await fetch(url);
    const notebookContent: NotebookContent = await fetchResult.json();
    const cells = notebookContent.cells;

    // Extract args and headers
    let args: unknown[] = [];
    let headers: string[] = [];

    for (let cell of cells) {
        for (let i = 1; i <= 5; i++) {
            if (cell.metadata?.tags?.includes(`arg${i}`)) {
                args[i - 1] = extractValue(cell);
            }
        }
        if (cell.metadata?.tags?.includes("headers")) {
            headers = extractValue(cell) as string[];
        }
    }

    // Set argument values starting from A6
    for (let i = 0; i < args.length; i++) {
        setArgValue(workbook, args[i], getColumnLetter(i), 6); // Pass workbook to setArgValue
    }

    // Set headers in row 5
    if (headers.length > 0) {
        const headerRange = currentSheet.getRange("A5").getResizedRange(0, headers.length - 1);
        headerRange.setValues([headers]);
        headerRange.getFormat().setWrapText(false);
    }
}

function extractValue(cell: NotebookCell): unknown {
    let output = cell.outputs?.[0]?.data?.["text/plain"]?.[0];
    if (output) {
        output = output.trim();
        if (
            (output.startsWith("'") && output.endsWith("'")) ||
            (output.startsWith('"') && output.endsWith('"'))
        ) {
            output = output.slice(1, -1);
        }
        try {
            return JSON.parse(output);
        } catch (e) {
            return output;
        }
    }
    return undefined;
}

// Updated setArgValue function with type declarations
function setArgValue(workbook: ExcelScript.Workbook, arg: unknown, column: string, row: number) {
    const currentSheet: ExcelScript.Worksheet = workbook.getActiveWorksheet();
    if (Array.isArray(arg) && Array.isArray(arg[0])) {
        const range: ExcelScript.Range = currentSheet
            .getRange(`${column}${row}`)
            .getResizedRange(arg.length - 1, (arg[0] as unknown[]).length - 1);
        range.setValues(arg as (string | number | boolean)[][]);
        range.getFormat().setWrapText(false);
    } else {
        currentSheet.getRange(`${column}${row}`).setValue(arg as string | number | boolean);
    }
}

function getColumnLetter(index: number): string {
    let letter = '';
    while (index >= 0) {
        letter = String.fromCharCode((index % 26) + 65) + letter;
        index = Math.floor(index / 26) - 1;
    }
    return letter;
}