import { Storage } from "aws-amplify";

export async function s3Upload(file) {
    //Create unique filename with data and filename
    const filename = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type
    });

    //Return key of stored file
    return stored.key;
}
