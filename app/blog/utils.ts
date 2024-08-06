import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}

export const formatDate = (
  date: string,
  type: 'relative' | 'absolute' = 'relative',
) => {
  let currentDate = new Date();
  let targetDate = new Date(date);

  let timeDifference = currentDate.getTime() - targetDate.getTime();

  let minutesAgo = Math.floor(timeDifference / (1000 * 60));
  let hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let weeksAgo = Math.floor(daysAgo / 7);
  let monthsAgo = Math.floor(daysAgo / 30);
  let yearsAgo = Math.floor(daysAgo / 365);

  let timeString = targetDate.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Jakarta',
  });
  let fullDate = targetDate.toLocaleString('id-ID', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  });

  if (type === 'absolute') {
    return targetDate.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'Asia/Jakarta',
    });
  }

  if (minutesAgo < 1) {
    return 'Baru saja';
  } else if (minutesAgo < 60) {
    return `${minutesAgo} menit yang lalu (${timeString})`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} jam yang lalu (${timeString})`;
  } else if (daysAgo < 7) {
    return `${daysAgo} hari yang lalu (${fullDate})`;
  } else if (weeksAgo < 4) {
    return `${weeksAgo} minggu yang lalu (${fullDate})`;
  } else if (monthsAgo < 12) {
    return `${monthsAgo} bulan yang lalu (${fullDate})`;
  } else {
    return `${yearsAgo} tahun yang lalu (${fullDate})`;
  }
};

export default formatDate;
