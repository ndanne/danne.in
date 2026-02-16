// createFolder It always returns "New Folder (1)"

function createFolder(existingFolders) {
    const base = "New Folder";
    
    // Get all numbers from existing "New Folder (n)" folders
    const numbers = existingFolders
        .map(name => {
            const match = name.match(/^New Folder \((\d+)\)$/);
            return match ? Number(match[1]) : 0;
        })
        .filter(n => n > 0);
    // If "New Folder" already exists, treat it as number 0
    if (existingFolders.includes(base)) {
        numbers.push(0);
    }
    // Find highest number (or 0 if none)
    const highest = numbers.length === 0 ? 0 : Math.max(...numbers);
    
    return highest === 0 
        ? base 
        : `${base} (${highest + 1})`;
}
//Recemended way
// Using For Loop
function createFolder(existingFolders) {
    const baseName = "New Folder";
    // Find the highest number used in names like "New Folder (n)"
    let maxNumber = 0;
    for (const folder of existingFolders) {
        // Case 1: exact match → "New Folder" already exists
        if (folder === baseName) {
            maxNumber = Math.max(maxNumber, 0); // ensures we start from 1
            continue;
        }
        // Case 2: "New Folder (n)"
        const match = folder.match(/^New Folder \((\d+)\)$/);
        if (match) {
            const number = parseInt(match[1], 10);
            maxNumber = Math.max(maxNumber, number);
        }
    }
    // Now decide the name
    if (maxNumber === 0) {
        // No "New Folder" and no numbered versions → use plain name
        return baseName;
    } else {
        // Use next number after the highest found
        return `${baseName} (${maxNumber + 1})`;
    }
}

console.log(createFolder([]));  
// → "New Folder"
console.log(createFolder(["New Folder"]));  
// → "New Folder (1)"
console.log(createFolder(["New Folder", "New Folder (1)"]));  
// → "New Folder (2)"
console.log(createFolder(["New Folder (3)", "New Folder (4)"]));  
// → "New Folder"   (because plain name is still free)
console.log(createFolder(["New Folder", "New Folder (3)", "New Folder (4)"]));  
// → "New Folder (5)"
console.log(createFolder(["Projects", "New Folder (2)", "Backup"]));  
// → "New Folder"
