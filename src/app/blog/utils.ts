import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//get all files from 'contents' dir
function getAllMdxFiles(dir: string, files: string[] = []) {
    const fileList = fs.readdirSync(dir)
    for (const file of fileList) {
        const name = `${dir}/${file}`
        if (fs.statSync(name).isDirectory()) {
            getAllMdxFiles(name, files)
        } else {
            if (path.extname(file) === '.mdx') {
                files.push(name)
            }
        }
    }
    return files
}

// read data from those files
function readMdxFile(filePath: fs.PathOrFileDescriptor) {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    return matter(rawContent);
}

// show meta data and mdx data
function getMdxData(dir: string) {
    const mdxFiles = getAllMdxFiles(dir);
    return mdxFiles.map((file) => {
        const { data: metadata, content } = readMdxFile(file);
        const slug = path.basename(file, path.extname(file));

        return { metadata, content, slug };
    })
}


// call this function to get the blog post metadata
export function getBlogPosts() {
    return getMdxData(path.join(process.cwd(), 'src', 'app', 'blog', 'contents'));
}

export function getTermsOfServices() {
    return getMdxData(path.join(process.cwd(), 'src', 'app', 'terms-of-services'));
}

export function getPrivacyPolicy() {
    return getMdxData(path.join(process.cwd(), 'src', 'app', 'privacy-policy'));
}

// data formatting for status
export function formatDate(date: string, includeRelative = true) {
    const currentDate = new Date();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }

    const targetDate = new Date(date);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    } else {
        formattedDate = "Today";
    }

    const fullDate = targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    if (!includeRelative) {
        return fullDate;
    }

    return `${fullDate} (${formattedDate})`;
}