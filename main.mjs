import scrape from 'website-scraper';
import path from 'path';
import fs from 'fs';

const options = {
  urls: ['https://huggingface.co/'],
  directory: './my-website',
  // Use the `events` option to register event listeners
  events: {
    error: (error) => console.error(error),
    end: () => console.log('Website downloaded successfully!'),
  },
};

const scraper = scrape(options);

// Create the directory if it doesn't exist
const absoluteDirectoryPath = path.resolve(options.directory);
if (!fs.existsSync(absoluteDirectoryPath)) {
  fs.mkdirSync(absoluteDirectoryPath);
} else {
  console.warn(`Directory ${absoluteDirectoryPath} already exists, skipping creation`);
}